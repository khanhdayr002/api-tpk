exports.name = '/image/lienquan';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const lienquan = require('./data/json/lienquan.json');
        var image = lienquan[Math.floor(Math.random() * lienquan.length)].trim();
        res.jsonp({
            url: image,
            count: lienquan.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}