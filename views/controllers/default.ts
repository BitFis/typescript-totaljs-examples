module app {

    export function install() {
        framework.route("/", view_homepage);
        framework.route("/new/", view_homepage2);
    }

    function view_homepage() {
        var self: TotalJS.Controller = this;
        self.view("homepage");
    }

    function view_homepage2() {
        var self: TotalJS.Controller = this;
        self.layout('_layout_new');
        self.view('homepage');
    }

}
export = app;