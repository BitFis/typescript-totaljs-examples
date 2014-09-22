class Default extends TotalJS.Controller {

    static install() {
        var self = Default.prototype;
        framework.route("/", self.view_homepage);
        framework.route("/new/", self.view_homepage2);
    }

    view_homepage() {
        var self = this;
        self.view("homepage");
    }

    view_homepage2() {
        var self = this;
        self.layout('_layout_new');
        self.view('homepage');
    }

}
export = Default;