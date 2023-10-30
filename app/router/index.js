const express = require("express");
const { queryMiddleware } = require("./middleware");

const router = express.Router();

/*
Fetch all universities
*/
router.get('/', queryMiddleware);

/*
Fetch allowing for pagination
*/

router.get('/page/:limit?/:offset?', queryMiddleware);

/*
Fetch universities by name
*/
router.get('/name/:name/:limit?/:offset?', queryMiddleware);

/*
Fetch universities by country
*/
router.use("/country/:country/:limit?/:offset?", queryMiddleware);

/*
Fetch universities by country and name
*/
router.use("/countryname/:country/:name/:limit?/:offset?", queryMiddleware);




module.exports = router;