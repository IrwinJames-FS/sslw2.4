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
	const q = Object.keys(query).filter(key => query[key] != undefined).map(key => `${key}=${query[key]}`)
	return q.length > 0 ? `?${q.join('&')}`:'';
}

/**
 * Get a list of universities
 * @param {string | undefined} limit - total number of records to be returned
 * @param {string | undefined} offset - starting point for the query
 * @returns {Promise<Array<Object>, Error>}
 */
const getUniversities = async (limit, offset) => await axios.get(`${process.env.apiUrl}${qx({limit, offset})}`);

/**
 * Fetch universities matching the provided name
 * @param {string} name 
 * @param {string | undefined} limit - total number of records to be returned
 * @param {string | undefined} offset - starting point for the query
 * @returns {Promise<Array<Object>, Error>}
 */
const getUniversitiesByName = async (name, limit, offset) => await axios.get(`${process.env.apiUrl}${qx({name, limit, offset})}`);

/**
 * Get universities by country.
 * @param {string} country 
 * @param {string | undefined} limit - total number of records to be returned
 * @param {string | undefined} offset - starting point for the query
 * @returns {Promise<Array<Object>, Error>}
 */
const getUniversitiesByCountry = async (country, limit, offset) => new axios.get(`${process.env.apiUrl}${qx({country, limit, offset})}`);


module.exports = {
	getUniversities,
	getUniversitiesByName,
	getUniversitiesByCountry
}