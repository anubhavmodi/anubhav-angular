	   // create the module and name it scotchApp
	  var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngMockE2E', 'ngSanitize', 'ngLocalize', 'ngResource'])
	    .value('localeSupported', [
	      'en-US',
	      'fr-FR'
	    ]);

	   // configure our routes
	  scotchApp.config(function($routeProvider) {
	    $routeProvider

	    // route for the home page
	    .when('/', {
	      templateUrl: 'pages/home.html',
	      controller: 'mainController'
	    })

	    // route for the about page
	    .when('/details', {
	      templateUrl: 'pages/details.html',
	      controller: 'detailController'
	    })

	    // route for the contact page
	    .when('/back', {
	      templateUrl: 'pages/details.html',
	      controller: 'detailController'
	    })

	    .when('/details2', {
	      templateUrl: 'pages/details2.html',
	      controller: 'detail2Controller'
	    })
	      .when('/submit', {
	        templateUrl: 'pages/result.html',
	        controller: 'resultController'
	      })

	    .when('/about', {
	      templateUrl: 'pages/about.html',
	      controller: 'aboutController'
	    })
	      .when('/contact', {
	        templateUrl: 'pages/contact.html',
	        controller: 'contactController'
	      });

	  });

	  scotchApp.run(function($httpBackend) {
	    $httpBackend.whenGET('languages/en-US/common.lang.json')
	      .respond(angular.toJson({
	        personaldetails: "Personal Details",
	        title: "Title",
	        firstName: "First Name",
	        middleName: "Middle Name",
	        lastName: "Last Name",
	        ifany: "if any",
	        altName: "Alternate Name",
	        phoneNumber: "Phone Number",
	        phoneNumber2: "Phone Number2",
	        alphabetMsg: "Please enter alphabet,space and hyphen only!",
	        fNameRequired: "Please enter first name!",
	        lNameRequired: "Please enter last name!",
	        phoneMsg: "Please enter 10 digit number start with 08 or 09",
	        select: "Select",
	        mr: "Mr.",
	        mrs: "Mrs.",
	        work: "Work",
	        home: "Home",
	        english: "English",
	        french: "French",
	        submit: "Submit",
	        username: "Username",
	        password: "Password",
	        usernameMsg: "Username is required!",
	        passMsg: "Password is required!",
	        login: "Login",
	        welcome: "Welcome to AngularJS",
	        continue: "Continue",
	        commdetails: "Communication Details",
	        curraddress: "Current Address",
	        peraddress: "Permanent Address",
	        city: "City",
	        postalCode: "Postal Code",
	        state: "State",
	        curraddressRequired: "Please enter current address!",
	        peraddressRequired: "Please enter permanent address!",
	        postalCodeRequired: "Please enter postal code!",
	        stateRequired: "Please enter state!",
	        cityRequired: "Please enter city!",
	        numberMsg: "Please enter number only!",
	        about: "About Us",
	        contact: "Contact Us",
	        lang: "Language",
	        back: "Back"
	      }));
	    $httpBackend.whenGET('languages/fr-FR/common.lang.json')
	      .respond(angular.toJson({
	        personaldetails: "Details Personnels",
	        title: "Titre",
	        firstName: "Prénom",
	        middleName: "Deuxième Prénom",
	        lastName: "nom de famille",
	        ifany: "si seulement",
	        altName: "Nom Alternatif",
	        phoneNumber: "Numéro de téléphone",
	        phoneNumber2: "Numéro2 de téléphone",
	        alphabetMsg: "S'il vous plaît entrer alphabet, l'espace et le tiret seulement!",
	        fNameRequired: "S'il vous plaît entrer le prénom !",
	        lNameRequired: "S'il vous plaît entrer nom !",
	        phoneMsg: "S'il vous plaît entrer le numéro de 10 chiffres commencer par 08 ou 09",
	        select: "Sélectionner",
	        mr: "M.",
	        mrs: "Mme.",
	        work: "Travail",
	        home: "Maison",
	        english: "Anglais",
	        french: "Français",
	        submit: "Soumettre",
	        username: "Nom d'utilisateur",
	        password: "mot de passe",
	        usernameMsg: "Nom d'utilisateur est requis !",
	        passMsg: "Le mot de passe est demandé!",
	        login: "Login",
	        welcome: "Bienvenue à angularjs",
	        commdetails: "Détails Communication",
	        continue: "Continuer",
	        curraddress: "Adresse Actuelle",
	        peraddress: "Adresse Permanente",
	        city: "ville",
	        postalCode: "code Postal",
	        state: "état",
	        curraddressRequired: "S'il vous plaît entrez votre adresse actuelle !",
	        peraddressRequired: "S'il vous plaît entrez l'adresse permanente !",
	        postalCodeRequired: "S'il vous plaît entrez le code postal !",
	        stateRequired: "S'il vous plaît entrer dans l'état !",
	        cityRequired: "S'il vous plaît entrez ville!",
	        numberMsg: "S'il vous plaît entrer le numéro seulement!",
	        about: "A Propos De Nous",
	        contact: "Contactez Nous",
	        lang: "Langue",
	        back: "dos"
	      }));
	    $httpBackend.whenGET(/.*/).passThrough();
	  });
	   // create the controller and inject Angular's $scope
	  scotchApp.controller('mainController', function($scope, $location, locale) {
	    // create a message to display in our view
	    $scope.setLocale = locale.setLocale;
	    $scope.items = [
	      "The first choice!",
	      "And another choice for you.",
	      "but wait! A third!"
	    ];
	    $scope.logindata = {};
	    $scope.authenticate = function(login) {
	      //console.log(login.userName +""+login.password);
	      if (login.userName == 'admin' && login.password == 'admin')
	        $location.path("/details");
	      else
	        alert("Username or password is incorrect!");
	    };
	  });


	  scotchApp.controller('detailController', function($scope, $location, locale, myService) {

	    $scope.namePattern = '^[-\\sa-zA-Z]+$';
	    $scope.detail = {};

	    $scope.
	    continue = function(personal) {
	      $location.path("/details2");
	      $scope.detail = angular.copy(personal);
	      myService.set({
	        "personal": $scope.detail
	      });
	    };

	  });

	  scotchApp.controller('detail2Controller', function($scope, $location, locale, myService) {

	    $scope.namePattern = '^[A-z]+$';
	    $scope.detail = {};

	    $scope.submit = function(comm) {
	      $location.path("/submit");
	      $scope.pdetail = myService.get().personal;
	      $scope.cdetail = angular.copy(comm);
	      myService.set({
	        "personal": $scope.pdetail,
	        "communication": $scope.cdetail
	      });
	    };

	  });

	  scotchApp.controller('resultController', function($scope, $location, locale, myService) {
	    $scope.personalDetails = myService.get().personal;
	    $scope.communicationDetails = myService.get().communication;
	  });

	  scotchApp.controller('aboutController', function($scope, $location, locale, myService) {
	    //$scope.personalDetails = myService.get().personal;
	    //$scope.communicationDetails = myService.get().communication;
	  });

	  scotchApp.controller('contactController', function($scope, $location, locale, myService, Contact) {
	    //$scope.personalDetails = myService.get().personal;
	    //$scope.communicationDetails = myService.get().communication;
	    // Contacts are from REST API
	    $scope.contacts = Contact.query();
	  });

	  scotchApp.factory('myService', function() {
	    var savedData = {}

	      function set(data) {
	        savedData = data;
	      }

	      function get() {
	        return savedData;
	      }

	    return {
	      set: set,
	      get: get
	    }

	  });

	  scotchApp.factory('Contact', function($resource) {
	    return $resource('contact.json');
	  });


	  scotchApp.directive('regexValidate', function() {
	    return {
	      // restrict to an attribute type.
	      restrict: 'A',

	      // element must have ng-model attribute.
	      require: 'ngModel',

	      link: function(scope, elem, attr, ctrl) {

	        var regex = new RegExp(scope[attr.regexValidate]);

	        ctrl.$parsers.unshift(function(value) {
	          // test and set the validity after update.
	          if (value !== null && value !== '') {
	            var valid = regex.test(value);
	            ctrl.$setValidity('regexValidate', valid);
	          }
	          return valid ? value : '';
	        });
	        ctrl.$formatters.unshift(function(value) {
	          // validate.
	          ctrl.$setValidity('regexValidate', regex.test(value));

	          // return the value or nothing will be written to the DOM.
	          return value;
	        });
	      }
	    };
	  });

	  scotchApp.directive('ngFocus', [

	    function() {
	      var FOCUS_CLASS = "ng-focused";
	      return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function(scope, element, attrs, ctrl) {
	          ctrl.$focused = false;
	          element.bind('focus', function(evt) {
	            element.addClass(FOCUS_CLASS);
	            scope.$apply(function() {
	              ctrl.$focused = true;
	            });
	          }).bind('blur', function(evt) {
	            element.removeClass(FOCUS_CLASS);
	            scope.$apply(function() {
	              ctrl.$focused = false;
	            });
	          });
	        }
	      };
	    }
	  ]);
