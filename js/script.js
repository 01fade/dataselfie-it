	var dataSelfieItApp = angular.module('dataSelfieItApp', ['ngRoute', 'ngSanitize']);

	dataSelfieItApp.config(function($routeProvider) {
	    $routeProvider
	        .when('/', {
	            title: 'Home',
	            templateUrl: 'pages/home.html',
	            controller: 'mainController'
	        })
	        .when('/about', {
	            title: 'About',
	            templateUrl: 'pages/about.html',
	            controller: 'aboutController'
	        })
	        .when('/journey', {
	            title: 'Journey',
	            templateUrl: 'pages/journey.html',
	            controller: 'demoController'
	        })
	        .when('/download', {
	            title: 'Download',
	            templateUrl: 'pages/download.html',
	            controller: 'downloadController'
	        })
	        .when('/news', {
	            title: 'News',
	            templateUrl: 'pages/news.html',
	            controller: 'newsController'
	        })
	        .when('/contact', {
	            title: 'Contact',
	            templateUrl: 'pages/contact.html',
	            controller: 'contactController'
	        })
	        .when('/faq', {
	            title: 'FAQ',
	            templateUrl: 'pages/faq.html',
	            controller: 'faqController'
	        })
	        .when('/alphasignup', {
	            title: 'Alpha Signup',
	            templateUrl: 'pages/alphasignup.html',
	            controller: 'alphasignupController'
	        })
	        .when('/first', {
	            title: 'The First',
	            templateUrl: 'pages/first.html',
	            controller: 'firstController'
	        })
	        .otherwise({
	            redirectTo: "/"
	        });
	});

	dataSelfieItApp.run(['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
	    $anchorScroll.yOffset = 20;
	    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
	        $rootScope.title = current.$$route.title;
	    });
	}]);

	dataSelfieItApp.controller('navController', ['$scope', '$location', function($scope, $location) {
	    $scope.isActive = function(destination) {
	        return destination === $location.path();
	    };
	    $scope.message = '';
	}]);

	dataSelfieItApp.controller('mainController', function($scope) {
	    $scope.message = '';
	});

	dataSelfieItApp.controller('firstController', function($scope) {
	    $scope.message = '';
	});

	dataSelfieItApp.controller('contactController', function($scope) {
	    $scope.message = '';
	});

	dataSelfieItApp.controller('downloadController', function($scope) {
	    $scope.message = '';
	    $scope.submitted = false;

	    $scope.iframeLoadedCallBack = function() {
	        console.log($scope.submitted);
	        if ($scope.submitted) {
	            $("form").hide();
	            $("#thanks").fadeIn();
	            $scope.submitted = false;
	        }
	    }
	});

	dataSelfieItApp.controller('alphasignupController', function($scope) {
	    $scope.message = '';
	    $scope.submitted = false;

	    $scope.iframeLoadedCallBack = function() {
	        console.log($scope.submitted);
	        if ($scope.submitted) {
	            $("form").hide();
	            $("#thanks").fadeIn();
	            $scope.submitted = false;
	        }
	    }
	});

	dataSelfieItApp.controller('newsController', function($scope) {
	    window.twttr = (function(d, s, id) {
	        var js, fjs = d.getElementsByTagName(s)[0],
	            t = window.twttr || {};
	        if (d.getElementById(id)) return t;
	        js = d.createElement(s);
	        js.id = id;
	        js.src = "https://platform.twitter.com/widgets.js";
	        js.setAttribute('onload', "twttr.events.bind('rendered',function(e) {loadTl()});");
	        fjs.parentNode.insertBefore(js, fjs);
	        t._e = [];
	        t.ready = function(f) {
	            t._e.push(f);
	        };
	        return t;
	    }(document, "script", "twitter-wjs"));

	    function loadTl() {
	        setTimeout(function() {
	            twttr.widgets.load();
	        }, 400);
	    }
	    loadTl();

	    $scope.message = '';
	});

	dataSelfieItApp.controller('faqController', ['$scope', '$anchorScroll', '$location', function($scope, $anchorScroll, $location) {
	    $scope.message = '';

	    var body = $('body');

	    // // Show or hide the sticky footer button
	    $(window).scroll(function() {
	        if ($(this).scrollTop() > 200) {
	            $('.go-top').fadeIn(200);
	        } else {
	            $('.go-top').fadeOut(200);
	        }
	    });

	    // Animate the scroll to top
	    $('.go-top').click(function(e) {
	        e.preventDefault();
	        body.animate({ scrollTop: 0 }, 300);
	    });

	    $scope.qLinkClick = function(obj) {
	        var newHash = obj.target.attributes.data.value;
	        if ($location.hash() !== newHash) {
	            // set the $location.hash to `newHash` and
	            // $anchorScroll will automatically scroll to it
	            $location.hash(newHash);
	        } else {
	            // call $anchorScroll() explicitly,
	            // since $location.hash hasn't changed
	            $anchorScroll();
	        }
	    }
	}]);

	dataSelfieItApp.directive('iframeOnload', [function() {
	    return {
	        scope: {
	            callBack: '&iframeOnload'
	        },
	        link: function(scope, element, attrs) {
	            element.on('load', function() {
	                return scope.callBack();
	            })
	        }
	    }
	}])
