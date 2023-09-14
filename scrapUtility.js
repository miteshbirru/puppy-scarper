const browserObject = require("./browser");
const scarperController = require("./pageController");

module.exports = async (url) => {
	let browserInstance = browserObject.startBrowser();
	return await scarperController(browserInstance, url);
};
