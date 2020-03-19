angular.module('userServices', [])

.factory('User', function($http) {
    userFactory = {};

    userFactory.create = function(regData){
        return $http.post('/api/users', regData);
    }

    userFactory.setUser = function(){
    	
    }

    return userFactory;
});