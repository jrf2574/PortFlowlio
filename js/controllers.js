var portfolioListControllers = angular.module('portfolioListControllers',[]);

portfolioListControllers.controller('portfolioListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/projects.json')
        .success(function (data) {
            $scope.portfolios = data;
        })
        .error(function (data, status) {
            console.err("Something went wrong while getting projects.json");
        })
}]);
