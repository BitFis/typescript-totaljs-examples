module App {

    class UsersCtrl {

        constructor($scope: HomeScope) {
            $scope.name = 'Users';
        }
    }
    
    app.controller("UsersCtrl", ['$scope', UsersCtrl]);
}