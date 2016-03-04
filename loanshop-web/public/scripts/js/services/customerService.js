(function (ng, app) {
    "use strict";

    function CustomerService($http, $q) {
        return ({
            GetCustomer: GetCustomer,
            CreateCustomer: CreateCustomer
        });

        function GetCustomer() {
            var request = $http({
                method: "get",
                url: "api/customer/getAllCustomers/",
                params: {
                    action: "get"
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function CreateCustomer(jobj) {
            var request = $http({
                method: "post",
                url: "api/customer/CreateCustomer/",
                params: {
                    action: "add"
                },
                data: jobj
            });
            return (request.then(handleSuccess, handleError));
        }

        function handleError(response) {
            if (!angular.isObject(response.data) || !response.data.message) {
                return ($q.reject("An unknown error occurred."));
            }
            return ($q.reject(response.data.message));
        }

        function handleSuccess(response) {
            return (response.data);
        }
    }
    app.service("CustomerService", ['$http', '$q', CustomerService]);
})(angular, app);
