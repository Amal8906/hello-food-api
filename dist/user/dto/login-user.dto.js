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
exports.MobileLoginDto = exports.EmailLoginDto = exports.UsernameLoginDto = exports.LoginDto = void 0;
const class_validator_1 = require("class-validator");
class LoginDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "mobile", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
class UsernameLoginDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(100),
    __metadata("design:type", String)
], UsernameLoginDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(1024),
    __metadata("design:type", String)
], UsernameLoginDto.prototype, "password", void 0);
exports.UsernameLoginDto = UsernameLoginDto;
class EmailLoginDto {
}
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], EmailLoginDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(1024),
    __metadata("design:type", String)
], EmailLoginDto.prototype, "password", void 0);
exports.EmailLoginDto = EmailLoginDto;
class MobileLoginDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], MobileLoginDto.prototype, "mobile", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(1024),
    __metadata("design:type", String)
], MobileLoginDto.prototype, "password", void 0);
exports.MobileLoginDto = MobileLoginDto;
//# sourceMappingURL=login-user.dto.js.map