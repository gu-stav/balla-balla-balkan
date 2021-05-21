import { createCanvas, loadImage, registerFont, Image } from 'canvas';
import { join } from 'path';
import multilineText from 'canvas-multiline-text';

function getBasePath() {
  if (process.env.NODE_ENV !== 'production') {
    return join(process.cwd(), '_aws', 'og');
  }

  return join(__dirname, '_aws', 'og');
}

async function createOGImage(title) {
  console.log(getBasePath());

  registerFont(`${getBasePath()}/JosefinSans-Bold.ttf`, { family: 'Josefin Sans' });

  const canvas = createCanvas(1200, 600)
  const ctx = canvas.getContext('2d')

  ctx.globalCompositeOperation = 'destination-over'
  ctx.fillStyle = "rgb(254, 111, 94)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over'

  const img = new Image()
  img.onload = () => ctx.drawImage(img, 280, 200)
  img.onerror = err => { throw err }
  img.src = `${getBasePath()}/waveform.png`;

  const image = await loadImage('https://neu.ballaballa-balkan.de/_next/image?url=%2Fimages%2Fupload%2Fartworks-c1ry7kkxso5qjgrk-yoab6g-t500x500.jpg&w=750&q=75');
  const imageSize = 400;
  ctx.drawImage(image, canvas.width - imageSize - imageSize * 0.2, (canvas.height - imageSize) / 2, imageSize, imageSize);

  ctx.fillStyle = "white";

  ctx.font = '26px Josefin Sans'
  ctx.fillText('Neues vom BallaBalla-Balkan', 100, 90);

  ctx.fillStyle = "black";

  multilineText(ctx, title, {
    rect: {
      x: 100,
      y: 100,
      width: canvas.width - imageSize - imageSize * 0.5,
      height: canvas.height - 20
    },
    font: 'Josefin Sans',
    verbose: true,
    lineHeight: 1.1,
    minFontSize: 16,
    maxFontSize: 58
  });

  return canvas.toBuffer('image/png');
}

export default async function handler(req, res) {
  const { title } = req.query;

  const image = await createOGImage(title);

  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(image);
}
