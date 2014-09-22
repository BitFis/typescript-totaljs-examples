class Users extends TotalJS.Controller{

    static install() {
        var self = Users.prototype;
        framework.route('/users/', self.view_users);
        framework.route('/users/admin/', self.view_users_admin);
    }

    view_users() {
        this.meta('Users');

        // this view is loaded by the controller name: /views/users/index.html
        this.view('index');
    }

    view_users_admin() {
        this.meta('Admin');
        this.view('~admin');
    }

}
export = Users;