var app = angular.module('myApp', []);

app.controller('cssCtrl', function($scope) {
    $scope.cssClasses = ['style1', 'style2', 'style3'];
    $scope.setStyle = function (style) {
        $scope.currentStyleClass = style
    };

});
