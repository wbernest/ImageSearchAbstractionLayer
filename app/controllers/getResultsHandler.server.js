/* jshint node: true */
'use strict';

function getResultsHandler(db){

    /* jshint validthis: true */
    this.getResults = function(res, search){
        res.send('Got some results!!!');
    };
}

module.exports = getResultsHandler;