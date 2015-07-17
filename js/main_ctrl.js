'use strict';

/* Controleur Principal */

angular.module('controller',[]).controller('MainCtrl', function($scope, ServiceConnexion)
{
    ServiceConnexion.affuser(
        function (result) {
            $scope.mainuser = result.user
        }
    );
});
