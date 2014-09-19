module App {

    class ProductsCtrl {
        constructor($scope: HomeScope) {
            $scope.name = 'Products';
        }
    }

    app.controller('ProductsCtrl', ['$scope', ProductsCtrl]);
}