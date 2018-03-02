(function(){
    'use strict';

    function addSearchHandler(db){
        
        /* jshint validthis: true */
        this.addSearch = function(res, search){
            db.collection('searches').insert({term: search, when: new Date()}, function(err, data){
                if(err) throw err;

                console.log(data);
                res.send(data);
            });
        };
    }

}());