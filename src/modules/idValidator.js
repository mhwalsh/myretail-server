/**
 * 
 * @param id 
 */
module.exports = function isValidId(id) {
    return /^[0-9]+$/.test(id);
}