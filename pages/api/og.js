import { serializeError } from 'serialize-error';
import chromium from 'chrome-aws-lambda';

const SELECTOR = 'main > div > section';

function isValidUrl(url) {
  const { hostname } = new URL(url);

  return hostname === 'ballaballa-balkan.de' || hostname.endsWith('ballaballa-balkan.vercel.app') || hostname === 'localhost';
}

async function getBrowserInstance() {
  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1200,
      height: 600
    },
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  });
}

async function takeScreenshot(url) {
  let browser = null;

  try {
    browser = await getBrowserInstance();

    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForSelector(SELECTOR);

    const featured = await page.$(SELECTOR);

    return featured.screenshot({
      type: 'png'
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export default async function handler(req, res) {
  const { query } = req;

  try {
    if (query.url && isValidUrl(query.url)) {
      const screenshot = await takeScreenshot(query.url);

      if (!screenshot) {
        throw new Error('Screenshot could not be generated.');
      }

      res.setHeader('Cache-Control', `max-age=${60 * 60 * 24}, public, immutable`);
      res.setHeader('Content-Type', 'image/png');
      res.status(200).send(screenshot);
    } else {
      throw new Error(
        "Either the url parameter wasn't passed of the URL is not allowed to be screenshotted."
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

  return {};
}
