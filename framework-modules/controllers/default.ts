class Default extends TotalJS.Controller {

    public static install() {
        var self = Default.prototype;
        framework.route('/', self.view_homepage);
    }

    view_homepage() {

        // call module
        var now = this.module('utils').now();

        // or
        // console.log(MODULE('feedback'));
        // var greeting = MODULE('feedback').greeting('Thanks');
        MODULE('feedback').greeting('Thanks');
        var greeting = "hello";
        this.plain('From module utils -> {0} ({1})'.format(now, greeting));
    }

}
export = Default;