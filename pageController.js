const pageScraper = require("./pageScraper");

async function scrapeAll(browserInstance, url) {
	let browser;
	try {
		browser = await browserInstance;
		let text = await pageScraper.scraper(browser, url);
		await browser.close();

		return text;
	} catch (err) {
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance, url) => scrapeAll(browserInstance, url);
