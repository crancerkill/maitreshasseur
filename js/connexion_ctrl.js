'use strict';

/* Service */

function ConnexionCtrl ($scope, $location, ServiceConnexion, User)
{
    $scope.redirect = function(page)
    {
        $location.path(page);
    };

    $scope.connexion = function ()
    {
        ServiceConnexion.connexion({
            user: $scope.user,
            mdp: $scope.mdp
        },
            function (result) {
                User.set($scope.user)
                $scope.redirect('/')
            }
        );
    };

    $scope.affuser = function ()
    {
        ServiceConnexion.affuser(
            function (result) {
                alert(result.user)
            }
        );
    };
}

