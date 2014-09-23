// controller class
class Default extends TotalJS.Controller{

    constructor() {
        super();
        console.log("constructor");
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
        this.json(this.body);
    }
}

// install function
export function install() {
    var self = Default.prototype;
    framework.route('/1/', self.test1);
    framework.route('/2/', self.test2);
    framework.route('/3/', self.test3, ['post', 'json']);
}

// static functions packed in class
export class functions {
    public static increment(num?: number): number {
        return num + 1;
    }
}