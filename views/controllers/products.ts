module products {

    export function install() {
        framework.route('/products/', view_products);
    }

    function view_products() {
        var self: TotalJS.Controller = this;
        self.meta('Products');

        // this view is loaded by the controller name: /views/products/index.html
        self.view('index');
    }

}
export = products;