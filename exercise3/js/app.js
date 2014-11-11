// initialize the app
angular.module('Exercise3.filters', []);
angular.module('Exercise3', [
    //dependencies
    'ngRoute',
    'Exercise3.filters'
]);

angular.module('Exercise3').config(function($routeProvider) {
    'use strict';

    $routeProvider
        //define a path, and then tell it what/where to send it
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('Exercise3').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

//treated as a submodule of the main module, Exercise3
angular.module('Exercise3.filters').filter('capitalize', function() {
    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);
        }
    };
});
angular.module('Exercise3.filters').filter('silly', function () {
    return function (param) {
        if (param) {
            var character = '',
                processedString = '';
            for (var i = 0; i < param.length; i++) {
                if (i % 2) {
                    character = param[i].toUpperCase();
                } else {
                    character = param[i];
                }
                processedString += character;
            }
            return processedString;
        }
    };
});
