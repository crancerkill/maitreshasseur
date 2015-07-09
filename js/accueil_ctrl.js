'use strict';

/* Service */

function AccueilCtrl ($scope, ServiceConnexion)
{
    ServiceConnexion.affuser(
        function (result) {
            $scope.user = result.user
        }
    );
}

