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

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\"><a class=\"navbar-brand navbar-link\" href=\"#\">S2TW </a>\n      <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n      <ul class=\"nav navbar-nav\"></ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_image_service__ = __webpack_require__("./src/app/services/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var firebaseConfig = {
    "apiKey": "AIzaSyBaQlmeBsMYHQfV8pwdicDmmKug-T0wE14",
    "authDomain": "s2tw-dev.firebaseapp.com",
    "databaseURL": "https://s2tw-dev.firebaseio.com",
    "projectId": "s2tw-dev",
    "storageBucket": "s2tw-dev.appspot.com",
    "messagingSenderId": "424462100210"
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_authGuard_service__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget__["UcWidgetComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_authGuard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_image_service__["a" /* ImageService */]
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

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"text-center\">\n    <input #searchInput class=\"form-control\" placeholder=\"Search ...\" style=\"height: 60px;font-size: 25px;\">\n  </div>\n</div>\n\n<div class=\"photo-gallery\">\n  <div class=\"container\">\n    <div class=\"intro\">\n      <h2 class=\"text-center\">Upload your own pictures</h2>\n      <div class=\"text-center\">\n        <ngx-uploadcare-widget class=\"text-center\"\n                               images-only=\"true\"\n                               data-crop=\"free\"\n                               public-key=\"c49dd3401f80bb6419e1\"\n                               (on-upload-complete)=\"onUploadHandler($event)\"\n                               (on-change)=\"onChangeHandler($event)\">\n        </ngx-uploadcare-widget>\n      </div>\n    </div>\n\n    <div class=\"intro\">\n      <h2 class=\"text-center\">Gallery</h2>\n    </div>\n    <div class=\"row photos\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/desk.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/desk.jpg\"></a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/building.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/building.jpg\"></a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/loft.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/loft.jpg\"></a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/building.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/building.jpg\"></a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/loft.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/loft.jpg\"></a>\n      </div>\n      <div class=\"col-lg-3 col-md-4 col-sm-6 item\">\n        <a href=\"assets/img/desk.jpg\" data-lightbox=\"photos\"><img class=\"img-responsive\" src=\"assets/img/desk.jpg\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"site-footer\">\n  <div class=\"container\">\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h5>S2TW ©</h5></div>\n      <div class=\"col-sm-6 social-icons\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a><a href=\"#\"><i class=\"fa fa-twitter\"></i></a><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_image_service__ = __webpack_require__("./src/app/services/image.service.ts");
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
    function HomeComponent(imageService) {
        this.imageService = imageService;
        this.images = [];
        this.search = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImages('cars').then(function (images) {
            _this.images = images;
        }).catch(function (err) {
        });
    };
    HomeComponent.prototype.onUploadHandler = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.onChangeHandler = function (e) {
        console.log(e);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_image_service__["a" /* ImageService */]])
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

module.exports = "<div class=\"login-wrapper \">\n\n  <div class=\"bg-pic\">\n\n    <img src=\"https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8059e118396db74fbfea534f808c5c6f&auto=format&fit=crop&w=2851&q=80\" data-src=\"https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8059e118396db74fbfea534f808c5c6f&auto=format&fit=crop&w=2851&q=80\" data-src-retina=\"https://images.unsplash.com/photo-1433574466251-fe1be0d9b3d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8059e118396db74fbfea534f808c5c6f&auto=format&fit=crop&w=2851&q=80\" alt=\"\" class=\"lazy\">\n\n  </div>\n\n  <div class=\"login-container bg-white\">\n    <div class=\"p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40\">\n      <img src=\"assets/img/logo_2x.png\" alt=\"logo\" data-src=\"assets/img/logo_2x.png\" data-src-retina=\"assets/img/logo_2x.png\" width=\"78\" height=\"78\">\n      <p class=\"p-t-35\">Sign into your pages account</p>\n\n      <form id=\"form-login\" class=\"p-t-15\" role=\"form\"  novalidate=\"novalidate\">\n\n        <div class=\"form-group form-group-default\">\n          <label>Login</label>\n          <div class=\"controls\">\n            <input type=\"text\" name=\"username\" placeholder=\"Email\" class=\"form-control\" required=\"\" aria-required=\"true\">\n          </div>\n        </div>\n\n\n        <div class=\"form-group form-group-default\">\n          <label>Password</label>\n          <div class=\"controls\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\" aria-required=\"true\">\n          </div>\n        </div>\n\n        <button class=\"btn btn-primary btn-cons m-t-10\">Sign in</button>\n      </form>\n\n      <div class=\"pull-bottom sm-pull-bottom\">\n        <div class=\"m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix\">\n          <div class=\"col-sm-3 col-md-2 no-padding\">\n            <img alt=\"\" class=\"m-t-5\" data-src=\"assets/img/demo/pages_icon.png\" data-src-retina=\"assets/img/demo/pages_icon_2x.png\" height=\"60\" src=\"assets/img/demo/pages_icon_2x.png\" width=\"60\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
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
    AuthService.prototype.login = function (email, password) {
        return this.af.auth.signInWithEmailAndPassword(email, password)
            .then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.af.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
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





var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getImages = function (q) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("https://s2tw.herokuapp.com/images?q=" + q, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (images) {
                resolve(images.images);
            });
        });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ImageService);
    return ImageService;
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