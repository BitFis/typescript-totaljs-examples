module App {

    class UsersCtrl {

        constructor(private $scope: HomeScope) {
            $scope.name = 'Users';
        }

        public static $inject = [
            '$scope'
        ];
    }
    
    app.controller("UsersCtrl", UsersCtrl);
}