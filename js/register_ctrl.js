'use strict';

/* Service */

function RegisterCtrl ($scope, $location, ServiceConnexion)
{
    $scope.redirect = function(page)
    {
        $location.path(page);
    };

    $scope.register = function ()
    {
        ServiceConnexion.register({
            user: $scope.user,
            mdp: $scope.mdp
        },
            function (result) {
                $scope.redirect('/')
            }
        );
    };
}


