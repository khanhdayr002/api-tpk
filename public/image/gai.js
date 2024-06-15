exports.name = '/image/gai';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const gai = require('./data/json/gai.json');
        var image = gai[Math.floor(Math.random() * gai.length)].trim();
        res.jsonp({
            url: image,
            count: gai.length,
            author: 'TáoTPk'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}