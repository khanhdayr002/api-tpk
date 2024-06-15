exports.name = '/image/trai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const trai = require('./data/json/trai.json');
        var image = trai[Math.floor(Math.random() * trai.length)].trim();
        res.jsonp({
            url: image,
            count: trai.length,
            author: 'TáoTPk'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}