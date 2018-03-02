/* jshint node: true */
'use strict';
var GoogleImages = require('google-images');

function getResultsHandler(){

    /* jshint validthis: true */
    this.getResults = function(res, text, query){
        var cse = '005749163734638201967:hz0nflxi6oe';
        var key = 'AIzaSyBquyaSlq-e9L2UagdZ6dIrw69E6j8YElU';
        var client = new GoogleImages(cse, key);

        var pager = {};
        if(query != undefined) pager = {page: query};
        client.search(text, pager).then(function(images){
            res.send(images);

        });
    };
}

module.exports = getResultsHandler;