app.controller('ControllerSearch', function($scope, $http){
               $scope.serieName = "";
               $scope.init = function(){                   
                   $scope.serieName = JSON.parse(window.sessionStorage.getItem('serieName'));
                   window.sessionStorage.removeItem('serieName');
               }
               $scope.init();


               $http.get('https://omdbapi.com/?s='+$scope.serieName+'&type=series&r=json&apikey=93330d3c')
                    .success(function (data) {

                            if(data.Response == "False"){
                                alert("Série não encontrada");
                            }else{
                                 $scope.series = data;
                            }
                });
            });           