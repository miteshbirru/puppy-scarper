const puppeteer = require("puppeteer");

async function startBrowser() {
	let browser;
	try {
		console.log("Opening the browser...");
		browser = await puppeteer.launch({
			headless: true,
			ignoreHTTPSErrors: true,
			arguments: ["--enable-gpu"],
		});
	} catch (error) {
		console.log("Could not create a browser instance => : ", error);
	}

	return browser;
}

module.exports = {
	startBrowser,
};
