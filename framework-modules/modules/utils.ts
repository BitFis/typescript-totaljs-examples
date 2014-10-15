class Utils extends TotalJS.Controller {

    public id: string = 'utils';

    public version: string = '1.01';

    public now() {
        return new Date();
    }

}

// export module information - use exports.<func/var> so module can be used as class
var self = Utils.prototype;
exports.id = self.id;
exports.version = self.version;
exports.now = self.now;