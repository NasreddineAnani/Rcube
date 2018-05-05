webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget__ = __webpack_require__("./node_modules/ngx-uploadcare-widget/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authGuard_service__ = __webpack_require__("./src/app/services/authGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_centers_service__ = __webpack_require__("./src/app/services/centers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_google_places_autocomplete__ = __webpack_require__("./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ngx_google_places_autocomplete__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyCq5K8mLvTVakYFXLBGiPVaEafA0W5tIJc",
    authDomain: "rcube-7b19f.firebaseapp.com",
    databaseURL: "https://rcube-7b19f.firebaseio.com",
    projectId: "rcube-7b19f",
    storageBucket: "rcube-7b19f.appspot.com",
    messagingSenderId: "930082734432"
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget__["UcWidgetComponent"],
                __WEBPACK_IMPORTED_MODULE_17__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_google_places_autocomplete__["GooglePlaceModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_authGuard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_items_service__["a" /* ItemsService */],
                __WEBPACK_IMPORTED_MODULE_14__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_15__services_centers_service__["a" /* CentersService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <div class=\"jumbotron\">\n    <h1>Sélectionner </h1>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Jeter/Donner</a></p>\n      </div>\n      <div class=\"col-md-6\">\n        <p><a class=\"btn btn-lg btn-success\" href=\"#\" role=\"button\">Chercher</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"row category\">\n  <div class=\"card w-90 p-3\">\n    <div class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Catégories</h1>\n        <p class=\"lead text-muted\">Veuillez choisir la catégorie correspondant à l'objet que souhaitez disposer</p>\n      </div>\n    </div>\n\n    <div class=\"py-5 bg-light\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Appareils électroniques </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Pneus </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Huiles et peinture </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Électroménagers </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Métal </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Bois </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Ordures ménagère </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Bac de recyclage </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Résidus vert </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Déchets encombrants </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Vêtements et accessoires </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Meubles </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Jouets </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Articles de Sport </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Électroménagers </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Autres </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"row objectList\">\n  <div class=\"card w-90 p-3\">\n    <div class=\"jumbotron text-center\">\n      <div class=\"container\">\n        <h1 class=\"jumbotron-heading\">Liste d'objet</h1>\n        <p class=\"lead text-muted\">Veuillez choisir l'objet que souhaitez obtenir</p>\n      </div>\n    </div>\n\n    <div class=\"py-5 bg-light\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\" style=\"height: 10%;width: 10%\">\n              <div class=\"card-body\">\n                <p> Appareils électroniques </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Pneus </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Huiles et peinture </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Électroménagers </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Métal </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Bois </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Ordures ménagère </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Bac de recyclage </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow\">\n              <div class=\"card-body\">\n                <p> Résidus vert </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 text-center\">\n                <p> Autres </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, router, route, usersService, itemsService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.itemsService = itemsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\"><img src=\"../../assets/img/logo.png\" style=\"height: 50px;\"></h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a [routerLink]=\"['/register']\" *ngIf=\"!isLogged\" class=\"p-2 text-dark\" >S'enregistrer</a>\n    <a *ngIf=\"isLogged\" class=\"p-2 text-dark\" >{{currentUser.email}}</a>\n  </nav>\n  <a [routerLink]=\"['/login']\" *ngIf=\"!isLogged\" class=\"btn btn-outline-primary\" >Se connecter</a>\n  <a (click)=\"logout()\" *ngIf=\"isLogged\" class=\"btn btn-outline-primary\" >Se déconnecter</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            _this.currentUser = _this.authService.currentUser();
            if (_this.currentUser) {
                _this.isLogged = true;
            }
            else {
                _this.isLogged = false;
            }
            ;
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.router.navigate(['']);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-4\">\n  <div class=\"col-12 text-center\">\n    <button class=\"btn btn-success\">Gérer mes déchets</button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"jumbotron\">\n      <h1 class=\"mb-4\">R, permet</h1>\n      <p  class=\"lead\">Add your favorite products to your watchlist and we'll let you know when the price drops.</p>\n      <p >We'll update you everyday ;)</p>\n      <p class=\"lead text-center\"><a class=\"btn btn-primary btn-lg mt-2\" href=\"/signup\" role=\"button\">Sign Up</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, route, itemsService, usersService) {
        this.router = router;
        this.route = route;
        this.itemsService = itemsService;
        this.usersService = usersService;
        this.loading = false;
        this.links = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empty = false;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.username = params['id'];
            _this.usersService.getUserByUsername(_this.username).then(function (res) {
                if (res.length == 0) {
                    _this.loading = false;
                    _this.empty = true;
                }
                else {
                    _this.user = res[0];
                }
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h4 class=\"mb-3\">Se connecter</h4>\n      <form>\n\n        <div class=\"mb-3\">\n          <label for=\"username\">Adresse Courriel</label>\n          <input #email type=\"text\" class=\"form-control\" id=\"username\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"password\">Mot de passe</label>\n          <input #password type=\"password\" class=\"form-control\" id=\"password\" required=\"\">\n        </div>\n\n        <button (click)=\"login(email.value, password.value)\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Se connecter</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.authService.login(email, password).then(function () {
            console.log('Success');
            _this.router.navigate(['dashboard']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h4 class=\"mb-3\">S'enregistrer</h4>\n      <form>\n\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Nom</label>\n            <input #lastname type=\"text\" class=\"form-control\" id=\"lastName\" required=\"\">\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">Prénom</label>\n            <input #firstname type=\"text\" class=\"form-control\" id=\"firstName\" required=\"\">\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"adress\">Adresse</label>\n          <input #address ngx-google-places-autocomplete [options]=\"{types: [],componentRestrictions: { country: 'CA' }}\" id=\"adress\" class=\"form-control\" placeholder=\" \" (onAddressChange)=\"onChange($event)\"/>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"phoneNumber\">Numéro de téléphone</label>\n          <input #phoneNumber type=\"text\" class=\"form-control\" id=\"phoneNumber\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Adresse Courriel</label>\n          <input #email type=\"text\" class=\"form-control\" id=\"email\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"password\">Mot de passe</label>\n          <input #password type=\"password\" class=\"form-control\" id=\"password\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"passwordConfirm\">Confirmer le mot de passe</label>\n          <input #passwordConfirmation type=\"password\" class=\"form-control\" id=\"passwordConfirm\" required=\"\">\n        </div>\n\n        <button (click)=\"register(lastname.value, firstname.value, address.value, phoneNumber.value, email.value, password.value, passwordConfirmation.value)\" class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">S'enregistrer</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router, route, usersService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (lastname, firstname, address, phoneNumber, email, password, passwordConfirmation) {
        var _this = this;
        this.authService.register(email, password).then(function (res) {
            var user = _this.authService.currentUser();
            user.updateProfile({
                displayName: lastname + ' ' + firstname,
                photoURL: ""
            }).then(function (res) {
                _this.usersService.postUser({
                    lastname: lastname,
                    firstname: firstname,
                    address: address,
                    phoneNumber: phoneNumber,
                    email: email,
                    coord: { long: _this.long, lat: _this.lat }
                }).then(function (res) {
                    console.log(res);
                    _this.router.navigate(['dashboard']);
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    RegisterComponent.prototype.onChange = function (address) {
        this.long = address.geometry.location.lng();
        this.lat = address.geometry.location.lat();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(af, router) {
        this.af = af;
        this.router = router;
        this.loggedIn = false;
    }
    AuthService.prototype.currentUser = function () {
        return this.af.auth.currentUser;
    };
    AuthService.prototype.login = function (email, password) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        return this.af.auth.signOut();
    };
    AuthService.prototype.register = function (email, password) {
        return this.af.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.af.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/authGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log("access denied");
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/centers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_service__ = __webpack_require__("./src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CentersService = (function () {
    function CentersService(http, authService, usersService) {
        this.http = http;
        this.authService = authService;
        this.usersService = usersService;
    }
    CentersService.prototype.getCenterByPosition = function (lat, long) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/centers?lat=" + lat + "&long=" + long, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    CentersService.prototype.getCenterByAddress = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/centers?address=" + address, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    CentersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__users_service__["a" /* UsersService */]])
    ], CentersService);
    return CentersService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemsService = (function () {
    function ItemsService(http, authService, usersService) {
        this.http = http;
        this.authService = authService;
        this.usersService = usersService;
    }
    ItemsService.prototype.getItem = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/items/" + id, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                console.log(link);
                resolve(link);
            });
        });
    };
    ItemsService.prototype.getItems = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/items?email=" + email, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    ItemsService.prototype.getItemsByUsername = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/items?username=" + username, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    ItemsService.prototype.getItemsByCategorie = function (categorie) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/items?categorie=" + categorie, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    ItemsService.prototype.postItems = function (body) {
        var _this = this;
        console.log(body);
        body['email'] = this.authService.currentUser().email;
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post("/items", JSON.stringify(body), { headers: contentHeaders })
                .map(function (res) { return res; })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            })
                .subscribe(function (item) {
                resolve(item);
            });
        });
    };
    ItemsService.prototype.putItems = function (id, body) {
        var _this = this;
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.put("/items/" + id, JSON.stringify(body), { headers: contentHeaders })
                .map(function (res) { return res; })
                .catch(function (error) {
                console.log(error);
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            })
                .subscribe(function (item) {
                console.log(item);
                resolve(item);
            });
        });
    };
    ItemsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__users_service__["a" /* UsersService */]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUserById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/users/" + id, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (user) {
                console.log(user);
                resolve(user);
            });
        });
    };
    UsersService.prototype.getUserByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/users?email=" + email, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (user) {
                console.log(user);
                resolve(user);
            });
        });
    };
    UsersService.prototype.getUserByUsername = function (username) {
        var _this = this;
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.get("/users?username=" + username, { headers: contentHeaders })
                .map(function (res) { return res.json().users; })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            })
                .subscribe(function (item) {
                resolve(item);
            });
        });
    };
    UsersService.prototype.postUser = function (body) {
        var _this = this;
        console.log(body);
        console.log(JSON.stringify(body));
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.post("/users", JSON.stringify(body), { headers: contentHeaders })
                .map(function (res) { return res; })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            })
                .subscribe(function (item) {
                resolve(item);
            });
        });
    };
    UsersService.prototype.putUser = function (id, body) {
        var _this = this;
        var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');
        return new Promise(function (resolve, reject) {
            _this.http.put("/users/" + id, JSON.stringify(body), { headers: contentHeaders })
                .map(function (res) { return res; })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            })
                .subscribe(function (item) {
                resolve(item);
            });
        });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h4 class=\"mb-3\">S'enregistrer</h4>\n      <form>\n\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Nom</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" required=\"\">\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">Prénom</label>\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" required=\"\">\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"adress\">Adresse</label>\n          <input type=\"text\" class=\"form-control\" id=\"adress\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"phoneNumber\">Numéro de téléphone</label>\n          <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Adresse Courriel</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"password\">Mot de passe</label>\n          <input type=\"text\" class=\"form-control\" id=\"password\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"passwordConfirm\">Confirmer le mot de passe</label>\n          <input type=\"text\" class=\"form-control\" id=\"passwordConfirm\" required=\"\">\n        </div>\n\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">S'enregistrer</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, router, route, usersService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function (email, username, password, passwordConfirmation) {
        var _this = this;
        this.authService.register(email, password).then(function (res) {
            var user = _this.authService.currentUser();
            user.updateProfile({
                displayName: username,
                photoURL: ""
            }).then(function (res) {
                _this.usersService.postUser({
                    displayName: username,
                    email: email,
                    notification: true,
                    premium: false
                }).then(function (res) {
                    console.log(res);
                    _this.router.navigate(['dashboard']);
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map