(function(){

    'use strict';

    function getSearchHandler(db){
        
        /* jshint validthis: true */        
        this.getSearch = function(res){
            db.collection('searches').find({}, function(err, data){
                if(err) throw err;

                console.log(data);
                res.send(data);
            });

        };
    }
}());