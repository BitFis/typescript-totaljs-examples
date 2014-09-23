class Default extends TotalJS.Controller{

    public static install() {
        var self = new Default();
        framework.route('/', self.view_homepage);
    }

    view_homepage() {
        var builder = [];

        Object.keys(this.config).forEach((o) => {
            var value = this.config[o];

            builder.push('{0} : {1}'.format(o.padRight(30, ' '), this.config[o] instanceof Array ? value.join(', ') : value)); 
        });

        this.plain(builder.join('\n'));
    }
}
export = Default;