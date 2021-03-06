"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var user_service_1 = require('./user.service');
var user_1 = require('./user');
require('rxjs/add/operator/switchMap');
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route, location) {
        this.userService = userService;
        this.route = route;
        this.location = location;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUser(+params['id']); })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-user-detail',
            templateUrl: './user-details.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, common_1.Location])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-details.component.js.map