var app = angular.module('myApp', []);

app.controller('formCtrl', function($scope) {
    $scope.passwordCompare = function () {
        console.log($scope.password1 != $scope.password2);
        if ($scope.password1 != $scope.password2){
            $scope.myForm.password2.$error.equals = true
        }else {
            delete $scope.myForm.password2.$error.equals
        }
    }
});
