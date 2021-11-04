(self["webpackChunkcezar"] = self["webpackChunkcezar"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _main_code_cezar_lab_1_algorizm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/code-cezar-lab-1/algorizm.component */ 1134);
/* harmony import */ var _main_decode_cezar_lab_3_decode_cezar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/decode-cezar-lab-3/decode-cezar.component */ 2895);
/* harmony import */ var _main_feistel_network_lab_5_feistel_network_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/feistel-network-lab-5/feistel-network.component */ 6167);
/* harmony import */ var _main_hill_code_lab_6_7_hill_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/hill-code-lab-6-7/hill-code.component */ 1427);
/* harmony import */ var _main_rotation_lab_2_rotation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/rotation-lab-2/rotation.component */ 9357);
/* harmony import */ var _main_stenography_lab_4_stenography_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/stenography-lab-4/stenography.component */ 9799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cezar' },
    // { path: '**', component: AlgorizmComponent },
    { path: 'cezar', component: _main_code_cezar_lab_1_algorizm_component__WEBPACK_IMPORTED_MODULE_0__.AlgorizmComponent },
    { path: 'rotation', component: _main_rotation_lab_2_rotation_component__WEBPACK_IMPORTED_MODULE_4__.RotationComponent },
    { path: 'decodeCezar', component: _main_decode_cezar_lab_3_decode_cezar_component__WEBPACK_IMPORTED_MODULE_1__.DecodeCezarComponent },
    { path: 'stenography', component: _main_stenography_lab_4_stenography_component__WEBPACK_IMPORTED_MODULE_5__.StenographyComponent },
    { path: 'feistel-network', component: _main_feistel_network_lab_5_feistel_network_component__WEBPACK_IMPORTED_MODULE_2__.FeistelNetworkComponent },
    { path: 'hill-code', component: _main_hill_code_lab_6_7_hill_code_component__WEBPACK_IMPORTED_MODULE_3__.HillCodeComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/menu/menu.component */ 9772);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'ZICS';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content"], [1, "content-menu"], [1, "content-algorizm"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_component_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s ease-in-out;\n}\n.content-menu[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n@media screen and (max-width: 900px) {\n  .content-menu[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.content-algorizm[_ngcontent-%COMP%] {\n  width: calc(100% - 300px);\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n@media screen and (max-width: 900px) {\n  .content-algorizm[_ngcontent-%COMP%] {\n    width: calc(100% - 200px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDSTtFQUxGO0lBTUksWUFBQTtFQUVKO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDSTtFQUxGO0lBTUkseUJBQUE7RUFFSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgJi1tZW51IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtYWxnb3Jpem0ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_code_cezar_lab_1_algorizm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/code-cezar-lab-1/algorizm.component */ 1134);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/menu/menu.component */ 9772);
/* harmony import */ var _main_rotation_lab_2_rotation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/rotation-lab-2/rotation.component */ 9357);
/* harmony import */ var _main_decode_cezar_lab_3_decode_cezar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/decode-cezar-lab-3/decode-cezar.component */ 2895);
/* harmony import */ var _main_stenography_lab_4_stenography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/stenography-lab-4/stenography.component */ 9799);
/* harmony import */ var _main_feistel_network_lab_5_feistel_network_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/feistel-network-lab-5/feistel-network.component */ 6167);
/* harmony import */ var _main_hill_code_lab_6_7_hill_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/hill-code-lab-6-7/hill-code.component */ 1427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _main_code_cezar_lab_1_algorizm_component__WEBPACK_IMPORTED_MODULE_2__.AlgorizmComponent,
        _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
        _main_rotation_lab_2_rotation_component__WEBPACK_IMPORTED_MODULE_4__.RotationComponent,
        _main_decode_cezar_lab_3_decode_cezar_component__WEBPACK_IMPORTED_MODULE_5__.DecodeCezarComponent,
        _main_stenography_lab_4_stenography_component__WEBPACK_IMPORTED_MODULE_6__.StenographyComponent,
        _main_feistel_network_lab_5_feistel_network_component__WEBPACK_IMPORTED_MODULE_7__.FeistelNetworkComponent,
        _main_hill_code_lab_6_7_hill_code_component__WEBPACK_IMPORTED_MODULE_8__.HillCodeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 9772:
/*!**************************************************!*\
  !*** ./src/app/component/menu/menu.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


const _c0 = function () { return ["cezar"]; };
const _c1 = function () { return ["rotation"]; };
const _c2 = function () { return ["decodeCezar"]; };
const _c3 = function () { return ["stenography"]; };
const _c4 = function () { return ["feistel-network"]; };
const _c5 = function () { return ["hill-code"]; };
class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 34, vars: 24, consts: [[1, "menu"], [1, "menu-items", "w-100"], [1, "general-title"], ["routerLinkActive", "select-item", 1, "menu-items__box", "w-100", 3, "routerLink"], ["routerLinkActive", "select-contain", 1, "menu-items__box--contain", 3, "routerLink"], ["routerLinkActive", "active"], [1, "title"], ["routerLinkActive", "select-item", 1, "menu-items__box", "w-100", "flex", "nowrap", "jcc", "aic", 3, "routerLink"], ["routerLinkActive", "select-contain", 1, "menu-items__box--contain", "w-100", "flex", "nowrap", "aic", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Laboratory work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Encode Cezar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Decode Cezar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stenography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Feistel network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hill Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-color: #292F3D;\n  color: white;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  background-color: #464e62;\n}\n\n.menu-items[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  min-height: 10vh;\n  width: 100%;\n}\n\n.menu-items[_ngcontent-%COMP%]   .general-title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  line-height: 60px;\n  font-size: 30px;\n  font-weight: 900;\n  height: 70px;\n  border-bottom: 1px solid white;\n}\n\n.menu-items__box[_ngcontent-%COMP%] {\n  height: 70px;\n  display: flex;\n  flex-flow: nowrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.menu-items__box--contain[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  height: 68px;\n  cursor: pointer;\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-flow: nowrap;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.menu-items__box--contain[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 24px);\n  left: -1px;\n  width: 8px;\n  height: 48px;\n  background-color: #0CACF8;\n}\n\n.menu-items__box--contain[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUZSOztBQUtNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSFIiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJGM0Q7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuXHJcbi5zZWxlY3QtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NGU2MjtcclxufVxyXG5cclxuXHJcbi5tZW51LWl0ZW1zIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuZ2VuZXJhbC10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX2JveCB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmLS1jb250YWluIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBub3dyYXA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI0cHgpO1xyXG4gICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBDQUNGODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1134:
/*!*************************************************************!*\
  !*** ./src/app/main/code-cezar-lab-1/algorizm.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlgorizmComponent": () => (/* binding */ AlgorizmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class AlgorizmComponent {
    constructor() {
        // alphabetUpper: Array<string> = [
        //   ' ',
        //   'А', 'Б', 'В',
        //   'Г', 'Ґ', 'Д',
        //   'Е', 'Є', 'Ж',
        //   'З', 'И', 'І',
        //   'Ї', 'Й', 'К',
        //   'Л', 'М', 'Н',
        //   'О', 'П', 'Р',
        //   'С', 'Т', 'У',
        //   'Ф', 'Х', 'Ц',
        //   'Ч', 'Ш', 'Щ',
        //   'Ь', 'Ю', 'Я'
        // ]
        this.alphabetLover = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];
        this.abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.variantValue = 13;
    }
    ngOnInit() {
    }
    codeAlgorizm() {
        if (this.textValue && this.textValue.toLowerCase().split("").some(res => (this.alphabetLover.includes(res))) && this.textValue.split("").some(res => !this.isCharacterALetter(res))) {
            this.coding_result = this.textValue.toLowerCase().split("").map(res => this.alphabetLover.includes(res) ? this.alphabetLover[(this.alphabetLover.indexOf(res) + (+this.variantValue)) % this.alphabetLover.length] : res).join("");
        }
        else if (!this.textValue) {
            alert('Please write text into textarea');
        }
        else if (this.textValue.split("").some(res => this.abc.includes(res.toLowerCase()))) {
            this.coding_result = this.textValue.split("").map(res => this.abc.includes(res) ? this.abc[(this.abc.indexOf(res) + (+this.variantValue || 13)) % this.abc.length] : res).join("");
        }
        else
            alert('Please write correct text into textarea');
    }
    decodeAlgorizm() {
        if (this.coding_result && this.coding_result.toLowerCase().split("").some(res => (this.alphabetLover.includes(res))) && this.textValue.split("").some(res => !this.isCharacterALetter(res))) {
            let code = this.coding_result;
            this.coding_result = this.coding_result.toLowerCase().split("").map(res => {
                if (this.alphabetLover.includes(res)) {
                    let shift = (this.alphabetLover.indexOf(res) - (+this.variantValue));
                    if (shift < 0)
                        shift = shift + this.alphabetLover.length;
                    return this.alphabetLover[shift];
                }
                else {
                    return res;
                }
            }).join("");
            this.coding_result += `\n${code}`;
        }
        else if (!this.textValue) {
            alert('Please write text into textarea');
        }
        else if (this.textValue.split("").some(res => this.abc.includes(res.toLowerCase()))) {
            let code = this.coding_result;
            this.coding_result = this.coding_result.toLowerCase().split("").map(res => {
                if (this.alphabetLover.includes(res)) {
                    let shift = (this.abc.indexOf(res) - (+this.variantValue));
                    if (shift < 0)
                        shift = shift + this.abc.length;
                    return this.abc[shift];
                }
                else {
                    return res;
                }
            }).join("");
            this.coding_result += `\n\n\n\n\n\n\n\n${code}`;
        }
        else
            alert('Please write correct text into textarea');
    }
    isCharacterALetter(char) {
        return (/[a-zA-Z]/gm).test(char) && char == ' ';
    }
}
AlgorizmComponent.ɵfac = function AlgorizmComponent_Factory(t) { return new (t || AlgorizmComponent)(); };
AlgorizmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlgorizmComponent, selectors: [["app-algorizm"]], decls: 13, vars: 3, consts: [[1, "container"], [1, "title"], [1, "textBlock-content"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your message here...", 3, "ngModel", "ngModelChange"], [1, "result"], ["type", "text", 1, "variant", 3, "ngModel", "ngModelChange"], [1, "algorizm-button"], [1, "code_algorizm_button", 3, "click"], [1, "decode_algorizm_button", 3, "click"]], template: function AlgorizmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cezar algotizm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlgorizmComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.textValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlgorizmComponent_Template_input_ngModelChange_7_listener($event) { return ctx.variantValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorizmComponent_Template_button_click_9_listener() { return ctx.codeAlgorizm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlgorizmComponent_Template_button_click_11_listener() { return ctx.decodeAlgorizm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Decode result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.coding_result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.variantValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".container[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  font-weight: 900;\n  font-size: 38px;\n}\n\n.textBlock-content[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid black;\n  resize: none;\n  box-shadow: 4px 6px 7px 0px gray;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  border: 2px solid black;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 4px 6px 7px 0px gray;\n  white-space: pre-line;\n  word-break: break-all;\n}\n\n.variant[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  padding: 5px;\n  color: black;\n}\n\n.algorizm-button[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.code_algorizm_button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  background-color: orange;\n  color: white;\n}\n\n.decode_algorizm_button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  background-color: blue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZ29yaXptLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoiYWxnb3Jpem0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTclO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuLnRleHRCbG9jay1jb250ZW50IHtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNnB4IDdweCAwcHggZ3JheTtcclxuXHJcbiAgfVxyXG5cclxuICAucmVzdWx0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDZweCA3cHggMHB4IGdyYXk7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnZhcmlhbnQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2MSwgMTQ2LCAxMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hbGdvcml6bS1idXR0b24ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5jb2RlX2FsZ29yaXptX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAxNDYsIDEzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVjb2RlX2FsZ29yaXptX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAxNDYsIDEzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2895:
/*!*******************************************************************!*\
  !*** ./src/app/main/decode-cezar-lab-3/decode-cezar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecodeCezarComponent": () => (/* binding */ DecodeCezarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class DecodeCezarComponent {
    constructor() {
        this.alphabetEng = "abcdefghijklmnopqrstuvwxyz";
        this.alphabetUkr = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
    }
    ngOnInit() {
    }
    decodeAlgorizm() {
        let text = this.textValue.toLowerCase();
        let maxRepeat = 0, maxRepeatValue = 0;
        let sum = '', sumbol = '';
        for (let j = 0; j < text.length; j++) {
            sumbol = text[j];
            for (let i = 0; i < text.length; i++) {
                if (this.isCharacterALetter(text[i]) && text[i] == sumbol)
                    maxRepeatValue += 1;
            }
            if (maxRepeatValue > maxRepeat) {
                maxRepeat = maxRepeatValue;
                sum = text[j];
            }
            maxRepeatValue = 0;
        }
        let s1 = 4, s2 = 0;
        if (this.alphabetEng.includes(sum)) {
            for (let i = 0; i < this.alphabetEng.length; i++) {
                if (this.alphabetEng[i] == sum)
                    s2 = i;
            }
            let shift = (s1 - s2) % 26;
            if (shift < 0)
                shift = shift * (-1);
            let decodeLetterPos;
            let code = "";
            for (let i = 0; i < text.length; i++) {
                if (!this.isCharacterALetter(text[i])) {
                    code += text[i];
                    continue;
                }
                let pos;
                let letter = text[i];
                pos = this.alphabetEng.indexOf(letter);
                decodeLetterPos = pos - shift;
                if (decodeLetterPos < 0)
                    decodeLetterPos = decodeLetterPos + this.alphabetEng.length;
                code += this.alphabetEng[decodeLetterPos];
            }
            this.coding_result = code;
            code = "";
        }
        else {
            for (let i = 0; i < this.alphabetUkr.length; i++) {
                if (this.alphabetUkr[i] == sum)
                    s2 = i;
            }
            console.log(this.alphabetUkr.split("").length);
            let shift = (s1 - s2) % this.alphabetUkr.split("").length;
            if (shift < 0)
                shift = shift * (-1);
            let decodeLetterPos;
            let code = "";
            for (let i = 0; i < text.length; i++) {
                if (!this.isCharacterALetter(text[i])) {
                    code += text[i];
                    continue;
                }
                let pos;
                let letter = text[i];
                pos = this.alphabetUkr.indexOf(letter);
                decodeLetterPos = pos - shift;
                if (decodeLetterPos < 0)
                    decodeLetterPos = decodeLetterPos + this.alphabetUkr.length;
                code += this.alphabetUkr[decodeLetterPos];
            }
            this.coding_result = code;
            code = "";
        }
    }
    isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char) || this.alphabetUkr.includes(char);
    }
}
DecodeCezarComponent.ɵfac = function DecodeCezarComponent_Factory(t) { return new (t || DecodeCezarComponent)(); };
DecodeCezarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DecodeCezarComponent, selectors: [["app-decode-cezar"]], decls: 9, vars: 2, consts: [[1, "container"], [1, "title"], [1, "textBlock-content"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your message here...", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "code_algorizm_button", 3, "click"]], template: function DecodeCezarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Decode Cezar algotizm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DecodeCezarComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.textValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DecodeCezarComponent_Template_button_click_7_listener() { return ctx.decodeAlgorizm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.coding_result);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".container[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  font-weight: 900;\n  font-size: 38px;\n}\n\n.textBlock-content[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid black;\n  resize: none;\n  box-shadow: 4px 6px 7px 0px gray;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  border: 2px solid black;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 4px 6px 7px 0px gray;\n  white-space: pre-line;\n  word-break: break-all;\n}\n\n.variant[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  padding: 5px;\n  color: black;\n}\n\n.code_algorizm_button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  background-color: orange;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29kZS1jZXphci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFIRiIsImZpbGUiOiJkZWNvZGUtY2V6YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTclO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuLnRleHRCbG9jay1jb250ZW50IHtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNnB4IDdweCAwcHggZ3JheTtcclxuXHJcbiAgfVxyXG5cclxuICAucmVzdWx0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDZweCA3cHggMHB4IGdyYXk7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnZhcmlhbnQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2MSwgMTQ2LCAxMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2RlX2FsZ29yaXptX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAxNDYsIDEzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6167:
/*!*************************************************************************!*\
  !*** ./src/app/main/feistel-network-lab-5/feistel-network.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeistelNetworkComponent": () => (/* binding */ FeistelNetworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class FeistelNetworkComponent {
    constructor() {
        this.sizeOfBlock = 128; //в DES розмір блока 64 біт, але оскільки в unicode символ в два раза довший, то збільшимо блок також в два раза
        this.sizeOfChar = 16; //розмір одного символа (in Unicode 16 bit)
        this.shiftKey = 2; //зсув ключа 
        this.quantityOfRounds = 16; //кількість раундів
        this.Blocks = [];
        this.EncodeKeyWord = '0ljh';
        this.DecodeKeyWord = '';
    }
    ngOnInit() {
    }
    StringToRightLength(input) {
        while (((input.length * this.sizeOfChar) % this.sizeOfBlock) != 0) {
            input += "#";
        }
        return input;
    }
    CutStringIntoBlocks(input) {
        this.Blocks = new Array((input.length * this.sizeOfChar) / this.sizeOfBlock); //new string[] ==> new Array(length)
        let lengthOfBlock = input.length / this.Blocks.length;
        for (let i = 0; i < this.Blocks.length; i++) {
            this.Blocks[i] = input.substr(i * lengthOfBlock, lengthOfBlock);
            this.Blocks[i] = this.StringToBinaryFormat(this.Blocks[i]);
        }
    }
    CutBinaryStringIntoBlocks(input) {
        this.Blocks = new Array(input.length / this.sizeOfBlock);
        let lengthOfBlock = input.length / this.Blocks.length;
        for (let i = 0; i < this.Blocks.length; i++) {
            this.Blocks[i] = input.substr(i * lengthOfBlock, lengthOfBlock);
        }
    }
    StringToBinaryFormat(input) {
        let output = "";
        for (let i = 0; i < input.length; i++) {
            let char_binary = input[i].charCodeAt(0).toString(2); // Convert.ToStrin ==> charCodeAt(0).toString(2)
            while (char_binary.length < this.sizeOfChar) {
                char_binary = "0" + char_binary;
            }
            output += char_binary;
        }
        return output;
    }
    CorrectKeyWord(input, lengthKey) {
        if (input.length > lengthKey) {
            input = input.substr(0, lengthKey);
        }
        else {
            while (input.length < lengthKey) {
                input = "0" + input;
            }
        }
        return input;
    }
    EncodeDES_One_Round(input, key) {
        let L = input.substr(0, input.length / 2);
        let R = input.substr(input.length / 2, input.length / 2);
        return (R + this.XOR(L, this.f(R, key)));
    }
    XOR(s1, s2) {
        let result = "";
        for (let i = 0; i < s1.length; i++) {
            let a = Boolean(parseInt(s1[i].toString(), 32));
            let b = Boolean(parseInt(s2[i].toString(), 32));
            if ((a && !b) || (!a && b))
                result += "1";
            else
                result += "0";
        }
        return result;
    }
    f(s1, s2) {
        return this.XOR(s1, s2);
    }
    KeyToNextRound(key) {
        for (let i = 0; i < this.shiftKey; i++) {
            key = key[key.length - 1] + key;
            key = this.remove(key, key.length - 1);
        }
        return key;
    }
    KeyToPrevRound(key) {
        for (let i = 0; i < this.shiftKey; i++) {
            key = key + key[0];
            key = this.remove(key, 0, 1);
        }
        return key;
    }
    StringFromBinaryToNormalFormat(input) {
        let output = "";
        while (input.length > 0) {
            let char_binary = input.substr(0, this.sizeOfChar);
            input = this.remove(input, 0, this.sizeOfChar);
            let a = 0;
            let degree = char_binary.length - 1;
            char_binary.split('').forEach(c => {
                a += parseInt(c.toString(), 32) * +Math.pow(2, degree--);
            });
            output += String.fromCharCode(a);
        }
        return output;
    }
    DecodeDES_One_Round(input, key) {
        let L = input.substr(0, input.length / 2);
        let R = input.substr(input.length / 2, input.length / 2);
        return (this.XOR(this.f(L, key), R) + L);
    }
    encode(input) {
        if (this.EncodeKeyWord.length > 0) {
            let s = "";
            let key = this.EncodeKeyWord;
            let sr = input.split('\n');
            let i = 0;
            while (!(sr.length == i)) {
                s += sr[i];
                i++;
            }
            s = this.StringToRightLength(s);
            this.CutStringIntoBlocks(s);
            key = this.CorrectKeyWord(key, s.length / (2 * this.Blocks.length));
            key = this.StringToBinaryFormat(key);
            for (let j = 0; j < this.quantityOfRounds; j++) {
                for (let i = 0; i < this.Blocks.length; i++) {
                    this.Blocks[i] = this.EncodeDES_One_Round(this.Blocks[i], key);
                }
                key = this.KeyToNextRound(key);
            }
            key = this.KeyToPrevRound(key);
            this.DecodeKeyWord = this.StringFromBinaryToNormalFormat(key);
            let result = "";
            for (let i = 0; i < this.Blocks.length; i++) {
                result += this.Blocks[i];
            }
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.StringFromBinaryToNormalFormat(result)));
            element.setAttribute('download', 'outputEncode.txt');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
        else {
            alert("Введіть ключ!");
        }
    }
    decode(input) {
        if (this.DecodeKeyWord.length > 0) {
            let s = "";
            let key = this.StringToBinaryFormat(this.DecodeKeyWord);
            let sr = input.split('\n');
            let i = 0;
            while (!(sr.length == i)) {
                s += sr[i];
                i++;
            }
            s = this.StringToBinaryFormat(s);
            this.CutBinaryStringIntoBlocks(s);
            for (let j = 0; j < this.quantityOfRounds; j++) {
                for (let i = 0; i < this.Blocks.length; i++)
                    this.Blocks[i] = this.DecodeDES_One_Round(this.Blocks[i], key);
                key = this.KeyToPrevRound(key);
            }
            key = this.KeyToNextRound(key);
            this.EncodeKeyWord = this.StringFromBinaryToNormalFormat(key);
            // this.DecodeKeyWord = this.StringFromBinaryToNormalFormat(key);
            let result = "";
            for (let i = 0; i < this.Blocks.length; i++) {
                result += this.Blocks[i];
            }
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.StringFromBinaryToNormalFormat(result)));
            element.setAttribute('download', 'outputDecode.txt');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
        else {
            alert("Введіть ключ!");
        }
    }
    readFileForEncode(input) {
        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            if (reader.result) {
                this.encode(reader.result);
            }
            ;
            reader.onerror = function () {
                alert(reader.error);
            };
        };
    }
    readFileForDecode(input) {
        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            if (reader.result) {
                this.decode(reader.result);
            }
            ;
            reader.onerror = function () {
                alert(reader.error);
            };
        };
    }
    remove(string, indexStart, indexEnd) {
        let s;
        if (indexEnd) {
            if (indexEnd == indexStart) {
                s = string.slice(indexStart);
                s = string.replace(s, '');
            }
            else {
                s = string.slice(indexStart, indexEnd);
                s = string.replace(s, '');
            }
        }
        else {
            s = string.slice(indexStart);
            s = string.split('').splice(0, indexStart).join('');
        }
        return s;
    }
}
FeistelNetworkComponent.ɵfac = function FeistelNetworkComponent_Factory(t) { return new (t || FeistelNetworkComponent)(); };
FeistelNetworkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeistelNetworkComponent, selectors: [["app-feistel-network"]], decls: 17, vars: 2, consts: [[1, "container"], [1, "title"], [1, "textBlock-content"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your code here...", 3, "ngModel", "ngModelChange"], [1, "algorizm-button"], [1, "input__upload"], [1, "upload-btn-wrapper"], [1, "btn"], ["type", "file", "id", "", 3, "change"]], template: function FeistelNetworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Feistel network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeistelNetworkComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.EncodeKeyWord = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeistelNetworkComponent_Template_textarea_ngModelChange_5_listener($event) { return ctx.DecodeKeyWord = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload file for encode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeistelNetworkComponent_Template_input_change_11_listener($event) { return ctx.readFileForEncode($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload file for decode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeistelNetworkComponent_Template_input_change_16_listener($event) { return ctx.readFileForDecode($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EncodeKeyWord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.DecodeKeyWord);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".input[_ngcontent-%COMP%] {\n  width: 20%;\n  min-height: 10vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.input__button[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  border-radius: 10px;\n  background: #198754;\n  border: 2px solid #198754;\n  color: white;\n  text-align: center;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n.input__button[_ngcontent-%COMP%]:focus {\n  border-color: #198754;\n  outline: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 0 0.25rem rgba(13, 253, 109, 0.25);\n}\n.input__button[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #198754;\n}\n.input__upload[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 17%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n.input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n.input__upload[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #fe8c00;\n  color: white;\n  background: #fe8c00;\n  \n  \n  background: linear-gradient(to right, #f83600, #fe8c00);\n  \n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n.input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 20px;\n}\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  font-weight: 900;\n  font-size: 38px;\n}\n.textBlock-content[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  font-size: 16px;\n  font-weight: 500;\n}\n.textBlock-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid black;\n  resize: none;\n  box-shadow: 4px 6px 7px 0px gray;\n}\n.textBlock-content[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  border: 2px solid black;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 4px 6px 7px 0px gray;\n  white-space: pre-line;\n  word-break: break-all;\n}\n.algorizm-button[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlaXN0ZWwtbmV0d29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFGTjtBQUtJO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EscUVBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEVBQUE7QUFKTjtBQVVJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUk47QUFjQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFYRjtBQWNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWEY7QUFjQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhGO0FBYUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBWEo7QUFlRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFiSjtBQWtCQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFmRiIsImZpbGUiOiJmZWlzdGVsLW5ldHdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk4NzU0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE5ODc1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyLCBjb2xvciAuMjUwcyBsaW5lYXIsIGJvcmRlciAuMjUwcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b246Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTk4NzU0O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDI1MywgMTA5LCAwLjI1KTtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMTk4NzU0O1xyXG4gIH1cclxuXHJcbiAgJl9fdXBsb2FkIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZThjMDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlOGMwMDtcclxuICAgICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyLCBjb2xvciAuMjUwcyBsaW5lYXIsIGJvcmRlciAuMjUwcyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi50ZXh0QmxvY2stY29udGVudCB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDZweCA3cHggMHB4IGdyYXk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnJlc3VsdCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA2cHggN3B4IDBweCBncmF5O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5hbGdvcml6bS1idXR0b24ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1427:
/*!***************************************************************!*\
  !*** ./src/app/main/hill-code-lab-6-7/hill-code.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HillCodeComponent": () => (/* binding */ HillCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class HillCodeComponent {
    constructor() {
        this.textBox1 = '';
        this.textBox2 = '';
        this.textBox3 = '';
        this.textBox4 = '';
        this.textBox5 = '';
        this.textBox6 = '';
        this.textBox7 = '';
        this.textBox8 = '';
        this.textBox9 = '';
    }
    ngOnInit() {
    }
    readFileForEncode(input) {
        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            if (reader.result) {
                this.button1_Click(reader.result);
            }
            ;
            reader.onerror = function () {
                alert(reader.error);
            };
        };
    }
    button1_Click(input) {
        let ks = [
            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];
        let ki = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a')
                    ki[i][j] = 0;
                if (ks[i][j] == 'b')
                    ki[i][j] = 1;
                if (ks[i][j] == 'c')
                    ki[i][j] = 2;
                if (ks[i][j] == 'd')
                    ki[i][j] = 3;
                if (ks[i][j] == 'e')
                    ki[i][j] = 4;
                if (ks[i][j] == 'f')
                    ki[i][j] = 5;
                if (ks[i][j] == 'g')
                    ki[i][j] = 6;
                if (ks[i][j] == 'h')
                    ki[i][j] = 7;
                if (ks[i][j] == 'i')
                    ki[i][j] = 8;
                if (ks[i][j] == 'j')
                    ki[i][j] = 9;
                if (ks[i][j] == 'k')
                    ki[i][j] = 10;
                if (ks[i][j] == 'l')
                    ki[i][j] = 11;
                if (ks[i][j] == 'm')
                    ki[i][j] = 12;
                if (ks[i][j] == 'n')
                    ki[i][j] = 13;
                if (ks[i][j] == 'o')
                    ki[i][j] = 14;
                if (ks[i][j] == 'p')
                    ki[i][j] = 15;
                if (ks[i][j] == 'q')
                    ki[i][j] = 16;
                if (ks[i][j] == 'r')
                    ki[i][j] = 17;
                if (ks[i][j] == 's')
                    ki[i][j] = 18;
                if (ks[i][j] == 't')
                    ki[i][j] = 19;
                if (ks[i][j] == 'u')
                    ki[i][j] = 20;
                if (ks[i][j] == 'v')
                    ki[i][j] = 21;
                if (ks[i][j] == 'w')
                    ki[i][j] = 22;
                if (ks[i][j] == 'x')
                    ki[i][j] = 23;
                if (ks[i][j] == 'y')
                    ki[i][j] = 24;
                if (ks[i][j] == 'z')
                    ki[i][j] = 25;
            }
        }
        let inp = [];
        let sr = input.split('');
        let i = 0;
        while (!(sr.length == i)) {
            // console.log(sr[i]);
            inp.push(sr[i]);
            i++;
        }
        let h_m = 0;
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i]))
                h_m++;
        }
        let kalk_a = 0, kalk_b = 0, kalk_c = 0, kalk_d = 0, kalk_e = 0, kalk_f = 0, kalk_g = 0, kalk_h = 0, kalk_i = 0, kalk_j = 0, kalk_k = 0, kalk_l = 0, kalk_m = 0, kalk_n = 0, kalk_o = 0, kalk_p = 0;
        let kalk_q = 0, kalk_r = 0, kalk_s = 0, kalk_t = 0, kalk_u = 0, kalk_v = 0, kalk_w = 0, kalk_x = 0, kalk_y = 0, kalk_z = 0;
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i])) {
                if (inp[i] == 'a')
                    kalk_a++;
                if (inp[i] == 'b')
                    kalk_b++;
                if (inp[i] == 'c')
                    kalk_c++;
                if (inp[i] == 'd')
                    kalk_d++;
                if (inp[i] == 'e')
                    kalk_e++;
                if (inp[i] == 'f')
                    kalk_f++;
                if (inp[i] == 'g')
                    kalk_g++;
                if (inp[i] == 'h')
                    kalk_h++;
                if (inp[i] == 'i')
                    kalk_i++;
                if (inp[i] == 'j')
                    kalk_j++;
                if (inp[i] == 'k')
                    kalk_k++;
                if (inp[i] == 'l')
                    kalk_l++;
                if (inp[i] == 'm')
                    kalk_m++;
                if (inp[i] == 'n')
                    kalk_n++;
                if (inp[i] == 'o')
                    kalk_o++;
                if (inp[i] == 'p')
                    kalk_p++;
                if (inp[i] == 'q')
                    kalk_q++;
                if (inp[i] == 'r')
                    kalk_r++;
                if (inp[i] == 's')
                    kalk_s++;
                if (inp[i] == 't')
                    kalk_t++;
                if (inp[i] == 'u')
                    kalk_u++;
                if (inp[i] == 'v')
                    kalk_v++;
                if (inp[i] == 'w')
                    kalk_w++;
                if (inp[i] == 'x')
                    kalk_x++;
                if (inp[i] == 'y')
                    kalk_y++;
                if (inp[i] == 'z')
                    kalk_z++;
            }
        }
        let p = 0;
        let vek = [...Array(h_m)].map(e => Array(3));
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i])) {
                vek[p][0] = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
                vek[p][1] = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
                if (inp[i] == 'a')
                    vek[p][2] = 0;
                if (inp[i] == 'b')
                    vek[p][2] = 1;
                if (inp[i] == 'c')
                    vek[p][2] = 2;
                if (inp[i] == 'd')
                    vek[p][2] = 3;
                if (inp[i] == 'e')
                    vek[p][2] = 4;
                if (inp[i] == 'f')
                    vek[p][2] = 5;
                if (inp[i] == 'g')
                    vek[p][2] = 6;
                if (inp[i] == 'h')
                    vek[p][2] = 7;
                if (inp[i] == 'i')
                    vek[p][2] = 8;
                if (inp[i] == 'j')
                    vek[p][2] = 9;
                if (inp[i] == 'k')
                    vek[p][2] = 10;
                if (inp[i] == 'l')
                    vek[p][2] = 11;
                if (inp[i] == 'm')
                    vek[p][2] = 12;
                if (inp[i] == 'n')
                    vek[p][2] = 13;
                if (inp[i] == 'o')
                    vek[p][2] = 14;
                if (inp[i] == 'p')
                    vek[p][2] = 15;
                if (inp[i] == 'q')
                    vek[p][2] = 16;
                if (inp[i] == 'r')
                    vek[p][2] = 17;
                if (inp[i] == 's')
                    vek[p][2] = 18;
                if (inp[i] == 't')
                    vek[p][2] = 19;
                if (inp[i] == 'u')
                    vek[p][2] = 20;
                if (inp[i] == 'v')
                    vek[p][2] = 21;
                if (inp[i] == 'w')
                    vek[p][2] = 22;
                if (inp[i] == 'x')
                    vek[p][2] = 23;
                if (inp[i] == 'y')
                    vek[p][2] = 24;
                if (inp[i] == 'z')
                    vek[p][2] = 25;
                p++;
            }
        }
        let res = [...Array(h_m)].map(e => Array(3));
        for (let i = 0; i < h_m; i++) {
            res[i][0] = (vek[i][0] * ki[0][0] + vek[i][1] * ki[1][0] + vek[i][2] * ki[2][0]) % 26;
            res[i][1] = (vek[i][0] * ki[0][1] + vek[i][1] * ki[1][1] + vek[i][2] * ki[2][1]) % 26;
            res[i][2] = (vek[i][0] * ki[0][2] + vek[i][1] * ki[1][2] + vek[i][2] * ki[2][2]) % 26;
        }
        let ress = '';
        for (let i = 0; i < h_m; i++) {
            for (let j = 0; j < 3; j++) {
                if (res[i][j] == 0)
                    ress += "a";
                if (res[i][j] == 1)
                    ress += "b";
                if (res[i][j] == 2)
                    ress += "c";
                if (res[i][j] == 3)
                    ress += "d";
                if (res[i][j] == 4)
                    ress += "e";
                if (res[i][j] == 5)
                    ress += "f";
                if (res[i][j] == 6)
                    ress += "g";
                if (res[i][j] == 7)
                    ress += "h";
                if (res[i][j] == 8)
                    ress += "i";
                if (res[i][j] == 9)
                    ress += "j";
                if (res[i][j] == 10)
                    ress += "k";
                if (res[i][j] == 11)
                    ress += "l";
                if (res[i][j] == 12)
                    ress += "m";
                if (res[i][j] == 13)
                    ress += "n";
                if (res[i][j] == 14)
                    ress += "o";
                if (res[i][j] == 15)
                    ress += "p";
                if (res[i][j] == 16)
                    ress += "q";
                if (res[i][j] == 17)
                    ress += "r";
                if (res[i][j] == 18)
                    ress += "s";
                if (res[i][j] == 19)
                    ress += "t";
                if (res[i][j] == 20)
                    ress += "u";
                if (res[i][j] == 21)
                    ress += "v";
                if (res[i][j] == 22)
                    ress += "w";
                if (res[i][j] == 23)
                    ress += "x";
                if (res[i][j] == 24)
                    ress += "y";
                if (res[i][j] == 25)
                    ress += "z";
            }
        }
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ress));
        element.setAttribute('download', 'outputEncode.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    button4_Click() {
        let ks = [
            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];
        let ki = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a')
                    ki[i][j] = 0;
                if (ks[i][j] == 'b')
                    ki[i][j] = 1;
                if (ks[i][j] == 'c')
                    ki[i][j] = 2;
                if (ks[i][j] == 'd')
                    ki[i][j] = 3;
                if (ks[i][j] == 'e')
                    ki[i][j] = 4;
                if (ks[i][j] == 'f')
                    ki[i][j] = 5;
                if (ks[i][j] == 'g')
                    ki[i][j] = 6;
                if (ks[i][j] == 'h')
                    ki[i][j] = 7;
                if (ks[i][j] == 'i')
                    ki[i][j] = 8;
                if (ks[i][j] == 'j')
                    ki[i][j] = 9;
                if (ks[i][j] == 'k')
                    ki[i][j] = 10;
                if (ks[i][j] == 'l')
                    ki[i][j] = 11;
                if (ks[i][j] == 'm')
                    ki[i][j] = 12;
                if (ks[i][j] == 'n')
                    ki[i][j] = 13;
                if (ks[i][j] == 'o')
                    ki[i][j] = 14;
                if (ks[i][j] == 'p')
                    ki[i][j] = 15;
                if (ks[i][j] == 'q')
                    ki[i][j] = 16;
                if (ks[i][j] == 'r')
                    ki[i][j] = 17;
                if (ks[i][j] == 's')
                    ki[i][j] = 18;
                if (ks[i][j] == 't')
                    ki[i][j] = 19;
                if (ks[i][j] == 'u')
                    ki[i][j] = 20;
                if (ks[i][j] == 'v')
                    ki[i][j] = 21;
                if (ks[i][j] == 'w')
                    ki[i][j] = 22;
                if (ks[i][j] == 'x')
                    ki[i][j] = 23;
                if (ks[i][j] == 'y')
                    ki[i][j] = 24;
                if (ks[i][j] == 'z')
                    ki[i][j] = 25;
            }
        }
        let kio = [...Array(3)].map(e => Array(3));
        let det = 0;
        det = (ki[0][0] * ki[1][1] * ki[2][2] + ki[0][1] * ki[1][2] * ki[2][0] + ki[0][2] * ki[1][0] * ki[2][1] - ki[0][2] * ki[1][1] * ki[2][0] - ki[0][1] * ki[1][0] * ki[2][2] - ki[0][0] * ki[1][2] * ki[2][1]) % 26;
        if (det < 0)
            det = det + 26;
        kio[0][0] = ki[1][1] * ki[2][2] - ki[1][2] * ki[2][1];
        kio[1][0] = -(ki[1][0] * ki[2][2] - ki[1][2] * ki[2][0]);
        kio[2][0] = ki[1][0] * ki[2][1] - ki[1][1] * ki[2][0];
        kio[0][1] = -(ki[0][1] * ki[2][2] - ki[0][2] * ki[2][1]);
        kio[1][1] = ki[0][0] * ki[2][2] - ki[0][2] * ki[2][0];
        kio[2][1] = -(ki[0][0] * ki[2][1] - ki[0][1] * ki[2][0]);
        kio[0][2] = ki[0][1] * ki[1][2] - ki[0][2] * ki[1][1];
        kio[1][2] = -(ki[0][0] * ki[1][2] - ki[0][2] * ki[1][0]);
        kio[2][2] = ki[0][0] * ki[1][1] - ki[0][1] * ki[1][0];
        let deto = 0;
        for (deto = 0; deto < 100; deto++) {
            if (((det * deto) % 26) == 1)
                break;
        }
        let res = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                kio[i][j] = kio[i][j] % 26;
                kio[i][j] = (kio[i][j] * deto) % 26;
                if (kio[i][j] < 0)
                    kio[i][j] = kio[i][j] + 26;
                if (kio[i][j] == 0)
                    res[i][j] = 'a';
                if (kio[i][j] == 1)
                    res[i][j] = 'b';
                if (kio[i][j] == 2)
                    res[i][j] = 'c';
                if (kio[i][j] == 3)
                    res[i][j] = 'd';
                if (kio[i][j] == 4)
                    res[i][j] = 'e';
                if (kio[i][j] == 5)
                    res[i][j] = 'f';
                if (kio[i][j] == 6)
                    res[i][j] = 'g';
                if (kio[i][j] == 7)
                    res[i][j] = 'h';
                if (kio[i][j] == 8)
                    res[i][j] = 'i';
                if (kio[i][j] == 9)
                    res[i][j] = 'j';
                if (kio[i][j] == 10)
                    res[i][j] = 'k';
                if (kio[i][j] == 11)
                    res[i][j] = 'l';
                if (kio[i][j] == 12)
                    res[i][j] = 'm';
                if (kio[i][j] == 13)
                    res[i][j] = 'n';
                if (kio[i][j] == 14)
                    res[i][j] = 'o';
                if (kio[i][j] == 15)
                    res[i][j] = 'p';
                if (kio[i][j] == 16)
                    res[i][j] = 'q';
                if (kio[i][j] == 17)
                    res[i][j] = 'r';
                if (kio[i][j] == 18)
                    res[i][j] = 's';
                if (kio[i][j] == 19)
                    res[i][j] = 't';
                if (kio[i][j] == 20)
                    res[i][j] = 'u';
                if (kio[i][j] == 21)
                    res[i][j] = 'v';
                if (kio[i][j] == 22)
                    res[i][j] = 'w';
                if (kio[i][j] == 23)
                    res[i][j] = 'x';
                if (kio[i][j] == 24)
                    res[i][j] = 'y';
                if (kio[i][j] == 25)
                    res[i][j] = 'z';
            }
        }
        this.textBox1 = "";
        this.textBox2 = "";
        this.textBox3 = "";
        this.textBox4 = "";
        this.textBox5 = "";
        this.textBox6 = "";
        this.textBox7 = "";
        this.textBox8 = "";
        this.textBox9 = "";
        this.textBox1 = res[0][0];
        this.textBox2 = res[0][1];
        this.textBox3 = res[0][2];
        this.textBox4 = res[1][0];
        this.textBox5 = res[1][1];
        this.textBox6 = res[1][2];
        this.textBox7 = res[2][0];
        this.textBox8 = res[2][1];
        this.textBox9 = res[2][2];
    }
    readFileForDecode(input) {
        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            if (reader.result) {
                this.button2_Click(reader.result);
            }
            ;
            reader.onerror = function () {
                alert(reader.error);
            };
        };
    }
    button2_Click(input) {
        let ks = [
            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];
        let ki = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a')
                    ki[i][j] = 0;
                if (ks[i][j] == 'b')
                    ki[i][j] = 1;
                if (ks[i][j] == 'c')
                    ki[i][j] = 2;
                if (ks[i][j] == 'd')
                    ki[i][j] = 3;
                if (ks[i][j] == 'e')
                    ki[i][j] = 4;
                if (ks[i][j] == 'f')
                    ki[i][j] = 5;
                if (ks[i][j] == 'g')
                    ki[i][j] = 6;
                if (ks[i][j] == 'h')
                    ki[i][j] = 7;
                if (ks[i][j] == 'i')
                    ki[i][j] = 8;
                if (ks[i][j] == 'j')
                    ki[i][j] = 9;
                if (ks[i][j] == 'k')
                    ki[i][j] = 10;
                if (ks[i][j] == 'l')
                    ki[i][j] = 11;
                if (ks[i][j] == 'm')
                    ki[i][j] = 12;
                if (ks[i][j] == 'n')
                    ki[i][j] = 13;
                if (ks[i][j] == 'o')
                    ki[i][j] = 14;
                if (ks[i][j] == 'p')
                    ki[i][j] = 15;
                if (ks[i][j] == 'q')
                    ki[i][j] = 16;
                if (ks[i][j] == 'r')
                    ki[i][j] = 17;
                if (ks[i][j] == 's')
                    ki[i][j] = 18;
                if (ks[i][j] == 't')
                    ki[i][j] = 19;
                if (ks[i][j] == 'u')
                    ki[i][j] = 20;
                if (ks[i][j] == 'v')
                    ki[i][j] = 21;
                if (ks[i][j] == 'w')
                    ki[i][j] = 22;
                if (ks[i][j] == 'x')
                    ki[i][j] = 23;
                if (ks[i][j] == 'y')
                    ki[i][j] = 24;
                if (ks[i][j] == 'z')
                    ki[i][j] = 25;
            }
        }
        let inp = [];
        let sr = input.split('');
        let i = 0;
        while (!(sr.length == i)) {
            inp.push(sr[i]);
            i++;
        }
        let h_m = 0;
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i]))
                h_m++;
        }
        let p = 0;
        let prom = [...Array(h_m / 3)].map(e => Array(3));
        for (let i = 0; i < h_m; i++) {
            if ((i % 3) == 0 && i != 0)
                p++;
            if (inp[i] == 'a')
                prom[p][i % 3] = 0;
            if (inp[i] == 'b')
                prom[p][i % 3] = 1;
            if (inp[i] == 'c')
                prom[p][i % 3] = 2;
            if (inp[i] == 'd')
                prom[p][i % 3] = 3;
            if (inp[i] == 'e')
                prom[p][i % 3] = 4;
            if (inp[i] == 'f')
                prom[p][i % 3] = 5;
            if (inp[i] == 'g')
                prom[p][i % 3] = 6;
            if (inp[i] == 'h')
                prom[p][i % 3] = 7;
            if (inp[i] == 'i')
                prom[p][i % 3] = 8;
            if (inp[i] == 'j')
                prom[p][i % 3] = 9;
            if (inp[i] == 'k')
                prom[p][i % 3] = 10;
            if (inp[i] == 'l')
                prom[p][i % 3] = 11;
            if (inp[i] == 'm')
                prom[p][i % 3] = 12;
            if (inp[i] == 'n')
                prom[p][i % 3] = 13;
            if (inp[i] == 'o')
                prom[p][i % 3] = 14;
            if (inp[i] == 'p')
                prom[p][i % 3] = 15;
            if (inp[i] == 'q')
                prom[p][i % 3] = 16;
            if (inp[i] == 'r')
                prom[p][i % 3] = 17;
            if (inp[i] == 's')
                prom[p][i % 3] = 18;
            if (inp[i] == 't')
                prom[p][i % 3] = 19;
            if (inp[i] == 'u')
                prom[p][i % 3] = 20;
            if (inp[i] == 'v')
                prom[p][i % 3] = 21;
            if (inp[i] == 'w')
                prom[p][i % 3] = 22;
            if (inp[i] == 'x')
                prom[p][i % 3] = 23;
            if (inp[i] == 'y')
                prom[p][i % 3] = 24;
            if (inp[i] == 'z')
                prom[p][i % 3] = 25;
        }
        let prom_res_i = [...Array(h_m / 3)].map(e => Array(3));
        for (let i = 0; i < h_m / 3; i++) {
            prom_res_i[i][0] = (prom[i][0] * ki[0][0] + prom[i][1] * ki[1][0] + prom[i][2] * ki[2][0]) % 26;
            prom_res_i[i][1] = (prom[i][0] * ki[0][1] + prom[i][1] * ki[1][1] + prom[i][2] * ki[2][1]) % 26;
            prom_res_i[i][2] = (prom[i][0] * ki[0][2] + prom[i][1] * ki[1][2] + prom[i][2] * ki[2][2]) % 26;
        }
        let ress = '';
        for (let i = 0; i < (h_m / 3); i++) {
            for (let j = 0; j < 3; j++) {
                if (j == 2) {
                    if (prom_res_i[i][j] == 0)
                        ress += "a";
                    if (prom_res_i[i][j] == 1)
                        ress += "b";
                    if (prom_res_i[i][j] == 2)
                        ress += "c";
                    if (prom_res_i[i][j] == 3)
                        ress += "d";
                    if (prom_res_i[i][j] == 4)
                        ress += "e";
                    if (prom_res_i[i][j] == 5)
                        ress += "f";
                    if (prom_res_i[i][j] == 6)
                        ress += "g";
                    if (prom_res_i[i][j] == 7)
                        ress += "h";
                    if (prom_res_i[i][j] == 8)
                        ress += "i";
                    if (prom_res_i[i][j] == 9)
                        ress += "j";
                    if (prom_res_i[i][j] == 10)
                        ress += "k";
                    if (prom_res_i[i][j] == 11)
                        ress += "l";
                    if (prom_res_i[i][j] == 12)
                        ress += "m";
                    if (prom_res_i[i][j] == 13)
                        ress += "n";
                    if (prom_res_i[i][j] == 14)
                        ress += "o";
                    if (prom_res_i[i][j] == 15)
                        ress += "p";
                    if (prom_res_i[i][j] == 16)
                        ress += "q";
                    if (prom_res_i[i][j] == 17)
                        ress += "r";
                    if (prom_res_i[i][j] == 18)
                        ress += "s";
                    if (prom_res_i[i][j] == 19)
                        ress += "t";
                    if (prom_res_i[i][j] == 20)
                        ress += "u";
                    if (prom_res_i[i][j] == 21)
                        ress += "v";
                    if (prom_res_i[i][j] == 22)
                        ress += "w";
                    if (prom_res_i[i][j] == 23)
                        ress += "x";
                    if (prom_res_i[i][j] == 24)
                        ress += "y";
                    if (prom_res_i[i][j] == 25)
                        ress += "z";
                }
            }
        }
        console.log(ress);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ress));
        element.setAttribute('download', 'outputDecode.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char);
    }
}
HillCodeComponent.ɵfac = function HillCodeComponent_Factory(t) { return new (t || HillCodeComponent)(); };
HillCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HillCodeComponent, selectors: [["app-hill-code"]], decls: 32, vars: 9, consts: [[1, "container"], [1, "title"], [1, "code-block"], [1, "code-content"], [1, "code-input"], ["type", "text", 1, "input", 3, "ngModel", "ngModelChange"], [1, "button-block"], [1, "input__upload"], [1, "upload-btn-wrapper"], [1, "btn"], ["type", "file", "id", "", 3, "change"], [1, "btn-reverse", 3, "click"]], template: function HillCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hill code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter you code here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_8_listener($event) { return ctx.textBox1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_9_listener($event) { return ctx.textBox2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_10_listener($event) { return ctx.textBox3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_12_listener($event) { return ctx.textBox4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.textBox5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_14_listener($event) { return ctx.textBox6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_16_listener($event) { return ctx.textBox7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_17_listener($event) { return ctx.textBox8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HillCodeComponent_Template_input_ngModelChange_18_listener($event) { return ctx.textBox9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Upload file for encode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HillCodeComponent_Template_input_change_24_listener($event) { return ctx.readFileForEncode($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HillCodeComponent_Template_button_click_25_listener() { return ctx.button4_Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reverse code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Upload file for decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HillCodeComponent_Template_input_change_31_listener($event) { return ctx.readFileForDecode($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textBox9);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  font-weight: 900;\n  font-size: 38px;\n}\n\n.code-block[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n}\n\n.code-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n}\n\n.code-input[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.code-input[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  font-size: 20px;\n  text-align: center;\n  line-height: 50px;\n}\n\n.button-block[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.button-block[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 20%;\n  min-height: 10vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__button[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  border-radius: 10px;\n  background: #198754;\n  border: 2px solid #198754;\n  color: white;\n  text-align: center;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__button[_ngcontent-%COMP%]:focus {\n  border-color: #198754;\n  outline: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 0 0.25rem rgba(13, 253, 109, 0.25);\n}\n\n.button-block[_ngcontent-%COMP%]   .input__button[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #198754;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__upload[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 17%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__upload[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #fe8c00;\n  color: white;\n  background: #fe8c00;\n  \n  \n  background: linear-gradient(to right, #f83600, #fe8c00);\n  \n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n\n.button-block[_ngcontent-%COMP%]   .input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.button-block[_ngcontent-%COMP%]   .btn-reverse[_ngcontent-%COMP%] {\n  border: 2px solid #fe8c00;\n  color: white;\n  background: #fe8c00;\n  \n  \n  background: linear-gradient(to right, #f83600, #fe8c00);\n  \n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpbGwtY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQUtFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQUhOOztBQU1JO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtBQUpOOztBQU9JO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBTE47O0FBUUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTk47O0FBUU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBTlI7O0FBU007RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxxRUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtBQVJSOztBQWNNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWlI7O0FBaUJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxxRUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtBQWhCSiIsImZpbGUiOiJoaWxsLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi5jb2RlLWJsb2NrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb2RlLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmNvZGUtaW5wdXQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uYnV0dG9uLWJsb2NrIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmX19idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDV2aDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxOTg3NTQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxOTg3NTQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhciwgY29sb3IgLjI1MHMgbGluZWFyLCBib3JkZXIgLjI1MHMgbGluZWFyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2J1dHRvbjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzE5ODc1NDtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4yNXJlbSByZ2JhKDEzLCAyNTMsIDEwOSwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAjMTk4NzU0O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3VwbG9hZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgIC51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZlOGMwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlOGMwMDtcclxuICAgICAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjgzNjAwLCAjZmU4YzAwKTtcclxuICAgICAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXIsIGNvbG9yIC4yNTBzIGxpbmVhciwgYm9yZGVyIC4yNTBzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLmJ0bi1yZXZlcnNlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZThjMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmU4YzAwO1xyXG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyLCBjb2xvciAuMjUwcyBsaW5lYXIsIGJvcmRlciAuMjUwcyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9357:
/*!***********************************************************!*\
  !*** ./src/app/main/rotation-lab-2/rotation.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationComponent": () => (/* binding */ RotationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class RotationComponent {
    constructor() {
        this.stairsValue = 2;
    }
    ngOnInit() {
    }
    codeAlgorizm() {
        if (this.textValue) {
            let arr = [];
            for (let index = 0; index < (this.stairsValue || 2); index++) {
                arr.push(this.textValue.split(' ').join('').split('').filter((res, j) => (j % this.stairsValue) == index));
            }
            this.coding_result = arr.map(res => res.join('')).join('');
        }
        else
            alert('Please write correct text into textarea');
    }
}
RotationComponent.ɵfac = function RotationComponent_Factory(t) { return new (t || RotationComponent)(); };
RotationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RotationComponent, selectors: [["app-rotation"]], decls: 10, vars: 3, consts: [[1, "container"], [1, "title"], [1, "textBlock-content"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your message here...", 3, "ngModel", "ngModelChange"], [1, "result"], ["type", "text", 1, "stairs", 3, "ngModel", "ngModelChange"], [1, "code_algorizm_button", 3, "click"]], template: function RotationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roration algotizm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RotationComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.textValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RotationComponent_Template_input_ngModelChange_7_listener($event) { return ctx.stairsValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RotationComponent_Template_button_click_8_listener() { return ctx.codeAlgorizm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.coding_result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stairsValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel], styles: [".container[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: column;\n  padding: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  font-weight: 900;\n  font-size: 38px;\n}\n\n.textBlock-content[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 2px solid black;\n  resize: none;\n  box-shadow: 4px 6px 7px 0px gray;\n}\n\n.textBlock-content[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 400px;\n  border: 2px solid black;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 4px 6px 7px 0px gray;\n  white-space: pre-line;\n  word-break: break-all;\n}\n\n.stairs[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  padding: 5px;\n  color: black;\n}\n\n.code_algorizm_button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  border: 2px solid #a19286;\n  border-radius: 10px;\n  background-color: orange;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6InJvdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi50ZXh0QmxvY2stY29udGVudCB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDZweCA3cHggMHB4IGdyYXk7XHJcblxyXG4gIH1cclxuXHJcbiAgLnJlc3VsdCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA2cHggN3B4IDBweCBncmF5O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5zdGFpcnMge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2MSwgMTQ2LCAxMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2RlX2FsZ29yaXptX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAxNDYsIDEzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9799:
/*!*****************************************************************!*\
  !*** ./src/app/main/stenography-lab-4/stenography.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StenographyComponent": () => (/* binding */ StenographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);



function StenographyComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Choose you file for encoding ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Click on the button below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StenographyComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.encodeImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function StenographyComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First upload encode file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StenographyComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.encodeResult, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class StenographyComponent {
    constructor() {
        this.encodeImg = "";
        this.encodeText = "";
        this.decodeText = "";
    }
    ngOnInit() {
        console.log(steg);
    }
    readURL(input) {
        console.log(input.files["0"]);
        let reader = new FileReader();
        reader.onload = (e) => {
            // console.log(myReader.result);
            this.encodeImg = e.target.result;
        };
        reader.readAsDataURL(input.files["0"]);
    }
    hideText() {
        console.log('dfadsf');
        this.encodeResult = steg.encode(this.encodeText, this.encodeImg);
        var element = document.createElement('a');
        element.setAttribute('href', this.encodeResult);
        element.setAttribute('download', 'output.bmp');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    decode(input) {
        var reader = new FileReader();
        reader.onload = (e) => {
            console.log(e.target.result);
            this.decodeText += steg.decode(this.encodeResult);
        };
        reader.readAsDataURL(input.files["0"]);
    }
}
StenographyComponent.ɵfac = function StenographyComponent_Factory(t) { return new (t || StenographyComponent)(); };
StenographyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StenographyComponent, selectors: [["app-stenography"]], decls: 32, vars: 9, consts: [[1, "content-box"], [1, "file-box"], [1, "sourse-file"], ["class", "without-img", 4, "ngIf"], ["alt", "", 3, "src", 4, "ngIf"], [1, "encode-box"], ["name", "", "id", "", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [1, "btn", 3, "disabled", "click"], [1, "result-file"], ["id", "image2", "alt", "", 3, "src", 4, "ngIf"], [1, "button"], [1, "input__upload"], [1, "upload-btn-wrapper"], [1, "btn"], ["type", "file", "name", "img", "id", "", "accept", "image/*", 3, "change"], [1, "result-box"], [1, "decoded"], [1, "btn", 3, "disabled"], ["type", "file", "name", "img1", "id", "", "accept", "image/", 3, "disabled", "change"], [1, "without-img"], ["alt", "", 3, "src"], ["id", "image2", "alt", "", 3, "src"]], template: function StenographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sourse image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StenographyComponent_p_5_Template, 4, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StenographyComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StenographyComponent_Template_textarea_ngModelChange_8_listener($event) { return ctx.encodeText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StenographyComponent_Template_button_click_9_listener() { return ctx.hideText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Encode message into image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Encode image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StenographyComponent_p_14_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StenographyComponent_img_15_Template, 1, 1, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upload encode file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StenographyComponent_Template_input_change_21_listener($event) { return ctx.readURL($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Decode text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Decode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StenographyComponent_Template_input_change_31_listener($event) { return ctx.decode($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.encodeImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encodeImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.encodeText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.encodeText && ctx.encodeImg));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.encodeResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encodeResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.decodeText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.encodeResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.encodeResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".input[_ngcontent-%COMP%] {\n  width: 20%;\n  min-height: 10vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.input__button[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  border-radius: 10px;\n  background: #198754;\n  border: 2px solid #198754;\n  color: white;\n  text-align: center;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n.input__button[_ngcontent-%COMP%]:focus {\n  border-color: #198754;\n  outline: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 0 0.25rem rgba(13, 253, 109, 0.25);\n}\n.input__button[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #198754;\n}\n.input__upload[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  width: 17%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n}\n.input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n.input__upload[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #fe8c00;\n  color: white;\n  background: #fe8c00;\n  \n  \n  background: linear-gradient(to right, #f83600, #fe8c00);\n  \n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n.input__upload[_ngcontent-%COMP%]   .upload-btn-wrapper[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n.content-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .result-file[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: bolder;\n  font-family: \"Poppins\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  flex-flow: column;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .result-file[_ngcontent-%COMP%]   .without-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .result-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 5px;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .sourse-file[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: bolder;\n  font-family: \"Poppins\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  flex-flow: column;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .sourse-file[_ngcontent-%COMP%]   .without-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .sourse-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  border-radius: 5px;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .encode-box[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: bolder;\n  font-family: \"Poppins\";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px;\n  flex-flow: column;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .encode-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 60%;\n  border: 1px solid;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  word-wrap: break-word;\n  white-space: break-all;\n  padding: 5px;\n}\n.content-box[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]   .encode-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 2px solid #fe8c00;\n  color: white;\n  background: #fe8c00;\n  \n  \n  background: linear-gradient(to right, #f83600, #fe8c00);\n  \n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 20px;\n  font-weight: bold;\n  transition: background 0.25s linear, color 0.25s linear, border 0.25s linear;\n}\n.content-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.content-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n}\n.content-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .result-box[_ngcontent-%COMP%]   .decoded[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: bolder;\n  font-family: \"Poppins\";\n  padding: 5px;\n  border: 1px solid;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZW5vZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxxRUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtBQUpOO0FBVUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSTjtBQWNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FBWEY7QUFhRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFYSjtBQWFJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWE47QUFhTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWlI7QUFnQkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFkTjtBQWdCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFkUjtBQWlCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWZSO0FBbUJJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBakJOO0FBbUJNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBakJSO0FBb0JNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLCtCQUFBO0VBQ0EsdURBQUE7RUFDQSxxRUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0RUFBQTtBQW5CUjtBQXlCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUF2Qko7QUF5Qkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7QUF2Qk47QUF5Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF2QlIiLCJmaWxlIjoic3Rlbm9ncmFwaHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWluLWhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk4NzU0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE5ODc1NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyLCBjb2xvciAuMjUwcyBsaW5lYXIsIGJvcmRlciAuMjUwcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAmX19idXR0b246Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTk4NzU0O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoMTMsIDI1MywgMTA5LCAwLjI1KTtcclxuICB9XHJcblxyXG4gICZfX2J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMTk4NzU0O1xyXG4gIH1cclxuXHJcbiAgJl9fdXBsb2FkIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gICAgLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZThjMDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlOGMwMDtcclxuICAgICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y4MzYwMCwgI2ZlOGMwMCk7XHJcbiAgICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1MHMgbGluZWFyLCBjb2xvciAuMjUwcyBsaW5lYXIsIGJvcmRlciAuMjUwcyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblxyXG4gIC5maWxlLWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICAgIC5yZXN1bHQtZmlsZSB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAgIC53aXRob3V0LWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc291cnNlLWZpbGUge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICAud2l0aG91dC1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVuY29kZS1ib3gge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstYWxsO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZlOGMwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlOGMwMDtcclxuICAgICAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgICAgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjgzNjAwLCAjZmU4YzAwKTtcclxuICAgICAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjUwcyBsaW5lYXIsIGNvbG9yIC4yNTBzIGxpbmVhciwgYm9yZGVyIC4yNTBzIGxpbmVhcjtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAucmVzdWx0LWJveCB7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHJcbiAgICAgIC5kZWNvZGVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmRlY29kZS1idXR0b24ge1xyXG4gICAgLy8gICB3aWR0aDogMjAlO1xyXG4gICAgLy8gICBib3JkZXI6IDJweCBzb2xpZCAjZmU4YzAwO1xyXG4gICAgLy8gICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyAgIGJhY2tncm91bmQ6ICNmZThjMDA7XHJcbiAgICAvLyAgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIC8vICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgLy8gICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmODM2MDAsICNmZThjMDApO1xyXG4gICAgLy8gICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgLy8gICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIC8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLy8gICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4yNTBzIGxpbmVhciwgY29sb3IgLjI1MHMgbGluZWFyLCBib3JkZXIgLjI1MHMgbGluZWFyO1xyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map