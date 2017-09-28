/**
 * idValidator, given a id will check that all charaters are numeric and return true or false.
 * @param id 
 */
module.exports = function isValidId(id) {
    return /^[0-9]+$/.test(id);
}