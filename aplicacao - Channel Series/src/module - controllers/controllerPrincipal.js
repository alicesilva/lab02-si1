App.controller('ControllerPrincipal', function($scope, $http){
               $scope.nome = "serie1";
               $scope.edit = function(){                   
                        window.sessionStorage.setItem('name', JSON.stringify($scope.nome));
                        window.location.href='edit.html'
               };
               $scope.series = [];
               $scope.init = function(){                   
                   $scope.series = JSON.parse(window.sessionStorage.getItem('serie'));
                   window.sessionStorage.removeItem('serie');
               }
               $scope.init();

               $scope.MinhaDiv = false;
               $scope.redirecionar = function(titulo){
                   
                   $http.get('https://omdbapi.com/?t='+titulo+'&type=series&r=json&apikey=93330d3c')
                            .success(function (data) {
                            $scope.filmes = data;
                        });

                $scope.MinhaDiv = true;
               };

               $scope.nota = 0;
               $scope.adicionar = function(serieNome){
                   for(var k = 0; k < $scope.series.length; k++){
                    if($scope.series[k]["title"] == serieNome){
                               $scope.series[k]["nota"] = $scope.nota;
                    }
                   }

                   $scope.nota = 0;

               }

               $scope.teste = function(namee){
                   for(var k = 0; k < $scope.series.length; k++){
                    if($scope.series[k]["title"] == namee){
                               return $scope.series[k]["nota"];
                    }
                   }

               }

               $scope.episodio = 0;
               $scope.adicionarEpisodio = function(serieNome){
                   for(var k = 0; k < $scope.series.length; k++){
                    if($scope.series[k]["title"] == serieNome){
                               $scope.series[k]["episodio"] = $scope.episodio;
                    }
                   }

                   $scope.episodio = 0;

               }

               $scope.teste1 = function(namee){
                   for(var k = 0; k < $scope.series.length; k++){
                    if($scope.series[k]["title"] == namee){
                               return $scope.series[k]["episodio"];
                    }
                   }

               }

               $scope.remover = function(noome){
                   for(var k = 0; k < $scope.series.length; k++){
                    if($scope.series[k]["title"] == noome){
                            $scope.series.splice(k, 1);
                    }
                   }

                   $scope.MinhaDiv = false;

               }
               
            });