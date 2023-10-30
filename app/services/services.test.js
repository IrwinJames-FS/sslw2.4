const { queryUniversities } = require("../services");
const testUrlPromise = (description, promise) => test(description, () => promise
.then(res => expect(res.status).toBe(200))
.catch(err => {
	throw err;
}));

describe("Testing Services", () => {
	testUrlPromise("Testing Fetch all universities", queryUniversities());
	
	testUrlPromise("Testing Fetch University by name", queryUniversities({name:"full sail"}));

	testUrlPromise("Testing Fetch University by country", queryUniversities({country:"United States"}));

	testUrlPromise("Testing Paginated Fetch", queryUniversities({limit:10, offset:0}));

	testUrlPromise("Test Country & Name Fetch", queryUniversities({country:"united states", name:"tech"}));

	testUrlPromise("Test Country & Name * Pagination fetch", queryUniversities({country: "united states", name:"tech", limit:10, offset: 10}));
});