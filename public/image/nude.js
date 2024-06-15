exports.name = '/image/nude';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const nude = require('./data/json/nude.json');
        var image = nude[Math.floor(Math.random() * nude.length)].trim();
        res.jsonp({
            url: image,
            count: nude.length,
            author: 'TáoTPk'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}