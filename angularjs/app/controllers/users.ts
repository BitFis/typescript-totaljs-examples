module angularjs {

    export interface UsersScope {
        name: string;
        age: number;
    }

    class UserCtrl {
        constructor(private $scope: UsersScope) {
            $scope.name = "user";
        }
    }

}