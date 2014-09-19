module app {
    
    export function install() {
        framework.route('/*', view_app);
    };

    function view_app() {
        var self = this;
        self.view('app');
    }
}
export = app;