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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class User {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "companyId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "title", void 0);
__decorate([
    class_validator_1.IsObject(),
    __metadata("design:type", Object)
], User.prototype, "contact", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    class_validator_1.IsDate(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    class_validator_1.IsDate(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], User.prototype, "lastActivity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", Object)
], User.prototype, "_SYS_SETTINGS", void 0);
exports.User = User;
;
//# sourceMappingURL=user.dto.js.map