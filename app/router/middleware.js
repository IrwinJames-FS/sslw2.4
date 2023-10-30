/*
Upon completion of this code I realized it was far to complicated as each endpoint utilizes the same logic sooo. I will be creating a middleware that handles each endpoint.
*/

const { queryUniversities } = require("../services");
const { dataResponseHandler, errorResponseHandler } = require("./handler");

const queryMiddleware = (req, res, next) => queryUniversities(req.params)
.then(dataResponseHandler(res))
.catch(errorResponseHandler(next));

module.exports = {
	queryMiddleware
}