/* jshint node: true */
'use strict';

function getSearchesHandler(db){
    
    /* jshint validthis: true */        
    this.getSearches = function(res){
        db.find({}).toArray( function(err, data){
            if(err) throw err;

            console.log(data);
            res.send(data.map(function(a){ return {term: a.term, when: a.when};}));
        });

    };
}

module.exports = getSearchesHandler;