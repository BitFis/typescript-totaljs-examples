var fs = require('fs');

class Default extends TotalJS.Controller {

    public static install() {
        var self = Default.prototype;
        framework.route('/', self.file_download);
    }

    public file_download() {

        this.stream('application/pdf', fs.createReadStream(this.path.public('totaljs.pdf')), 'logo.pdf');

    }

}

exports.install = Default.install();