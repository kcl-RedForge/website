// Regenerates public/og.png, public/apple-touch-icon.png and public/favicon-32.png.
// Run: node tools/render-images.mjs (needs Playwright).
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import path from 'node:path';
const dir = path.dirname(new URL(import.meta.url).pathname);
const browser = await chromium.launch();
const shot = async (file, sel, out, scale = 1) => {
  const page = await browser.newPage({ deviceScaleFactor: scale });
  await page.goto('file://' + path.join(dir, file));
  await page.evaluate(() => document.fonts.ready);
  await page.locator(sel).screenshot({ path: path.join(dir, '..', 'public', out) });
  await page.close();
};
await shot('og.html', '#og', 'og.png');
await shot('icon.html', '#i', 'apple-touch-icon.png');
await shot('icon.html', '#i', 'favicon-32.png', 32 / 180);
await browser.close();
