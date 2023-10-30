const express = require("express");
const { getUniversities, getUniversitiesByName, getUniversitiesByCountry } = require("../services");

const router = express.Router();

const responseHandler = res => ({data}) => res.status(200).json(data);
const errorHandler = next => (err, status) => {
	if(status) err.status = status;
	return next(err);
}
/*
Fetch all universities
*/
router.get('/', (_, res, next) => {
	return getUniversities()
	.then(responseHandler(res))
	.catch(err => next(err))
});

/*
Fetch allowing for pagination
*/

router.get('/page/:limit?/:offset?', (req, res, next) => {
	const {limit, offset} = req.params;
	return getUniversities(limit, offset)
		.then(responseHandler(res))
		.catch(errorHandler(next))
});

/*
Fetch universities by name
*/
router.get('/name/:name/:limit?/:offset?', (req, res, next) => {
	const { name, limit, offset} = req.params;
	return getUniversitiesByName(name, limit, offset)
	.then(responseHandler(res))
	.catch(errorHandler(next));
});

/*
Fetch universities by country
*/
router.get('/country/:country/:limit?/:offset?', (req, res, next) => {
	const {country, limit, offset} = req.params;
	return getUniversitiesByCountry(country, limit, offset)
	.then(responseHandler(res))
	.catch(errorHandler(next));
});

module.exports = router;