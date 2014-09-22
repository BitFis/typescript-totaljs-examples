// define main class
class Default extends TotalJS.Controller{

    // make global functions accessible
    public functions: DefaultFunctions;

    install() {
        framework.route('/1/', Default.prototype.test1);
        framework.route('/2/', Default.prototype.test2);
        framework.route('/3/', Default.prototype.test3, ['post', 'json']);
    }

    test1() {

        this.plain('1');
    }

    test2() {
        /*
        if (this.isTest)
            console.log('IS TEST');
        */
        this.plain('2');
    }

    test3() {
        // throw error
        var self = this;
        self.json(self.body);
    }

    
}

class DefaultFunctions {
    public increment(num: number): number {
        return num + 1;
    }
}

// define controller functions
exports.install = Default.prototype.install;
exports.functions = DefaultFunctions.prototype;