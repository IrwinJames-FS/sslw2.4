/**
 * Generic method to respond using the data property
 * @param {*} res 
 * @returns 
 */
const dataResponseHandler = res => ({data}) => res.status(200).json(data);


const errorResponseHandler = next => err => next(err);

module.exports = {
	dataResponseHandler,
	errorResponseHandler
}