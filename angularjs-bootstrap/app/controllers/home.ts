module angularjs {

    export interface HomeScope {
        name: string;
        users: UsersScope[];
    }

    class HomeCtrl {
        constructor(private $scope: HomeScope) {
            $scope.name = "total.js + angular.js = awesome";
            $scope.users = [{ name: 'Peter', age: 30 }, { name: 'Michal', age: 34 }, { name: 'Lucia', age: 33 }];
        }

        public static $inject = [
            '$scope'
        ];
    }

    app.controller("HomeCtrl", HomeCtrl);

}