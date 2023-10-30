const axios = require("axios");
require("dotenv").config();

/**
 * A convenience method to build a url query from an object.
 * 
 * Because we are taking information from one search parameter and using it on another it should be safe to assume the string is already URIEncoded or compliant
 * a third party solution that may be more robust would be query-string
 * @param {Object} query - query object to be converted to url search params
 * @returns {string}
 */
const qx = (query) => { 
	if (!query) return '';
	const q = Object.keys(query).filter(key => query[key] != undefined).map(key => `${key}=${query[key]}`)
	return q.length > 0 ? `?${q.join('&')}`:'';
}

/**
 * a method to translate queries
 * @param {*} query 
 * @returns 
 */
const queryUniversities = async query => axios.get(`${process.env.apiUrl}${qx(query)}`);

module.exports = {
	queryUniversities
}