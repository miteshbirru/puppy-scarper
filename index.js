const express = require("express");
const app = express();
const scarperUtility = require("./scrapUtility");

const PORT = 8888;

app.get("/", async (req, res) => {
	let text = await scarperUtility(
		"https://www.careervira.com/course/complete-data-science-course-with-python"
	);
	res.status(200).write(text);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}....`));
