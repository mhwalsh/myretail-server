/**
 * buildUrl, given a url with the replace string and a product id,
 * will return an url with the desired ID in the desired location
 * * @param url
 * * @param prodId 
 */
module.exports = function buildUrl(url, prodId) {
    return url.replace(/PRODUCTID/g, prodId);
}