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

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_categories_service__ = __webpack_require__("./src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_search_categories_service__ = __webpack_require__("./src/app/services/search-categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_pickup_service__ = __webpack_require__("./src/app/services/pickup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_google_places_autocomplete__ = __webpack_require__("./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_items_search_items_component__ = __webpack_require__("./src/app/search-items/search-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
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
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_24__search_search_component__["a" /* SearchComponent */] },
    { path: 'searchItems', component: __WEBPACK_IMPORTED_MODULE_25__search_items_search_items_component__["a" /* SearchItemsComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_uploadcare_widget__["UcWidgetComponent"],
                __WEBPACK_IMPORTED_MODULE_20__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_21__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_25__search_items_search_items_component__["a" /* SearchItemsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_26__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyC4uSW7IkXhjEAM9JrO1MaEoAw2US1ExPM'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_authGuard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_items_service__["a" /* ItemsService */],
                __WEBPACK_IMPORTED_MODULE_14__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_15__services_centers_service__["a" /* CentersService */],
                __WEBPACK_IMPORTED_MODULE_16__services_categories_service__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_17__services_search_categories_service__["a" /* SearchCategoriesService */],
                __WEBPACK_IMPORTED_MODULE_18__services_pickup_service__["a" /* PickupService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".bgCard {\n  background-size: cover;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%221440px%22 height%3D%22771px%22 viewBox%3D%220 0 1440 771%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 style%3D%22background%3A %23F9F9FA%3B%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3EDesktop HD%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3ClinearGradient x1%3D%22100%25%22 y1%3D%2250%25%22 x2%3D%22-2.22044605e-14%25%22 y2%3D%2250%25%22 id%3D%22linearGradient-1%22%3E            %3Cstop stop-color%3D%22%23B3E699%22 offset%3D%220%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%2361E4AA%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%23D8D8D8%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg id%3D%22Desktop-HD%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath d%3D%22M-28.2165064%2C795.713798 L-204.277344%2C497.027861 C174.890858%2C274.136977 552.309441%2C243.216587 927.978406%2C404.266691 C1303.64737%2C565.316795 1537.91759%2C430.561232 1630.78906%2C0 L1463.44179%2C787.422975 L-28.2165064%2C795.713798 Z%22 id%3D%22Path%22 stroke%3D%22%23FFFFFF%22 fill%3D%22url(%23linearGradient-1)%22%3E%3C%2Fpath%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.product-img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: auto;\n  width: auto;\n  max-width: 400px;\n  max-height: 400px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n.img-cat {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 200px;\n  overflow: hidden;\n}\n\nhr.style14 {\n  border: 0;\n  height: 1px;\n  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);\n}\n\n.label-form {\n  font-size: 1.2em;\n}\n\n.titre {\n  font-size: x-large;\n}\n\n.borhane {\n  background-color: rosybrown;\n}\n\n.btn-round {\n  border-radius: 50% ;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-0 pl-5 pr-5 pb-5\">\n\n  <div *ngIf=\"alert\" class=\"p-2\">\n    <div class=\"alert alert-success\" role=\"alert\">\n      <strong>Super!</strong> {{alert}}\n    </div>\n  </div>\n\n  <div *ngIf=\"step === 0\" class=\"pt-2 row animated fadeIn\">\n    <div class=\"card col-xs-12  col-sm-12  col-md-12 col-lg-12 col-xl-10 mw-70 pl-5 pr-5 pb-5 border-0 shadow mx-auto bgCard\">\n      <div class=\"jumbotron text-center pb-1 bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Sélectionner</h1>\n          <hr class=\"style14\">\n          <p class=\"lead text-muted\">Comment souhaitez-vous recycler aujourd'hui ?</p>\n        </div>\n      </div>\n\n      <div class=\"row text-center\">\n        <div class=\"card col m-3 text-center h-100 shadow border-0\">\n          <div class=\"card-body\">\n            <img (click)=\"redirectHome()\" src=\"../../assets/img/logoBoxRecyclage.svg\" class=\"logoStyle m-4\">\n            <h5 class=\"m-4\">Trouver la façon la plus écologique\n              de disposer de vos déchets ou articles réutilisables</h5>\n            <div class=\"text-center\">\n              <button (click)=\"step = 1\" class=\"btn btn-lg btn-success m-4 w-50 text-center\" role=\"button\">Disposer</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card col m-3 text-center h-100 shadow border-0\">\n          <div class=\"card-body \">\n            <img (click)=\"redirectHome()\" src=\"../../assets/img/logoLoupe.svg\" class=\"logoStyle m-4\">\n            <h5 class=\"m-4\">Découvrir une panoplie d'articles différents\n              réutilisables à donner près de chez vous\n            </h5>\n            <div class=\"text-center\">\n              <button [routerLink]=\"['/search']\" class=\"btn btn-lg btn-success m-4 w-50 text-center\" role=\"button\">Chercher</button>\n            </div>\n          </div>\n        </div>\n    </div>\n      <div class=\"col-2\">\n      </div>\n  </div>\n  </div>\n\n  <section *ngIf=\"step == 1\" class=\"row category animated fadeIn\">\n    <div class=\"col-12 card w-90 p-3 shadow border-0\">\n\n      <div *ngIf=\"step == 1\" class=\"p-2\">\n        <button (click)=\"step = 0\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Catégories</h1>\n          <hr class=\"style14\">\n          <p class=\"lead text-muted\">Veuillez choisir la catégorie correspondant à l'objet que souhaitez disposer</p>\n        </div>\n      </div>\n\n      <div class=\"py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n\n\n            <div *ngFor=\"let cat of categories\" class=\"col-md-3\">\n              <div (click)=\"categorie = cat.name;getNextStep(cat)\" class=\"card mb-4 shadow border-0 cardBorderBottom\">\n                <img class=\"img-cat\" src=\"{{cat.image}}\">\n                <div class=\"card-body\">\n                  <h3 class=\"cardItemText\"> {{cat.name}} </h3>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--ecocentre-->\n  <section *ngIf=\"step == 2\" class=\"category animated fadeIn\">\n    <div class=\"card col-xs-12  col-sm-12  col-md-12 col-lg-12 col-xl-8 mw-70 p-3 border-0 shadow mx-auto\">\n      <div *ngIf=\"step == 2 || step == 3  ||  step == 4 || step == 5\" class=\"p-2\">\n        <button (click)=\"step = 1\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Service de prise en charge</h1>\n          <hr class=\"style14\">\n          <p class=\"lead text-muted\">Voici le centre offrant le service de prise en charge le plus près de chez\n            vous.</p>\n        </div>\n      </div>\n\n      <div class=\"card col-12 text-center shadow border-0\">\n        <div class=\"card-body container row\">\n            <div class=\"col-md-6\">\n              <div style=\"padding-left: 0.5em\">\n                <p class=\"titre\"> Veuillez vous rendre à cet écocentre afin de pouvoir disposer de votre objet.</p>\n              </div>\n              <hr>\n              <div class=\"col-md-12\">\n                <div><p class=\"titre\"> Adresse de l'écocentre le plus proche de chez vous</p></div>\n                <div><p>{{nearestAddress}}</p></div>\n              </div>\n              <hr>\n              <div class=\"col-md-12\">\n                <div><p class=\"titre\"> Heures d'ouverture</p></div>\n                <div><p>Lundi : 8h à 17h <br>Mardi : 8h à 17h <br>Mercredi : 8h à 17h <br>Jeudi : 8h à 17h <br>Vendredi\n                  : 8h à 17h <br>Samedi : 8h à 17h <br>Dimanche : 8h à 17h <br></p></div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"card mb-4 box-shadow\">\n                <div id=\"map\" style=\"width:100%;height:400px;\">\n                  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                  </agm-map>\n                </div>\n\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--  book-->\n  <section *ngIf=\"step == 3\" class=\"row category animated fadeIn\">\n    <div class=\"col-12 card w-90 p-3 shadow border-0\">\n      <div *ngIf=\"step == 2 || step == 3  ||  step == 4 || step == 5\" class=\"p-2\">\n        <button (click)=\"step = 1\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Service de prise en charge à domicile</h1>\n          <p class=\"lead text-muted\">Veuiller remplir le formulaire suivant afin de profiter du service de prise en\n            charge à domicile offert par votre municipalité.</p>\n        </div>\n      </div>\n\n      <div class=\"py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n\n\n\n              <div class=\"form-group row\">\n                <label for=\"example-date-input\" class=\"col-12 col-form-label\">Date de prise en charge à votre domicile</label>\n                <div class=\"col-12\">\n                  <input #date class=\"form-control\" type=\"date\" value=\"2018-05-06\" id=\"example-date-input\">\n                </div>\n              </div>\n\n              <form>\n                <div class=\"mb-3\">\n                  <label>Dimension de l'objet à prendre en charge</label>\n                  <div>\n                    <div>\n                      <label class=\"radio-inline\">\n                        <input (click)=\"pickUpSize = 'small'\" type=\"radio\" name=\"optradio\" > Petit ( < 5 cm X 5 cm X 5 cm)\n                      </label>\n                    </div>\n                    <div>\n                      <label class=\"radio-inline\">\n                        <input (click)=\"pickUpSize = 'medium'\" type=\"radio\" name=\"optradio\"> Moyen ( < 30 cm X 30 cm X 30 cm)\n                      </label>\n                    </div>\n                    <div>\n                      <label class=\"radio-inline\">\n                        <input (click)=\"pickUpSize = 'big'\" type=\"radio\" name=\"optradio\"> Grand ( < 60 cm X 60 cm X 60 cm)\n                      </label>\n                    </div>\n                  </div>\n                </div>\n\n                <button (click)=\"bookPickUp(date.value)\" class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Valider</button>\n              </form>\n            </div>\n            <div class=\"col-md-3\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--  service d'ordure-->\n  <section *ngIf=\"step == 4\" class=\"row category animated fadeIn\">\n    <div class=\"col-12 card w-90 p-3 shadow border-0\" style=\"\">\n      <div *ngIf=\"step == 2 || step == 3  ||  step == 4 || step == 5\" class=\"p-2\">\n        <button (click)=\"step = 1\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Service de prise en charge à domicile</h1>\n          <p class=\"lead text-muted\">Votre municipalité s'occupe de la prise en charge de ce type de matières\n            résiduelles.</p>\n        </div>\n      </div>\n\n      <div class=\"py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n              <div style=\"text-align: center\"><p> Horaire de la prise en charge</p></div>\n              <div>\n                <hr>\n              </div>\n              <div style=\"text-align: center\"><h3>{{trashDay}}</h3></div>\n            </div>\n            <div class=\"col-md-3\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--  donner-->\n  <section *ngIf=\"step == 5\" class=\"row category animated fadeIn\">\n    <div class=\"col-12 card w-90 p-3 shadow border-0\" style=\"\">\n      <div *ngIf=\"step == 2 || step == 3  ||  step == 4 || step == 5\" class=\"p-2\">\n        <button (click)=\"step = 1\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Offrir l'objet à disposer</h1>\n          <p class=\"lead text-muted\">Veuiller remplir le formulaire suivant afin d'offrir votre objet à un autre citoyen\n            qui souhaiterait l'acquérir gratuitement.</p>\n        </div>\n      </div>\n\n      <div class=\"py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n              <form>\n\n                <div class=\"mb-3\">\n                  <label for=\"objectTitle\" class=\"label-form\">Titre de l'annonce</label>\n                  <input #titleItem type=\"text\" class=\"form-control\" id=\"objectTitle\" required=\"\">\n                </div>\n\n                <div class=\"mb-3\">\n                  <label for=\"objectDescription\" class=\"label-form\">Description de l'objet</label>\n                  <input  #descriptionItem type=\"text\" class=\"form-control\" id=\"objectDescription\" required=\"\">\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"label-form\">Importer une photo de l'objet</label>\n                  <ngx-uploadcare-widget\n                    images-only=\"true\"\n                    public-key=\"c49dd3401f80bb6419e1\"\n                    class=\"float-right\"\n                    (on-upload-complete)=\"onUpload($event)\">\n                  </ngx-uploadcare-widget>\n                </div>\n\n                <button (click)=\"submitItems(titleItem.value, descriptionItem.value)\" class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Valider</button>\n              </form>\n            </div>\n            <div class=\"col-md-3\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_categories_service__ = __webpack_require__("./src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pickup_service__ = __webpack_require__("./src/app/services/pickup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_centers_service__ = __webpack_require__("./src/app/services/centers.service.ts");
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
    function DashboardComponent(authService, router, route, usersService, itemsService, categoriesService, pickupService, centersService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.itemsService = itemsService;
        this.categoriesService = categoriesService;
        this.pickupService = pickupService;
        this.centersService = centersService;
        this.categories = [];
        this.lat = 45.5577848;
        this.lng = -73.8714164;
        this.nearestAddress = '7272 Saint-Patrick St, Lasalle, QC H8N 2J7';
        this.trashDay = 'mardi, chaque 2 semaines';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.categories = this.categoriesService.getCategories();
        this.getNearestCenter();
        this.getTrashDay();
        this.step = 0;
    };
    DashboardComponent.prototype.getNextStep = function (categorie) {
        this.currentCategorie = categorie;
        this.step = this.currentCategorie.nextStep;
    };
    DashboardComponent.prototype.bookPickUp = function (bookingDate) {
        var _this = this;
        this.pickupService.postPickup({
            date: bookingDate,
            size: this.pickUpSize
        });
        this.alert = "La ville a été notifié, la collecte aura lieu le " + bookingDate + " !";
        setTimeout(function () {
            _this.alert = "";
        }, 4000);
        this.step = 0;
    };
    DashboardComponent.prototype.giveObject = function () {
        this.step = 0;
    };
    DashboardComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.imageItem = reader.result.split(',')[1];
            };
        }
    };
    DashboardComponent.prototype.submitItems = function (titleItem, descriptionItem) {
        var _this = this;
        this.itemsService.postItems({
            title: titleItem,
            description: descriptionItem,
            image: this.imageItem,
            categories: this.categorie
        });
        this.alert = "Votre objet a été ajouté au objets a donner !";
        setTimeout(function () {
            _this.alert = "";
        }, 4000);
        this.step = 0;
    };
    DashboardComponent.prototype.onUpload = function (info) {
        this.imageItem = info.originalUrl;
    };
    DashboardComponent.prototype.getNearestCenter = function () {
        var _this = this;
        this.usersService.getUserByEmail('wesh@wesh.com').then(function (res) {
            var address = res['users'][0].address;
            _this.centersService.getCenterByAddress(address).then(function (res) {
                _this.lat = res['coord']['lat'];
                _this.lng = res['coord']['long'];
                _this.nearestAddress = res['nearestCenter'];
            });
        });
    };
    DashboardComponent.prototype.getTrashDay = function () {
        var _this = this;
        this.usersService.getUserByEmail('wesh@wesh.com').then(function (res) {
            var address = res['users'][0].address;
            _this.centersService.getDayTrash(address).then(function (res) {
                _this.lat = res['coord']['lat'];
                _this.lng = res['coord']['long'];
                _this.trashDay = res['trashDay'];
            });
        });
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
            __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_pickup_service__["a" /* PickupService */],
            __WEBPACK_IMPORTED_MODULE_7__services_centers_service__["a" /* CentersService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".logoStyle {\n  height: 35px;\n  margin-left: 10vh;\n  margin-top: 3vh;\n}\n\n\n.logged {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-4\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\"><img (click)=\"redirectHome()\" src=\"../../assets/img/logo.svg\" class=\"logoStyle\"></h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a [routerLink]=\"['/register']\" *ngIf=\"!isLogged\" class=\"btn btn-success text-white\" >S'enregistrer</a>\n    <a *ngIf=\"isLogged\" class=\"p-2 text-dark\" >{{currentUser.email}}</a>\n  </nav>\n  <a [routerLink]=\"['/login']\" *ngIf=\"!isLogged\" class=\"btn btn-outline-success\" >Se connecter</a>\n  <a (click)=\"logout()\" *ngIf=\"isLogged\" class=\"btn btn-outline-success\" >Se déconnecter</a>\n</div>\n"

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
    HeaderComponent.prototype.redirectHome = function () {
        this.router.navigate(['']);
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

module.exports = ".s-home {\n  width: 100%;\n  height: 100vh;\n  min-height: 786px;\n  background-color: transparent;\n  position: relative;\n  display: table;\n  background-size: cover;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%221440px%22 height%3D%22771px%22 viewBox%3D%220 0 1440 771%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3EDesktop HD%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3ClinearGradient x1%3D%22100%25%22 y1%3D%2250%25%22 x2%3D%22-2.22044605e-14%25%22 y2%3D%2250%25%22 id%3D%22linearGradient-1%22%3E            %3Cstop stop-color%3D%22%23AFF996%22 offset%3D%220%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%233BBE7B%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%23D8D8D8%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg id%3D%22Desktop-HD%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath d%3D%22M-1.39670714%2C27 C322.609963%2C57.3070952 563.451986%2C72.4606428 721.129362%2C72.4606428 C878.806737%2C72.4606428 1118.18277%2C57.3070952 1439.25747%2C27 C1440.24751%2C379.462395 1440.24751%2C555.840285 1439.25747%2C556.133668 C1438.39544%2C556.389122 1078.46633%2C658.608375 718%2C659.61439 C362.6488%2C660.606129 5.9926726%2C579.873824 -1.39670714%2C575.589593 C-4.86776429%2C573.577136 -4.86776429%2C390.713938 -1.39670714%2C27 Z%22 id%3D%22Path%22 fill%3D%22url(%23linearGradient-1)%22%3E%3C%2Fpath%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.s-home .shadow-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .4;\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.8)));\n  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);\n  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000', GradientType=0);\n}\n\n.s-home .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .6;\n  background-color: #000000;\n}\n\n.no-js .s-home {\n  background: #000000;\n}\n\n.slogan {\n  padding-right: 10%;\n  margin-top: 5%;\n  color: forestgreen;\n}\n\n.home-content__main {\n  margin-top: 18%;\n  margin-left: 10vh;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row mb-4\">-->\n  <!--<div class=\"col-12 text-center\">-->\n    <!--<button class=\"btn btn-success\">Gérer mes déchets</button>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--<div class=\"row\">-->\n  <!--<div class=\"col-12\">-->\n    <!--<div class=\"jumbotron\">-->\n      <!--<h1 class=\"mb-4\">R, permet</h1>-->\n      <!--<p  class=\"lead\">Add your favorite products to your watchlist and we'll let you know when the price drops.</p>-->\n      <!--<p >We'll update you everyday ;)</p>-->\n      <!--<p class=\"lead text-center\"><a class=\"btn btn-primary btn-lg mt-2\" href=\"/signup\" role=\"button\">Sign Up</a></p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<section id=\"home\" class=\"s-home target-section\" data-parallax=\"scroll\" data-image-src=\"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36540868671b0e7942ab946c0e44503d&auto=format&fit=crop&w=2200&q=80\" data-natural-width=3000 data-natural-height=2000 data-position-y=center>\n<div class=\"home-content\">\n  <div class=\"row home-content__main\">\n    <h1 class=\"col-12 homeText text-white\">\n      Rcube est la toute nouvelle solution<br>\n      pour permettre aux citoyens de<br>\n      disposer d'objet de la manière<br>\n      la plus écologique possible.\n    </h1>\n    <h4 class=\"col-12 mt-5 text-right slogan text-white\">Une ville intelligente est une ville verte</h4>\n  </div>\n  <div class=\"home-content__line\"></div>\n</div>\n</section>\n\n\n<!--<div class=\"row featurette\">-->\n  <!--<div class=\"col-md-7\">-->\n    <!--<h2 class=\"featurette-heading\">First featurette heading. <span class=\"text-muted\">It'll blow your mind.</span></h2>-->\n    <!--<p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>-->\n  <!--</div>-->\n  <!--<div class=\"col-md-5\">-->\n    <!--<img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 500px;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1632e6f09b1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1632e6f09b1%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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





var HomeComponent = (function () {
    function HomeComponent(router, route, itemsService, usersService, authService) {
        this.router = router;
        this.route = route;
        this.itemsService = itemsService;
        this.usersService = usersService;
        this.authService = authService;
        this.loading = false;
        this.links = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUser()) {
            this.router.navigate(['dashboard']);
        }
        this.empty = false;
        this.loading = true;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h4 class=\"mb-3\">Se connecter</h4>\n      <form>\n\n        <div class=\"mb-3\">\n          <label for=\"username\">Adresse Courriel</label>\n          <input #email type=\"text\" class=\"form-control\" id=\"username\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"password\">Mot de passe</label>\n          <input #password type=\"password\" class=\"form-control\" id=\"password\" required=\"\">\n        </div>\n\n        <button (click)=\"login(email.value, password.value)\" class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Se connecter</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n\n</div>\n\n"

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
        if (this.authService.currentUser()) {
            this.router.navigate(['dashboard']);
        }
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6 text-center\">\n      <h4 class=\"mb-3\">S'enregistrer</h4>\n      <form>\n\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Nom</label>\n            <input #lastname type=\"text\" class=\"form-control\" id=\"lastName\" required=\"\">\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">Prénom</label>\n            <input #firstname type=\"text\" class=\"form-control\" id=\"firstName\" required=\"\">\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"adress\">Adresse</label>\n          <input #address ngx-google-places-autocomplete [options]=\"{types: [],componentRestrictions: { country: 'CA' }}\" id=\"adress\" class=\"form-control\" placeholder=\" \" (onAddressChange)=\"onChange($event)\"/>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"phoneNumber\">Numéro de téléphone</label>\n          <input #phoneNumber type=\"text\" class=\"form-control\" id=\"phoneNumber\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Adresse Courriel</label>\n          <input #email type=\"text\" class=\"form-control\" id=\"email\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"password\">Mot de passe</label>\n          <input #password type=\"password\" class=\"form-control\" id=\"password\" required=\"\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"passwordConfirm\">Confirmer le mot de passe</label>\n          <input #passwordConfirmation type=\"password\" class=\"form-control\" id=\"passwordConfirm\" required=\"\">\n        </div>\n\n        <button (click)=\"register(lastname.value, firstname.value, address.value, phoneNumber.value, email.value, password.value, passwordConfirmation.value)\" class=\"btn btn-success btn-lg btn-block\" type=\"submit\">S'enregistrer</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n\n\n"

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
        if (this.authService.currentUser()) {
            this.router.navigate(['dashboard']);
        }
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

/***/ "./src/app/search-items/search-items.component.css":
/***/ (function(module, exports) {

module.exports = ".itemsMap {\n  height: 72vh;\n}\n\n.img-item {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-height: 200px;\n  overflow: hidden;\n}\n\n.imageItemSeul {\n  max-width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/search-items/search-items.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!currentItem\" class=\"p-3\">\n\n<div class=\"col-12 card w-90 p-3 shadow border-0\">\n  <div>\n    <button [routerLink]=\"['/search']\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n  </div>\n\n  <div class=\"jumbotron text-center bgJombotron\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Produits disponibles</h1>\n    </div>\n  </div>\n\n  <div class=\"row mb-3\">\n    <div class=\"col-md-8 col-12\">\n      <div class=\"row pl-4\">\n\n        <div *ngFor=\"let item of items\" class=\"col-12 col-md-6\">\n          <div (click)=\"currentItem = item\"  class=\"card m-2 shadow border-0\">\n            <img class=\"card-img-top img-item\" src=\"{{item.image}}\" alt=\"{{item.title}}\" />\n            <div class=\"card-body\">\n              <h4 class=\"cardItemText\"> {{item.title}} </h4>\n              <h5><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{item.address}}</h5>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-4 itemsMap affix d-none d-none d-md-block\">\n      <div class=\"card m-2 shadow border-0 h-100\">\n        <div class=\"card-body\" style=\"width: 100%;height: 100%;\">\n          <agm-map [latitude]=\"45.557956\" [longitude]=\"-73.8707293\" style=\"width: 100%;height: 100%;\">\n            <agm-marker *ngFor=\"let item of items\" [latitude]=\"item.coord.lat\" [longitude]=\"item.coord.long\"></agm-marker>\n          </agm-map>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n</div>\n\n\n\n<div *ngIf=\"currentItem\" class=\"p-3\">\n\n  <div class=\"col-12 card w-90 p-3 shadow border-0\">\n    <div class=\"mb-4\">\n      <button (click)=\"currentItem = null\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-12\">\n        <div class=\"row pl-4\">\n\n    <div class=\"col-12\">\n      <div class=\"card mb-3 shadow border-0\">\n        <img class=\"card-img-top\" src=\"{{currentItem.image}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title cardItemText\"> {{currentItem.title}} </h5>\n          <h5> {{currentItem.description}}</h5>\n\n          <h5><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{currentItem.address}}</h5>\n          <h5><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> {{currentItem.phoneNumber}}</h5>\n        </div>\n      </div>\n    </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 mapItemseul affix d-none d-none d-md-block\">\n      <div class=\"card box-shadow h-100\">\n        <div class=\"card-body\" style=\"width: 100%;height: 100%;\">\n          <agm-map [latitude]=\"currentItem.coord.lat\" [longitude]=\"currentItem.coord.long\" style=\"width: 100%;height: 100%;\">\n            <agm-marker [latitude]=\"currentItem.coord.lat\" [longitude]=\"currentItem.coord.long\"></agm-marker>\n          </agm-map>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/search-items/search-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_categories_service__ = __webpack_require__("./src/app/services/search-categories.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchItemsComponent = (function () {
    function SearchItemsComponent(authService, router, route, usersService, itemsService, categoriesService, activatedRoute, domSanitizer) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.itemsService = itemsService;
        this.categoriesService = categoriesService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
    }
    SearchItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var categories = this.route.snapshot.queryParams["categories"];
        this.itemsService.getItemsByCategorie(categories).then(function (res) {
            for (var _i = 0, _a = res['items']; _i < _a.length; _i++) {
                var item = _a[_i];
            }
            _this.items = res['items'];
            console.log(_this.items);
        });
    };
    SearchItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-items',
            template: __webpack_require__("./src/app/search-items/search-items.component.html"),
            styles: [__webpack_require__("./src/app/search-items/search-items.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_search_categories_service__["a" /* SearchCategoriesService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SearchItemsComponent);
    return SearchItemsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".bgCard {\n  background-size: cover;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%221440px%22 height%3D%22771px%22 viewBox%3D%220 0 1440 771%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 style%3D%22background%3A %23F9F9FA%3B%22%3E    %3C!-- Generator%3A Sketch 49.3 (51167) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3EDesktop HD%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E        %3ClinearGradient x1%3D%22100%25%22 y1%3D%2250%25%22 x2%3D%22-2.22044605e-14%25%22 y2%3D%2250%25%22 id%3D%22linearGradient-1%22%3E            %3Cstop stop-color%3D%22%23B3E699%22 offset%3D%220%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%2361E4AA%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E            %3Cstop stop-color%3D%22%23D8D8D8%22 offset%3D%22100%25%22%3E%3C%2Fstop%3E        %3C%2FlinearGradient%3E    %3C%2Fdefs%3E    %3Cg id%3D%22Desktop-HD%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cpath d%3D%22M-28.2165064%2C795.713798 L-204.277344%2C497.027861 C174.890858%2C274.136977 552.309441%2C243.216587 927.978406%2C404.266691 C1303.64737%2C565.316795 1537.91759%2C430.561232 1630.78906%2C0 L1463.44179%2C787.422975 L-28.2165064%2C795.713798 Z%22 id%3D%22Path%22 stroke%3D%22%23FFFFFF%22 fill%3D%22url(%23linearGradient-1)%22%3E%3C%2Fpath%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n\n.product-img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: auto;\n  width: auto;\n  max-width: 400px;\n  max-height: 400px;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\n\n  <section *ngIf=\"step === 1\" class=\"row category animated fadeIn\">\n    <div class=\"col-12 card w-90 p-3 shadow border-0\">\n      <div>\n        <button [routerLink]=\"['/dashboard']\" class=\"btn btn-outline-success btn-round\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      </div>\n\n      <div class=\"jumbotron text-center bgJombotron\">\n        <div class=\"container\">\n          <h1 class=\"jumbotron-heading\">Catégories</h1>\n          <p class=\"lead text-muted\">Veuillez choisir la catégorie correspondant à l'objet que souhaitez trouver</p>\n        </div>\n      </div>\n\n      <div class=\"py-5 bg-light\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div *ngFor=\"let cat of searchCategories\" class=\"col-md-3\">\n              <div (click)=\"getItemCategorie(cat)\" class=\"card mb-4 shadow border-0 cardBorderBottom\">\n                <img class=\"card-img-top\" src=\"{{cat.image}}\">\n                <div class=\"card-body\">\n                  <h3 class=\"cardItemText\"> {{cat.name}} </h3>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("./src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_search_categories_service__ = __webpack_require__("./src/app/services/search-categories.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(authService, router, route, usersService, itemsService, categoriesService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.itemsService = itemsService;
        this.categoriesService = categoriesService;
        this.searchCategories = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchCategories = this.categoriesService.getSearchCategories();
        this.step = 1;
    };
    SearchComponent.prototype.getItemCategorie = function (searchCategories) {
        this.router.navigate(['searchItems'], { queryParams: { categories: searchCategories.name } });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_search_categories_service__["a" /* SearchCategoriesService */]])
    ], SearchComponent);
    return SearchComponent;
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

/***/ "./src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
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

var CategoriesService = (function () {
    function CategoriesService() {
        this.categories = [
            { name: 'Électroniques', nextStep: 2, reuse: true, image: 'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Pneus', nextStep: 2, reuse: false, image: 'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Huile et peinture', nextStep: 2, reuse: false, image: 'https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Électroménagers', nextStep: 2, reuse: true, image: 'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Métal', nextStep: 2, reuse: false, image: 'https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Bois', nextStep: 2, reuse: false, image: 'https://images.pexels.com/photos/128639/pexels-photo-128639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Ordures ménagères', nextStep: 4, reuse: false, image: 'https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Matières recyclables', nextStep: 4, reuse: false, image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Compostes', nextStep: 4, reuse: false, image: 'https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.15752-9/31967941_1770921046261337_3898621361668489216_n.png?_nc_cat=0&_nc_eui2=v1%3AAeHZhSdT6v0e8wFKsJhSnQWI_6ep6pyCCkd-uctOWKSYstN-Aqcc52ucgZGP4nPJ5pi1UbAPVWocdxEABvg5ZPtqCjuXQ_Uxo1LSZsyJiBZRhA&oh=c5a02d42cb10e1b47030d4c30963523a&oe=5B5B9213', description: '' },
            { name: 'Déchets encombrants', nextStep: 3, reuse: false, image: 'https://images.pexels.com/photos/279652/pexels-photo-279652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Vêtements', nextStep: 5, reuse: true, image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description: '' },
            { name: 'Meubles', nextStep: 5, reuse: true, image: 'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description: '' },
            { name: 'Jouets', nextStep: 5, reuse: true, image: 'https://images.pexels.com/photos/681118/pexels-photo-681118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Articles de sport', nextStep: 5, reuse: true, image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description: '' }
        ];
    }
    CategoriesService.prototype.getCategories = function () {
        return this.categories;
    };
    CategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoriesService);
    return CategoriesService;
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
            _this.http.get("/nearestCenter?address=" + address, { headers: contentHeaders })
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                reject(error.json().error || 'Server error');
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
            }).subscribe(function (link) {
                resolve(link);
            });
        });
    };
    CentersService.prototype.getDayTrash = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            _this.http.get("/trashDay?address=" + address, { headers: contentHeaders })
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
            _this.http.get("/items?categories=" + categorie, { headers: contentHeaders })
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
        this.usersService.getUserByEmail(this.authService.currentUser().email).then(function (res) {
            console.log(res);
            body['coord'] = res['users'][0].coord;
            body['address'] = res['users'][0].address;
            body['email'] = _this.authService.currentUser().email;
            body['phoneNumber'] = res['users'][0].phoneNumber;
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

/***/ "./src/app/services/pickup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupService; });
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





var PickupService = (function () {
    function PickupService(http, authService, usersService) {
        this.http = http;
        this.authService = authService;
        this.usersService = usersService;
    }
    PickupService.prototype.postPickup = function (body) {
        var _this = this;
        this.usersService.getUserByEmail(this.authService.currentUser().email).then(function (res) {
            console.log(res);
            body['coord'] = res['users'][0].coord;
            body['address'] = res['users'][0].address;
            body['email'] = _this.authService.currentUser().email;
            var contentHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            return new Promise(function (resolve, reject) {
                _this.http.post("/pickup", JSON.stringify(body), { headers: contentHeaders })
                    .map(function (res) { return res; })
                    .catch(function (error) {
                    reject(error.json().error || 'Server error');
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
                })
                    .subscribe(function (item) {
                    resolve(item);
                });
            });
        });
    };
    PickupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__users_service__["a" /* UsersService */]])
    ], PickupService);
    return PickupService;
}());



/***/ }),

/***/ "./src/app/services/search-categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCategoriesService; });
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

var SearchCategoriesService = (function () {
    function SearchCategoriesService() {
        this.searchCategories = [
            { name: 'Électroménagers', reuse: true, image: 'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Vêtements', reuse: true, image: 'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description: '' },
            { name: 'Meubles', reuse: true, image: 'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description: '' },
            { name: 'Jouets', reuse: true, image: 'https://images.pexels.com/photos/681118/pexels-photo-681118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' },
            { name: 'Articles de sport', reuse: true, image: 'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description: '' },
            { name: 'Électroniques', reuse: true, image: 'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: '' }
        ];
    }
    SearchCategoriesService.prototype.getSearchCategories = function () {
        return this.searchCategories;
    };
    SearchCategoriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SearchCategoriesService);
    return SearchCategoriesService;
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