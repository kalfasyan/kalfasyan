// Rebuild docs/Kalfas_Ioannis_Resume.pdf from cv/resume.html.
// Usage (from the repo root): node cv/build.js
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, 'resume.html'), { waitUntil: 'load' });
  await page.pdf({ path: path.resolve(__dirname, '..', 'docs', 'Kalfas_Ioannis_Resume.pdf'), format: 'Letter', preferCSSPageSize: true, printBackground: true });
  await browser.close();
})();
