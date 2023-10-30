const { getUniversities, getUniversitiesByName, getUniversitiesByCountry } = require("../services");
const testUrlPromise = (description, promise) => test(description, () => promise
.then(res => expect(res.status).toBe(200))
.catch(err => {
	throw err;
}));

describe("Testing Services", () => {
	testUrlPromise("Testing Fetch all universities", getUniversities());
	
	testUrlPromise("Testing Fetch University by name", getUniversitiesByName("full sail"));

	testUrlPromise("Testing Fetch University by country", getUniversitiesByCountry("United States"));
});