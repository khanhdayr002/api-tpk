exports.name = '/image/saumui';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const saumui = require('./data/json/saumui.json');
        var image = saumui[Math.floor(Math.random() * saumui.length)].trim();
        res.jsonp({
            url: image,
            count: saumui.length,
            author: 'TáoTPk'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}