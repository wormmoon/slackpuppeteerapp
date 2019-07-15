const puppeteer = require('puppeteer');

const getScreenshots = (location) => {
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto(`${location}`);
    // IMG
    // Need to make a new file name each time otherwise nothing happens
    await page.screenshot({
      path: 'location.png',
      fullPage: true,
      scale: 0.5
    });
    // PDF
    await page.pdf({
      path: 'location.pdf',
      printBackground: true,
      displayHeaderFooter: true,
      scale: 0.5
    });
    await browser.close();
  });
}

module.exports = getScreenshots;