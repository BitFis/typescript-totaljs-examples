module App {

    class ProductsCtrl {
        constructor(private $scope: HomeScope) {
            $scope.name = 'Products';
        }

        public static $inject = [
            '$scope'
        ];
    }

    app.controller('ProductsCtrl', ProductsCtrl);
}