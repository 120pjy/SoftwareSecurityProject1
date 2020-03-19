angular.module('userControllers', ['userServices'])

.controller('regCtrl', function($http, $location, User) {
    var app = this;

    this.regUser = function(regData){
        User.create(app.regData)
        .then(function(success){
        	app.regData.password = "";
    		app.regData.email = "";
        	app.signupForm.$setPristine();
			app.signupForm.$error = {};
			app.success_message = success.data;
            app.error_message = '';
        }, function(error){
            app.success_message = '';
        	app.error_message = error.data;
        });
        return false;
    };
});