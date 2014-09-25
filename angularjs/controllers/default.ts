class Default extends TotalJS.Controller {
    view_app() {
        this.view('app');
    }
}

export function install() {
    var self = Default.prototype;
    framework.route('/*', self.view_app);
}