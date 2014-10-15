class Feedback extends TotalJS.Controller {

    public value: string;

    public id: string = 'feedback';
    public version: string = '1.01';

    public feedback() {
        this.plain('action in module: feedback.js');
    }

    public install(framework: TotalJS.Framework, options: Object) {
        var self = Feedback.prototype;
        framework.route('/feedback/', self.feedback);

        // INSTALL('view', 'feedback-view', 'http://www.some-url.com/some-view.html');

        // create client side JavaScript
        // framework.fs.create.js('feedback.js', 'func' + 'tion feedback() { alert("I am feedback"); }');

        // create client side CSS
        // framework.fs.create.css('feedback.css', 'feedback { padding:5px; font: normal 20px Arial; }');

        // create view file (must exists Views directory)
        // framework.fs.create.view('feedback', '<div>VIEW</div>');

        // create resource (must exists Resources directory)
        // framework.fs.create.resource('feedback', 'hello  : welcome in feedback resource');

        // get directory path
        // framework.path.public('image.jpg');
        // framework.path.logs();
        // framework.path.temp();
        // framework.path.backup();
        // framework.path.root();

        framework.on('load', function() {
            // all controllers and modules are loaded
        });

        framework.on('controller', function(controller, name) {
            // every request to controller call this event
            console.log(controller.req.ip);
        });
    }

    public greeting(value: string): string {
        console.log('From greeting(): ' + this.value);
        this.value = value;
        return value;
    }
}

// export module information - use exports. so module can be used as class
var self = Feedback.prototype;
exports.id = self.id;
exports.version = self.version;
exports.install = self.install;
exports.greeting = self.greeting;