/**
 * 
 */
module.exports = function buildUrl(url, prodId) {
    return url.replace(/PRODUCTID/g, prodId);
}