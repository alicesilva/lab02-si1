app.controller('ControllerMain', function($scope, $http){
               $scope.serieName = "";
               $scope.search = function(){                   
                        window.sessionStorage.setItem('serieName', JSON.stringify($scope.serieName));
                        window.location.href='search.html'
               };

               $scope.seriesProfile = [];
               $scope.init = function(){                   
                   $scope.seriesProfile = JSON.parse(window.sessionStorage.getItem('seriesProfile'));
                   window.sessionStorage.removeItem('seriesProfile');
               };
               $scope.init();

               $scope.clickerChecker = false;
               $scope.redirect = function(serieName){
                   $http.get('https://omdbapi.com/?t='+serieName+'&type=series&r=json&apikey=93330d3c')
                    .success(function (data) {
                       $scope.series = data;
                    });

                $scope.clickerChecker = true;
               };

               $scope.evaluationNote = 0;
               $scope.addEvaluationNote = function(serieName){
                   for(var k = 0; k < $scope.seriesProfile.length; k++){
                       if($scope.seriesProfile[k]["name"] == serieName){
                           $scope.seriesProfile[k]["evaluationNote"] = $scope.evaluationNote;
                        }
                   }
                   $scope.evaluationNote = 0;
               };

               $scope.showEvaluationNote = function(serieName){
                   for(var k = 0; k < $scope.seriesProfile.length; k++){
                       if($scope.seriesProfile[k]["name"] == serieName){
                           return $scope.seriesProfile[k]["evaluationNote"];
                        }
                   }
               };

               $scope.chapter = 0;
               $scope.addChapter = function(serieName){
                   for(var k = 0; k < $scope.seriesProfile.length; k++){
                    if($scope.seriesProfile[k]["name"] == serieName){
                               $scope.seriesProfile[k]["chapter"] = $scope.chapter;
                    }
                   }
                   $scope.chapter = 0;
               };

               $scope.showChapter = function(serieName){
                   for(var k = 0; k < $scope.seriesProfile.length; k++){
                    if($scope.seriesProfile[k]["name"] == serieName){
                               return $scope.seriesProfile[k]["chapter"];
                    }
                   }
               };
            });