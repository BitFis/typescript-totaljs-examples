module App {

    export interface UserScope {
        name: string;
        age: number;
    }

    class UserCtrl {
        constructor(private $scope: UserScope) {
            $scope.name = "user";
        }
    }
}