///<reference path="../typings/tsd.d.ts" />

class Default extends TotalJS.Controller {

    static install() {
        var self = Default.prototype;
        framework.route('/', self.file_download);
        framework.route('/image/', self.image_download);
    }

    public file_download() {
        // Documentation: http://docs.totaljs.com/FrameworkController/#controller.file
	    this.file('totaljs.pdf', 'logo.pdf');
    }

    public image_download() {
        // Documentation: http://docs.totaljs.com/FrameworkController/#controller.image
        this.image('slovakia.jpg', function (image) {
            image.resize('50%');
            image.minify();
        });
    }

}

exports.install = Default.install;