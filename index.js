const { chromium } = require("playwright");

(async () => {
  console.log("🚀 Starting...");

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.horariodebrasilia.org");
  await page.waitForTimeout(2000);

  await page.screenshot({ path: "screenshot.png", fullPage: true });
  console.log("📸 Screenshot saved as screenshot.png");

  const currentDate = await page.locator("#dia-topo").textContent();
  console.log(`🕐 Brazil time: ${currentDate}`);

  await browser.close();
  console.log("✅ Finished!");
})();
