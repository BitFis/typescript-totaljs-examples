class Default extends TotalJS.Controller {

    static install() {
        var self = Default.prototype;
        framework.route("/*", self.view_app);
    }

    view_app() {
        this.view('app');
    }
}
export = Default;