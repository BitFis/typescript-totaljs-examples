class Feedback {

    greeting: string;

    public static name: string = 'feedback';
    public static version: string = '1.01';

    public feedback() {
        this.plain('action in module: feedback.js');
    }

    public static install(framework: TotalJS.Framework, options: Object) {
        var self = this.prototype;
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

    public static greeting(value: string): string {
        console.log('From greeting(): ' + Feedback.prototype.greeting);
        Feedback.prototype.greeting = value;
        return value;
    }
}
export = Feedback;

/*
export function install(framework: TotalJS.Framework, options: Object) {
    this.self = Feedback.prototype;
    framework.route('/feedback/', this.self.feedback);

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

    /*

    framework.on('load', function() {
        // all controllers and modules is loaded
    });

    framework.on('controller', function(controller, name) {
        // every request to controller call this event
        console.log(controller.req.ip);
    });
    *
}

export function uninstall(framework, options) {
    // routes are removed automatically

    // remove files
    // framework.fs.rm.css('feedback');
    // framework.fs.rm.js('feedback');
    // framework.fs.rm.view('feedback');
    // framework.fs.rm.resource('feedback');
}

export function greeting(value: string): string {
    console.log(this.self.greeting);
    console.log('From greeting(): ' + value);
    this.self.greeting = value;
    return value;
}*/