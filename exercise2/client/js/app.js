// initialize the app
angular.module('TaskManager', []).run(function(TaskFactory, CatFactory) { //load in the tasks as soon as we load the page
    TaskFactory.fetch();
    CatFactory.fetch();
});

angular.module('TaskManager').constant('ServerUrl', 'http://localhost:3000/');

angular.module('TaskManager').factory('CatFactory', function ($http, ServerUrl) {
    var categories = [],
        fetch = function () {
            $http.get(ServerUrl + 'categories').success(function (response) {
                angular.copy(response, categories);
            });
        };
    //var createCategory = function(category) {
    //
    //    $http.post(ServerUrl + 'categories', category).success(function(response) {
    //        categories.push(response);
    //
    //        category.name = '';
    //
    //    });
    //};
    return {
        categories: categories,
        fetch: fetch
        //createCategory: createCategory
    };
});

angular.module('TaskManager').factory('TaskFactory', function($http, ServerUrl, $q) {
    //factories are used to share data between different controllers
    //this collection is maintained throughout the life of the application; it's where the tasks are actually stored
    var tasks = [];

    var fetch = function() {
        $http.get(ServerUrl + 'tasks').success(function(response) {
            // use angular.copy() to retain the original array which the controllers are bound to
            // tasks = response will overwrite the array with a new one and the controllers lose the reference
            // could also do tasks.length = 0, then push in the new items
            angular.copy(response, tasks);
        });
    };
    var createTask = function (task) {
        $http.post(ServerUrl + 'tasks', task).success(function(response) {
            tasks.push(response);

            task.name = '';
            task.category = '';
            task.isCompleted = false;
        });
    };
    var removeCompleted = function() {
        //gather all requests going out to the server
        var httpRequests = [];

        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].isCompleted === true) {
                httpRequests.push($http.delete(ServerUrl + 'tasks/' + tasks[i].id));
            }
        }
        //when all requests are complete,
        $q.all(httpRequests).then(function() {
            //update list with the most current tasks
            fetch();
        });
    };

    //other parts of the application can use these since we're exposing them
    return {
        tasks: tasks,
        fetch: fetch,
        createTask: createTask,
        removeCompleted: removeCompleted
    };
});

//below we're injecting the TaskFactory so that this controller can make use of it
angular.module('TaskManager').controller('FormCtrl', function($scope, $http, ServerUrl, TaskFactory, CatFactory) {
    'use strict';
    //$http.get(ServerUrl + 'categories').success(function(response) {
    //    $scope.categories = response;
    //});
    $scope.categories = CatFactory.categories;
    //changes in the controller will change the tasks in the TaskFactory
    $scope.tasks = TaskFactory.tasks;

    //$scope.createCategory = CatFactory.createCategory;
    $scope.createCategory = function(category) {
        $scope.task = {};

        $http.post(ServerUrl + 'categories', category).success(function(response) {
            $scope.categories.push(response);

            $scope.category.name = '';
            //as soon as this changes, html dropdown will update
            $scope.task.category = response.id;
        });
    };

    $scope.createTask = TaskFactory.createTask;

    $scope.removeCompleted = TaskFactory.removeCompleted;

});

angular.module('TaskManager').controller('ListCtrl', function($scope, $http, ServerUrl, TaskFactory, CatFactory) {
    'use strict';

    $scope.tasks = TaskFactory.tasks;
    $scope.categories = CatFactory.categories;

    $scope.completeTask = function(task) {
        //toggle between completed/not completed states
        //task.status === 2 ? task.status = 0 : task.status = 2;
        task.isCompleted === true ? task.isCompleted = false : task.isCompleted = true;

        $http.put(ServerUrl + 'tasks/' + task.id, task);
    };
});

