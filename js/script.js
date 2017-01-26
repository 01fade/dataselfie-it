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
	        });
	});

	dataSelfieItApp.run(['$rootScope', function($rootScope) {
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

	    $scope.message = 'Sharing is caring.';
	});

	dataSelfieItApp.controller('faqController', ['$scope', function($scope) {
	    $scope.message = '';

	    //This is the Top Button Code
	    $(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});

			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				$('html, body').animate({scrollTop: 0}, 300);
			});

			$('#faqToAnchor').click(function(event) {
				event.preventDefault();
				console.log('clicked faq-link');
				$('html, body').animate({scrollTop: $('#faq-anchor').offset().top}, 300);
			});

			$('#termsToAnchor').click(function(event) {
				event.preventDefault();
				console.log('clicked terms-link');
				$('html, body').animate({scrollTop: $('#terms-anchor').offset().top}, 300);
			});
		});
	    //

	    jQuery(document).ready(function($){
			//update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
			var MqM= 768,
				MqL = 1024;

			var faqsSections = $('.cd-faq-group'),
				faqTrigger = $('.cd-faq-trigger'),
				faqsContainer = $('.cd-faq-items'),
				faqsCategoriesContainer = $('.cd-faq-categories'),
				faqsCategories = faqsCategoriesContainer.find('a'),
				closeFaqsContainer = $('.cd-close-panel');

			//select a faq section
			faqsCategories.on('click', function(event){
				event.preventDefault();
				var selectedHref = $(this).attr('href'),
					target= $(selectedHref);
				if( $(window).width() < MqM) {
					faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
					closeFaqsContainer.addClass('move-left');
					$('body').addClass('cd-overlay');
				} else {
			        $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200);
				}
			});

			//close faq lateral panel - mobile only
			$('body').bind('click touchstart', function(event){
				if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) {
					closePanel(event);
				}
			});
			faqsContainer.on('swiperight', function(event){
				closePanel(event);
			});

			//show faq content clicking on faqTrigger
			faqTrigger.on('click', function(event){
				event.preventDefault();
				$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
			});

		});




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
