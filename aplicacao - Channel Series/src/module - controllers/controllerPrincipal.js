app.controller('ControllerMain', function($scope){
               $scope.serieName = "";
               $scope.search = function(){                   
                        window.sessionStorage.setItem('serieName', JSON.stringify($scope.serieName));
                        window.location.href='search.html'
               };
            });