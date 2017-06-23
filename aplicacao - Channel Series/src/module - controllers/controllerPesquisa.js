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

                function Serie(name,year,img){
                        this.name = name;
                        this.year = year;
                        this.img = img;
                }

                $scope.seriesProfile = [];
                $scope.addSerieToProfile = function(name, year, image){
                    
                    var serie = new Serie(name, year, image);
                    var j = 0;
                    for(var k = 0; k < $scope.seriesProfile.length; k++){
                        if($scope.seriesProfile[k]["img"] == image){
                               j ++;
                        }
                    }

                    if(j == 0){    
                        $scope.seriesProfile.push(serie);
                    }else{
                        alert("Series has already been added to the profile, it is impossible to add it again.");
                    }
                };

                $scope.backToHomePage = function(){                   
                        window.sessionStorage.setItem('seriesProfile', JSON.stringify($scope.seriesProfile));
                        window.location.href='index.html'
               };
            });           