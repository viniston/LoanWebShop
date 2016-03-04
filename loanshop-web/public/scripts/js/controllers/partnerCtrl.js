'use strict';

// signup controller
app.controller('partnerCtrl', ['$scope', '$http', '$state', 'CustomerService', function ($scope, $http, $state, CustomerService) {
    $(document).ready(function () {
        $('.drawer').drawer();
    });
    var room = 1;
    function add_fields() {
        room++;
        var objTo = document.getElementById('append-sec')
        var divtest = document.createElement("tr");
        divtest.innerHTML = '<td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><span><input type="checkbox" /></span><span> % </span> <span> or </span><span><input type="checkbox" /></span> <span> $ </span></td>';
        objTo.appendChild(divtest)
    }
    $scope.section2 = function () {
        $('#section1').hide();
        $('#section2').show();
        $('#section3').hide();
        $('#section4').hide();
        $('#section5').hide();
        $('#section5-1').hide();
        $('#section6').hide();
        $('#section7').hide();
        $('#section8').hide();
        $('#section9').hide();
    }
    $scope.section3 = function () {
        $('#section1').hide();
        $('#section2').hide();
        $('#section3').show();
        $('#section4').hide();
        $('#section5').hide();
        $('#section5-1').hide();
        $('#section6').hide();
        $('#section7').hide();
    }
    $scope.section4 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').show()
        $('#section5').hide()
        $('#section5-1').hide();
        $('#section6').hide()
        $('#section7').hide()
        $('#section8').hide()
        $('#section9').hide()
    }
    $scope.section5 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').show()
        $('#section5-1').hide();
        $('#section6').hide()
        $('#section7').hide()
        $('#section8').hide()
        $('#section9').hide()
    }
    $scope.section5_1 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').hide()
        $('#section5-1').show();
        $('#section6').hide()
        $('#section7').hide()
        $('#section8').hide()
        $('#section9').hide()
    }
    $scope.section6 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').hide()
        $('#section5-1').hide();
        $('#section6').show()
        $('#section7').hide()
        $('#section8').hide()
        $('#section9').hide()
    }
    $scope.section7 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').hide()
        $('#section5-1').hide();
        $('#section6').hide()
        $('#section7').show()
        $('#section8').hide()
        $('#section9').hide()
    }
    $scope.section8 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').hide()
        $('#section5-1').hide();
        $('#section6').hide()
        $('#section7').hide()
        $('#section8').show()
        $('#section9').hide()
    }
    $scope.section9 = function () {
        $('#section1').hide()
        $('#section2').hide()
        $('#section3').hide()
        $('#section4').hide()
        $('#section5').hide()
        $('#section5-1').hide();
        $('#section6').hide()
        $('#section7').hide()
        $('#section8').hide()
        $('#section9').show()
    }

    //Get all customers
    $scope.GetAllCustomers = function () {
        CustomerService.GetCustomer().then(function (response) {
            console.log(response);
        });
    }

    $scope.CreateNewCustomer = function () {
        var newCustomerModel = {};
        newCustomerModel.name = "Test User";
        CustomerService.CreateCustomer(newCustomerModel).then(function (result) {
            console.log(result);
        });
    }
}])
;