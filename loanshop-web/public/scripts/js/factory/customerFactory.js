﻿// A RESTful factory for retreiving mails from 'mails.json'
app.factory('customerFactory', ['$http', function ($http) {
    var path = 'scripts/js/factory/customer.json';
    var mails = $http.get(path).then(function (resp) {
        return resp.data.mails;
    });

    var factory = {};
    factory.all = function () {
        return mails;
    };
    factory.get = function (id) {
        return mails.then(function (mails) {
            for (var i = 0; i < mails.length; i++) {
                if (mails[i].id == id) return mails[i];
            }
            return null;
        })
    };
    return factory;
}]);