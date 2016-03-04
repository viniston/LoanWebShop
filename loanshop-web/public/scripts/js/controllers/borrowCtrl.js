'use strict';

// signup controller
app.controller('borrowCtrl', ['$scope', '$http', '$state', 'vcRecaptchaService', 'customerFactory', function ($scope, $http, $state, vcRecaptchaService, customerFactory) {

    $scope.model = {
        key: '6LcK7RYTAAAAALZSMckTtOL9n_GqriAgkUzG3h5r' //captcha service public key of DPR systems
    };

    $scope.setResponse = function (response) {
        console.info('Response available');

        $scope.response = response;
    };

    $scope.setWidgetId = function (widgetId) {
        $scope.widgetId = widgetId;
    };

    $scope.cbExpiration = function () {
        vcRecaptchaService.reload($scope.widgetId);
        $scope.response = null;
    };

    $('.date-picker').datetimepicker({
        pickTime: false
    });
    $('.drawer').drawer();


    $scope.file_changed = function (element) {

        $scope.$apply(function (scope) {

            $scope.MultipleFiles[parseInt("" + element.id + "")].Files = element.files;

            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                // handle onload
            };
            reader.readAsDataURL(photofile);

            var log = element.files.length > 1 ? element.files.length + ' files selected' : photofile.name;

            if (element.files.length) {
                $scope.MultipleFiles[parseInt("" + element.id + "")].FileSelected = log;
            } else {
                if (log) alert(log);
            }

        });
    };

    $scope.MultipleFiles = [{ "FileSelected": "", "Files": [], "idProof": false, "ssn": false, "other": false }];

    $scope.add_fields = function () {
        $scope.MultipleFiles.push({ "FileSelected": "", "Files": [], "idProof": false, "ssn": false, "other": false });
    }

    $scope.section2 = function () {
        /* vcRecaptchaService.getResponse() gives you the g-captcha-response */
        if (vcRecaptchaService.getResponse() === "") { //if string is empty
            alert("Please resolve the captcha and submit!");
            vcRecaptchaService.reload($scope.widgetId);
            return false;
        }
        $('#section1').hide(); $('#section2').show(); $('#section3').hide(); $('#section4').hide();
    }
    $scope.section3 = function () {
        $('#section1').hide(); $('#section2').hide(); $('#section3').show(); $('#section4').hide()
    }
    $scope.section4 = function () {
        $('#section1').hide(); $('#section2').hide(); $('#section3').hide(); $('#section4').show()
    }


    $scope.GetAllMails = function () {
        //Sample http call from Angular factory - customerFactory
        customerFactory.all().then(function (mails) {
            console.log(mails);
        });
    }

    $scope.GetAllMails();
}])
;