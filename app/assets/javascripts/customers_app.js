/**
 * Created by rac on 5/2/16.
 */
var app = angular.module('customers', []);
app.controller("CustomerSearchController", ["$scope", "$http", function ($scope, $http) {
    $scope.search = function (searchTerm) {
        $scope.searchedFor = searchTerm;
    }
    $scope.customers = [];
    //$scope.search = function (searchTerm) {
    //    $scope.customers = [
    //        {
    //            "first_name": "Schuyler",
    //            "last_name": "Cremin",
    //            "email": "giles0@macgyver.net",
    //            "username": "jillian0",
    //            "created_at": "2015-03-04"
    //        },
    //        {
    //            "first_name": "Derick",
    //            "last_name": "Ebert",
    //            "email": "lupe1@rennerfisher.org",
    //            "username": "ubaldo_kaulke1",
    //            "created_at": "2015-03-04"
    //        },
    //        {
    //            "first_name": "Derick",
    //            "last_name": "Johnsons",
    //            "email": "dj@somewhere.org",
    //            "username": "djj",
    //            "created_at": "2015-03-04"
    //        }
    //    ]
    //}


    $scope.search = function (searchTerm) {
        $http.get("/customers.json",
            {"params": {"keywords": searchTerm}}
        ).then(function (response) {
                $scope.customers = response.data;
            }, function (response) {
                alert("There was a problem: " + response.status);
            }
        );
    }


}
]);