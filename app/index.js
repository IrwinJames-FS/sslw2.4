const express = require("express");
const router = require("./router");
const app = express();

//http://<hostname>
app.get("/", (_, res) => res.status(200).send("Service is up"));

app.use('/uni', router);

app.use((req, res, next) => {
	const error = new Error("NOT FOUND!");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next)=>{
	res.status(error.status || 500).json({
		error: {
			message: error.message,
			status: error.status,
			method: req.method
		}
	})
	throw error
})


module.exports = app;