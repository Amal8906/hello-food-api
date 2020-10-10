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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const argon2 = require("argon2");
const date_fns_1 = require("date-fns");
const crypto_ts_1 = require("crypto-ts");
const config_1 = require("../@core/constants/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_1 = require("../auth");
let UserService = class UserService {
    constructor(userModel, authService) {
        this.userModel = userModel;
        this.authService = authService;
    }
    async _create(userData) {
        await this.isMobileUnique(userData.mobile);
        this.setRegistrationInfo(userData);
        const user = new this.userModel(userData);
        user.save();
        return this.authService.buildUserRO(user);
    }
    async _userActivation() {
    }
    async _login(loginData) {
        const user = await this.findUserByMobile(loginData.mobile);
        await this.checkPassword(loginData.password, user);
        return this.authService.buildUserRO(user);
    }
    async _forgetPassword(forgetData) {
        const user = await this.userModel.findOne({ mobile: forgetData.mobile });
        if (!user) {
            throw new common_1.NotFoundException('Mobile number is not registered.');
        }
        return { id: user._id, mobile: user.mobile };
    }
    async _verifyForgetPassword(forgetData) {
        const user = await this.userModel.findOne({ mobile: forgetData.mobile });
        return this.authService.buildUserRO(user);
    }
    _checkRegisteredMobile(jsonData) {
        return this.checkMobileNumber(jsonData.mobile);
    }
    async isMobileUnique(mobile) {
        const user = await this.userModel.findOne({ mobile: mobile });
        if (user) {
            throw new common_1.BadRequestException('Mobile number already registered.');
        }
    }
    setRegistrationInfo(user) {
        user.verificationCode = crypto_ts_1.AES.encrypt(uuid_1.v4(), config_1.SECRET_SALT).toString();
        user.verificationExpires = date_fns_1.addHours(new Date(), 1);
    }
    async findUserByMobile(mobile) {
        const user = await this.userModel.findOne({ mobile });
        if (!user) {
            throw new common_1.NotFoundException('Wrong mobile or password.');
        }
        return user;
    }
    async checkPassword(attemptPass, user) {
        const match = await argon2.verify(user.password, attemptPass);
        if (!match) {
            throw new common_1.NotFoundException('Wrong mobile number or password.');
        }
        return match;
    }
    async checkMobileNumber(mobile) {
        const user = await this.userModel.findOne({ mobile });
        if (user) {
            return { statusCode: 200, message: 'Mobile number already registered.' };
        }
        return { statusCode: 404, message: 'Mobile number available for registered.' };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map