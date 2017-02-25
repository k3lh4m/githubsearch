(function () {

    var app = angular.module('githubsearch_app', []);

    app.controller('MainController', function($http, $scope) {

        $scope.master = {};

        var onSuccess = function(response) {
            $scope.user = response.data;

            $http.get($scope.user.repos_url)
                .then(onReposSuccess, onError)
        };

        var onReposSuccess = function(response) {
            $scope.repos = response.data;
        }

        var onError = function() {
            $scope.error = "No user/ responce has been found";
        };

        //Search User
        $scope.search = function(username) {
            $http.get('https://api.github.com/users/'+username)
                .then(onSuccess, onError)
        }

        //Clear User information
        $scope.resetForm = function() {
            $scope.user = angular.copy($scope.master);
            $scope.username = "";
        }

    })

}) () ;