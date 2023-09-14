const scraperObject = {
	async scraper(browser, url) {
		try {
			let page = await browser.newPage();
			await page.setViewport({
				width: 420,
				height: 700,
			});
			console.log(`Navigating to ${url}...`);
			await page.goto(url);

			await autoScroll(page);

			// const html = await page.$("html");

			// const text = await (
			// 	await html.getProperty("textContent")
			// ).jsonValue();

			const text = await page.evaluate(() => document.children[0].outerHTML);

			return text;
		} catch (err) {
			throw err;
		}
	},
};

async function autoScroll(page) {
	await page.evaluate(async () => {
		await new Promise((resolve) => {
			var totalHeight = 0;
			var distance = 100;
			var timer = setInterval(() => {
				var scrollHeight = document.body.scrollHeight;
				window.scrollBy(0, distance);
				totalHeight += distance;

				if (totalHeight >= scrollHeight - window.innerHeight) {
					clearInterval(timer);
					resolve();
				}
			}, 100);
		});
	});
}

module.exports = scraperObject;
