const { queryUniversities, qx } = require("./index");

const testUrlPromise = (description, promise) => test(description, () => promise
.then(res => expect(res.status).toBe(200))
.catch(err => {
	throw err;
}));

describe("Testing Services", () => {
	
	test("Test Query builder with no provided arguments", () => expect(qx()).toBe(""));
	test("Test Query building method", () => expect(qx({name: "tech", country:"united states", limit: 2, offset: undefined})).toMatch(/^[a-zA-Z0-9_&\s?=]+$/))
	test("Test only undefined qx parameters", ()=> expect(qx({limit: undefined, offset: undefined})).toBe(""));
	testUrlPromise("Testing Fetch all universities", queryUniversities({name: "tech", country: "united states", limit: 2, offset:0}));
});