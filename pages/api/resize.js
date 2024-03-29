import { serializeError } from 'serialize-error';
import sizeOf from 'buffer-image-size';
import path from 'path';
import sharp from 'sharp';

const SIZES = {
  twitter: [1200, 600],
  facebook: [1200, 628]
};

function getSize(name) {
  return SIZES[name];
}

function isValidSize(name) {
  return !!SIZES[name];
}

function isValidURL(url) {
  const { hostname } = new URL(url);
  const ALLOWED_HOSTS = [
    'localhost',
    'ballaballa-balkan.de'
  ];

  return hostname.endsWith('gustavpursche.vercel.app') || ALLOWED_HOSTS.includes(hostname);
}

function getImageFit(width, height) {
  let value = 'contain';
  let longEdge = width;
  let shortEdge = height;

  if (!width || !height) {
    return value;
  }

  if (height > width) {
    longEdge = height;
    shortEdge = width;
  }

  if (longEdge / shortEdge >= 1.5) {
    value = 'cover';
  }

  return value;
}

function getImageMimeType(url) {
  const parsedUrl = new URL(url);
  const filename = path.extname(parsedUrl.pathname);

  return filename.split('.').pop().toLocaleLowerCase();
}


async function resizeImage(url, size) {
  const image = await fetch(url)
    .then((res) => res.arrayBuffer());
  const imageBuffer = Buffer.from(image);
  const dimensions = sizeOf(imageBuffer);

  return await sharp(imageBuffer)
    .resize(...getSize(size), {
      fit: getImageFit(dimensions?.width, dimensions?.height),
      background: { r: 254, g: 111, b: 94 }
    })
    .toFormat(getImageMimeType(url))
    .toBuffer();
}

export default async function handler(req, res) {
  const { query } = req;

  try {
    if (query.url && isValidURL(query.url)) {
      const { url, size } = query;

      if (size && isValidSize(size)) {
        const image = await resizeImage(url, size);

        res.setHeader(
          'Cache-Control',
          `max-age=${60 * 60 * 24 * 30}, public, immutable`
        );
        res.setHeader('Content-Type', `image/${getImageMimeType(url)}`);
        res.status(200).send(image);
      } else {
        throw new Error('The size parameter is invalid.');
      }
    } else {
      throw new Error(
        "Either the url parameter wasn't passed of the URL is not allowed to be resized."
      );
    }
  } catch (error) {
    res
      .status(500)
      .send(
        process.env.NODE_ENV !== 'production'
          ? JSON.stringify(serializeError(error))
          : ''
      );
  }
}
