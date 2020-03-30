const express = require("express");
const app = express();

app.get("/", function(req, res) {
  const puppeteer = require("puppeteer");
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://douban.com');
    const result = await page.screenshot({path: 'douban.png'});
  
    await browser.close();
    res.send(result);
  })();
});

app.listen(5000, function() {});
