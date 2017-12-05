var app = angular.module('myApp', []);

var store_name = 'todos';
function get_todos() {
    var items = JSON.parse(localStorage.getItem(store_name));
    return items || []
}
function set_item(data) {
    var items = get_todos();
    items.push(data);
    localStorage.setItem(store_name, JSON.stringify(items))
}

app.controller('todoCtrl', function($scope) {
    $scope.todoList = get_todos();

    $scope.todoAdd = function() {
        var todo_item = {name:$scope.todoName, description:$scope.todoDescription};
        $scope.todoList.push(todo_item);
        $scope.todoName = "";
        $scope.todoDescription = "";
        set_item(todo_item)
    };
});
