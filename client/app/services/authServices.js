angular.module('authServices', [])

.factory('Auth', function($http) {
    authFactory = {};

    authFactory.login = function(regData){
        return $http.post('/api/authenticate', regData);
    }

    authFactory.setEmail = function(email){
    	return localStorage.setItem('email', email);
    }

	authFactory.getEmail = function(email){
    	return localStorage.getItem('email');
    }    

	authFactory.removeEmail = function(email){
    	return localStorage.removeItem('email');
    }    

    return authFactory;
});