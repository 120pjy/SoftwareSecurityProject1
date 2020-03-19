angular.module('mainController', ['authServices'])


.controller('mainCtrl', function(Auth, $location, $rootScope) {
    var app = this;
    app.verification_success = $location.$$search.verification_success ? true : false;
    app.email = Auth.getEmail();

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        app.email = Auth.getEmail();
    });

    app.logoutUser = function(){
        Auth.removeEmail();
        app.email = '';
        $location.path('/login');
    }

    this.doLogin = function(loginData){
    	Auth.login(loginData)
    	.then(function(success){
            if(success.data.sucess){
                Auth.setEmail(success.data.email);
                $location.path('/');    
            } else {
                console.log(success.data.message);
                app.error_message = success.data.message;
            }
    	}, function(error){
            app.verification_success = '';
    		app.error_message = error.data.message;
    	});
    };
});