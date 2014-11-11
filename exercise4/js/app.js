// initialize the app
angular.module('Exercise4.directives', []);
angular.module('Exercise4', [
    'Exercise4.directives'
]);

//this is the function we're calling from the feedback directive below
angular.module('Exercise4').controller('DemoCtrl', function($scope) {
    $scope.alertFeedback = function(feedback) {
        alert('Name: ' + feedback.name + '\nComments: ' + feedback.comments);
    };
    $scope.helloFeedback = function (feedback) {
        alert('hi there ' + feedback.name);
    }
});



//element directives
angular.module('Exercise4.directives').directive('demoLorem', function() {
    return {
        restrict: 'E', // element

        //you can use templateUrl instead to bring in some other file/partial:
        //templateUrl: 'templates/lorem.html'
        template: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    };
});

// MAGIC: demoDirect => angular will look for demo-direct in the html doc
angular.module('Exercise4.directives').directive('demoDirect', function() {
    return {
        restrict: 'E', // element

        template: '<p>Hello there.</p>'
    };
});

//attribute directives
//same magic as above: demoClickable => demo-clickable
angular.module('Exercise4.directives').directive('demoClickable', function() {
    return {
        restrict: 'A', // attribute

        //link this function to the dom
        link: function($scope, element) {
            // element is wrapped at jQuery object
            element.bind('click', function() {
                alert('Hello');
            });
        }
    };
});
angular.module('Exercise4.directives').directive('demoDirEvent', function() {
    return {
        restrict: 'A', // attribute

        //link this function to the dom
        link: function($scope, element) {
            // element is wrapped at jQuery object
            element.bind('mouseover', function() {
                document.getElementById('hippo').innerHTML = '<img src="hippo.jpg">';
            });
            element.bind('mouseout', function () {
                document.getElementById('hippo').innerHTML = '';
            })
        }
    };
});

angular.module('Exercise4.directives').directive('demoFeedback', function() {
    return {
        restrict: 'E',
        //give it its own scope
        scope: {
            placeholder: '@', // one way binding, coming from outside in
            //placeholder: '=' // two-way binding
            //the return function:
            submitAction: '&' // one way binding behavior, inside out, uses parent scope to execute
        },
        templateUrl: 'templates/feedback.html'
    };
});

angular.module('Exercise4.directives').directive('demoForm', function() {
    return {
        restrict: 'E',
        scope: {
            userinput: '=',
            submitAction: '&'
        },
        templateUrl: 'templates/userinput.html'
    };
});
