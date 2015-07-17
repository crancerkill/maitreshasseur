'use strict';

angular.module('app').service('User', ['ServiceConnexion', function(ServiceConnexion)
{
    var user = {};

    var isLoading = false;
    var callbackStack = [];


    /**
     * Return the active user
     * @returns {user|*} active user
     */
    this.get = function()
    {
        return user;
    };

    /**
     * Set the active user
     * @param userParam the user to set
     */
    this.set = function(userParam)
    {
        user = userParam;
    };

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    this.isAuthenticated = function()
    {
        return user;
    };

}]);