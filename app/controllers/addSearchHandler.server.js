/* jshint node: true */
'use strict';

function addSearchHandler(db){
    
    /* jshint validthis: true */
    this.addSearch = function(search){
        db.insert({term: search, when: new Date()}, function(err, data){
            if(err) throw err;
        });
    };
}

module.exports = addSearchHandler;