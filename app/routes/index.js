/* jshint node: true */
'use strict';
var url = require("url");
var mongo = require("mongodb").MongoClient;
var AddSearchHandler = require("./../controllers/addSearchHandler.server.js");
var GetSearchesHandler = require("./../controllers/getSearchesHandler.server.js");
var GetResultshHandler = require("./../controllers/GetResultsHandler.server.js");

module.exports = function (app) {
    var addSearchHandler;
    var getSearchesHandler;
    var getResultsHandler = new GetResultshHandler();

    app.route('/api/imagesearch/:searchtext')
    .get(function (req, res) {
        addSearchHandler.addSearch(req.params.searchtext);
        getResultsHandler.getResults(res, req.params.searchtext, req.query.offset); 
    });
        
    app.route('/api/latest/imagesearch')
    .get(function(req, res){
        getSearchesHandler.getSearches(res); 
    });

    mongo.connect('mongodb://main:1234@ds251518.mlab.com:51518/wbernest-image-db', function (err, client) {

        var db = client.db('wbernest-image-db');
        var table = db.collection('searches');

        addSearchHandler = new AddSearchHandler(table);
        getSearchesHandler = new GetSearchesHandler(table);

        if(err) console.log(err);
    });
    
};