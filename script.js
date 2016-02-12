 //Aurora Havens Script
 //tutorial used: http://codepen.io/Russbrown/pen/IgBuh

 var app = angular.module('Todo', []);

 app.controller('todoCtrl', function($scope) {
     $scope.todos = [
    {item:'Learn AngularJS', done:false},         
    {item: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({item:$scope.item, done:false});
    $scope.formTodoText = '';
  };


  $scope.delete = function() {
    $scope.tasks.splice(this.$index, 1);
    };
});

