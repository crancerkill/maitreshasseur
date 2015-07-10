var app = angular.module('app', [
    'controller',
    'ngResource',
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider)
{
    // parameters in access attribute are used in .run() method
    $routeProvider
        .when('/', {
            templateUrl: '/templates/accueil.html',
            controller: AccueilCtrl
        })
        .when('/login', {
            templateUrl: '/templates/connexion.html',
            controller: ConnexionCtrl
        })
        .when('/register', {
            templateUrl: '/templates/register.html',
            controller: RegisterCtrl
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.config(['$locationProvider', function($locationProvider)
{
    $locationProvider.html5Mode(true);
}]);



app.factory('ServiceConnexion', function ($resource)
{
    return $resource('/service/connexion/:key', {},
        {
            connexion: {method: 'POST', params: {key: 'connexion'}, isArray: false},
            register: {method: 'POST', params: {key: 'register'}, isArray: false},
            affuser: {method: 'POST', params: {key: 'affuser'}, isArray: false}
        });
});