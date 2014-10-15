///<reference path="../modules/feedback.ts" />

class Default extends TotalJS.Controller {

    public install() {
        var self = Default.prototype;
        framework.route('/', this.view_homepage);
    }

    public view_homepage() {
        
        // call module
        var now: Date = (<Utils>this.module('utils')).now();
        
        // or
        var greeting: string = (<Feedback>MODULE('feedback')).greeting('Thanks');
        this.plain(<string>"From module utils -> {0} ({1})".format(now.toString(), greeting));
    }
}

// export controller information - use exports. so module can be used as class
var self = Default.prototype;
exports.install = self.install;
exports.view_homepage = self.view_homepage;