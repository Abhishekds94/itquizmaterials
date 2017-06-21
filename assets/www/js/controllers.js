angular.module('starter.controllers', [])
.controller('DashController',function($window,$sce,$ionicModal,$cordovaMedia,$state,$ionicTabsDelegate,$scope,$http,$ionicLoading,$ionicPopup){
    $scope.showMoreDetails = true;
    $scope.showAnswer= true;
    $scope.showCard =true;
    $scope.toggleInfoButtons = function(){
        if($scope.showMoreDetails == true){
            $("#hideDetails").slideDown("slow");
            $("#showDetails").slideUp("slow");
            $scope.showAnswer= false;
            $scope.showMoreDetails = false;
        }
        else{
            $("#showDetails").slideDown("slow");
            $("#hideDetails").slideUp("slow");
            $scope.showAnswer= false;
            $scope.showMoreDetails = true;
        }
    };

    $scope.goToTextQuestions = function(){
        $state.go('app.text');     
    } 
    $scope.goToImageQuestions = function(){
        $state.go('app.image');     
    }
    /*$('#textCount').on('input', function() { 
    avidDebugConsole("value changed"); // get the current value of the input field.
    localStorage.setItem("textCount",$('#textCount').val());
    avidDebugConsole("value changed"+localStorage.getItem("textCount")); 
    location.reload();
    });*/
    $scope.textKeyChange = function (textKeyValue){
        avidDebugConsole("inside test"+textKeyValue);
        if (textKeyValue>0 && textKeyValue<101) {
            localStorage.setItem("textCount",textKeyValue);
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner><br/>Loading...'
            });
            location.reload();
        }
        else{
            $ionicPopup.alert({
                title: "Invalid Index!!!",
                content: "please enter a value between 0 to 100",
            }).then(function(result){
                if(result){
                  localStorage.setItem("textCount",localStorage.getItem("textCount"));
                  //location.reload();    
                }
            });
        }
    };

     $scope.imageKeyChange = function (imageKeyValue){
        avidDebugConsole("inside test"+imageKeyValue);
        if (imageKeyValue>0 && imageKeyValue<76) {
            localStorage.setItem("imageCount",imageKeyValue);
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner><br/>Loading...'
            });
            location.reload();
        }
        else{
             $ionicPopup.alert({
                title: "Invalid Index!!!",
                content: "please enter a value between 0 to 75",
             }).then(function(result){
                if(result){
                  localStorage.setItem("imageCount",localStorage.getItem("imageCount"));
                  //location.reload();    
                }
              });
        }
        
    };

    $scope.textChanged = function (){
            if(localStorage.getItem("textCount")!=null || localStorage.getItem("textCount")!=undefined)
                $scope.textCount = localStorage.getItem("textCount");
            else
                $scope.textCount = 1;
    }

    $scope.imageChanged = function (){
        if(localStorage.getItem("imageCount")!=null || localStorage.getItem("imageCount")!=undefined)
            $scope.imageCount = localStorage.getItem("imageCount");
        else
            $scope.imageCount = 1;
    }

    $scope.textCount = 1;
    $scope.decreaseTextCount = function(){
        $scope.textCount = localStorage.getItem("textCount");
        avidDebugConsole("inside decreasetextCount");
        if($scope.textCount>1){
        $scope.textCount = $scope.textCount -1;
        localStorage.setItem("textCount",$scope.textCount);
        }
        avidDebugConsole("textCount"+$scope.textCount);
    }

    $scope.increaseTextCount = function(){
        $scope.textCount = localStorage.getItem("textCount");
        avidDebugConsole("inside increasetextCount");
        $scope.showAnswer= false;
        $scope.showMoreDetails = true;
        if($scope.textCount>=0 && $scope.textCount<102){
        $scope.textCount = $scope.textCount - 1 +1 + 1;
        localStorage.setItem("textCount",$scope.textCount);
        }
        avidDebugConsole("textCount"+$scope.textCount);
    }

    $scope.imageCount = 1;
    $scope.decreaseImageCount = function(){
        $scope.imageCount = localStorage.getItem("imageCount");
        avidDebugConsole("inside decreaseimageCount");
        if($scope.imageCount>1){
        $scope.imageCount = $scope.imageCount -1;
        localStorage.setItem("imageCount",$scope.imageCount);
        }
        avidDebugConsole("imageCount"+$scope.imageCount);
    }

    $scope.increaseImageCount = function(){
        $scope.textCount = localStorage.getItem("imageCount");
        avidDebugConsole("inside increaseimageCount");
        $scope.showAnswer= false;
        $scope.showMoreDetails = true;
        if($scope.imageCount>=0 && $scope.imageCount<76){
        $scope.imageCount = $scope.imageCount - 1 +1 + 1;
        localStorage.setItem("imageCount",$scope.imageCount);
        }
        avidDebugConsole("imageCount"+$scope.imageCount);
    }
})