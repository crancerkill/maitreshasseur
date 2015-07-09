'use strict';

/* Service */

function GrandCtrl ($scope, ServiceConnexion)
{
    ServiceConnexion.affuser(
        function (result) {
            $scope.mainuser = result.user
        }
    );
}
