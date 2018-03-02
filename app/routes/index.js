(function(){
    'use strict';
    var url = require("url");
    var mongo = require("mongodb").MongoClient;

    module.exports = function (app) {
        mongo.connect('mongodb://main:1234@ds251518.mlab.com:51518/wbernest-image-db', function (err, db) {
            if(err) console.log(err);

            app.route('/api/imagesearch/:searchtext')
                .get(function (req, res) {
                    res.sendFile(process.cwd() + '/public/index.html'); 
                });
                    
            app.route('/api/latest/imagesearch')
                .get(function(req, res){
                    res.send({"unix": unixTime, "natural": standardTime}); 
                });
        });
};})();