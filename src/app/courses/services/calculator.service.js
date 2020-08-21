"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatorService = void 0;
var core_1 = require("@angular/core");
var CalculatorService = /** @class */ (function () {
    function CalculatorService(logger) {
        this.logger = logger;
    }
    CalculatorService.prototype.add = function (n1, n2) {
        this.logger.log('Addition operation called');
        return n1 + n2;
    };
    CalculatorService.prototype.subtract = function (n1, n2) {
        this.logger.log('Subtraction operation called');
        return n1 - n2;
    };
    CalculatorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CalculatorService);
    return CalculatorService;
}());
exports.CalculatorService = CalculatorService;
