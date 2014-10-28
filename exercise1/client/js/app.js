// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';
    //scope is more like a view model than a plain model
    //it allows the view to have knowledge of the data
    //literally declares what the scope will be for a given module
    $scope.name = 'Dan';
});

// local user controller
angular.module('Demo').controller('LocalUserCtrl', function($scope) {
    'use strict';

    $scope.localUsers = [{
        firstName: 'Dan',
        lastName: 'Johnson'
    }, {
        firstName: 'Ella',
        lastName: 'Johnson'
    }, {
        firstName: 'Ava',
        lastName: 'Johnson'
    }];

    $scope.addUser = function() {
        $scope.localUsers.push({
            firstName: 'Jorden',
            lastName: 'Cayford'
        });
    };
});

angular.module('Demo').constant('ServerUrl', 'http://localhost:3000/');

// remote user controller
angular.module('Demo').controller('RemoteUserCtrl', function($scope, $http, ServerUrl) {
    'use strict';

    $http.get(ServerUrl + 'users').success(function(response) {
        $scope.remoteUsers = response;
    });

    $scope.createUser = function(user) {
        $http.post(ServerUrl + 'users', user).success(function(response) {
            $scope.remoteUsers.push(response);

            //empty formfields after submission success
            $scope.user = {};
        });
    };

    $scope.deleteUser = function(user) {
        $http.delete(ServerUrl + 'users/' + user.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.remoteUsers.length; i++){
                //loop thru array; when it finds the user remove by using splice
                if ($scope.remoteUsers[i].id == user.id) {
                    $scope.remoteUsers.splice(i, 1);

                    break;
                }
            }
        });
    };
});