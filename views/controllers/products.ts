class Products extends TotalJS.Controller {

    static install(framework) {
        var self = Products.prototype;
        framework.route('/products/', self.view_products);
    }

    view_products() {
        this.meta('Products');

        // this view is loaded by the controller name: /views/products/index.html
        this.view('index');
    }

}
export = Products;