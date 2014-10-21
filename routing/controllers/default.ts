class Default extends TotalJS.Controller {

    public static install() {
        var self = Default.prototype;

        // Documentation: http://docs.totaljs.com/Framework/#framework.route
        framework.route('/', self.view_homepage);
        framework.route('/contact/', self.view_contact);
        framework.route('/products/', self.view_products);
        framework.route('/products/{category}/', self.view_products);
        framework.route('/products/{category}/{subcategory}/', self.view_products);
        framework.route('/{category}/', self.view_homepage);

        // this route has a lower priority and it will be executed when:
        // url: /asterix/
        // url: /asterix/bla/bla/bla/bla/
        framework.route('/asterix/*', self.view_asterix);

        framework.route('/other/*', self.view_otherasterix);

        // route: all txt files
        // Documentation: http://docs.totaljs.com/Framework/#framework.file
        // Try: http://127.0.0.4/test.txt
        framework.file('All *.txt', self.static_txt);

        // route: all jpg files
        // all images will resized about 50%
        // Documentation: http://docs.totaljs.com/Framework/#framework.file
        // Try: http://127.0.0.4/header.jpg
        framework.file('All *.jpg', self.static_jpg);
    }

    static_txt(req: any, res: any, isValidation: boolean) {
        if (isValidation)
            return req.url.indexOf('.txt') !== -1;

        // generate response
        // this === framework
        // Documentation: http://docs.totaljs.com/Framework/#framework.responsContent
        framework.responseContent(req, res, 200, 'Server time: ' + new Date().toString(), 'text/plain');
    }

    static_jpg(req: any, res: any, isValidation: boolean) {

        if (isValidation)
            return req.url.indexOf('.jpg') !== -1;

        // generate response
        // this === framework
        // Documentation: http://docs.totaljs.com/Framework/#framework.responseImage
        framework.responseImage(req, res, <string>this.path.public(req.url), function (image) {

            // image === FrameworkImage
            // http://docs.totaljs.com/FrameworkImage/

            image.resize('50%');
            image.quality(80);
            image.minify();

        });
    }

    view_asterix() {
        var self = this;
        self.plain(<string>'asterix -> ' + (<any>self.uri).pathname);
    }

    view_otherasterix() {
        var self = this;
        self.plain(<string>'otherasterix -> ' + (<any>self.uri).pathname);
    }

    view_products(category: string, subcategory: string) {

        category = category || '';
        subcategory = subcategory || '';

        if (category.length > 0)
            category = ' -> ' + category;

        if (subcategory.length > 0)
            subcategory = ' -> ' + subcategory;

        this.plain(<string>'products{0}{1}'.format(category, subcategory));
    }

    view_homepage(category: string) {

        category = category || '';

        if (category.length > 0)
            category = ' -> ' + category;

        this.plain(<string>'homepage{0}'.format(category));
    }

    view_contact() {
        this.plain('contact');
    }
}
export = Default;