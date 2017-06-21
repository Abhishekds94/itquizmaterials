angular.module('starter', ['ionic', 'starter.controllers','ngCordova',])
.run(function($ionicPlatform,$cordovaStatusbar,$state,$ionicLoading,$http,$ionicHistory,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleDefault();
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleHex('#3F51B5');
    }
    document.addEventListener("offline", onOffline, false);
    function onOffline() {
    // Handle the offline event
    $ionicPopup.confirm({
                title: "Internet Disconnected",
                content: "The internet is disconnected on your device",
                okText: "Retry",
                cancelText : "Exit"
            }).then(function(result){
                if(result){
                  location.reload();    
                }
                else{
                  ionic.Platform.exitApp();
                }
              });
    }
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(ionic.Platform.isAndroid()){
      setTimeout(function () {navigator.splashscreen.hide();},4000);
    }
    
    $ionicPlatform.onHardwareBackButton(function() {
      $ionicHistory.goBack(); 
    });

    
  });
})
.config(function($stateProvider, $urlRouterProvider) {
 /* // Optionally you can configure the options here:
      admobSvcProvider.setOptions({
        publisherId:          "ca-app-pub-1703367075036146/8516103710",  // Required
        // interstitialAdId:     "ca-app-pub-6169793965144068/5867469638",  // Optional
        // tappxIdiOs:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:           0.5                                        // Optional
      });

      // Optionally configure the events prefix (by default set to 'admob:')
      admobSvcProvider.setPrefix('admob');
*/
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  
.state('app.dash', {
    url: '/dash',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/dash.html',
        controller : "DashController"
      }
    }
  })
.state('app.text', {
    url: '/text',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/textQuestions.html',
        controller: "DashController"
      }
    }
  })
.state('app.image', {
    url: '/image',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/imageQuestions.html',
        controller: "DashController"
      }
    }
  });
  $urlRouterProvider.otherwise('/app/dash');
})
