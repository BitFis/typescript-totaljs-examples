module App {

    export interface HomeScope {
        name: string
    }

    class HomeCtrl {
        constructor(private $scope: HomeScope) {
            $scope.name = 'Homepage';
        }

        public static $inject = [
            '$scope'
        ];
    }

    app.controller('HomeCtrl', HomeCtrl);
}