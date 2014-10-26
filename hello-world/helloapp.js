angular.module('HelloWorld', []);

angular.module('HelloWorld').controller('FormInputCtrl', function ($scope) {
    'use strict';

    $scope.userInput = {
        name: 'Dan'
    };

});

angular.module('HelloWorld').controller('ColorCtrl', function ($scope) {
    'use strict';

    $scope.color = 'red';

});