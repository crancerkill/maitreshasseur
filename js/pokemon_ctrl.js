'use strict';

function PokeCtrl ($scope, $location, ServicePoke)
{
    $scope.redirect = function(page)
    {
        $location.path(page);
    };

    $scope.importpoke = function ()
    {
        ServicePoke.importcsv( function(result)
        {
            alert('Ok fait')
        });
    };

    $scope.aleapoke = function()
    {
        ServicePoke.getall({

        },
        function(result)
        {
            $scope.listepoke = result.pokemons;
        });
        var nbpokemons = $scope.listepoke.length
        alert(nbpokemons)
        var pokemon = Math.floor((Math.random() * nbpokemons));
        $scope.pokemon = $scope.listepoke[pokemon]

    };
}


