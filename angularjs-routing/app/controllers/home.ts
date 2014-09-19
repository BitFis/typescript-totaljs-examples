module App {

    export interface HomeScope {
        name: string
    }

    class HomeCtrl {
        constructor($scope: HomeScope) {
            $scope.name = 'Homepage';
        }
    }

    app.controller('HomeCtrl', ['$scope', HomeCtrl]);
}