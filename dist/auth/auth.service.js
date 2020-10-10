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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mailer_1 = require("@nestjs-modules/mailer");
const dto_1 = require("../user/dto");
const argon2 = require("argon2");
const constants_1 = require("../@core/constants");
const crypto_ts_1 = require("crypto-ts");
let AuthService = class AuthService {
    constructor(jwtService, mailerService) {
        this.jwtService = jwtService;
        this.mailerService = mailerService;
    }
    preActiveUserRO(user) {
        const preActiveUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
        };
        return preActiveUser;
    }
    buildNewUser(user) {
        const newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
            password: user.password,
        };
        return newUser;
    }
    buildUserRO(user) {
        const userRO = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
            image: user.image,
            access_token: this.generateJWT(user),
        };
        return userRO;
    }
    generateJWT(user) {
        return this.jwtService.sign(this.buildPayload(user));
    }
    buildPayload(user) {
        const payload = {
            id: user.id,
            isSuperUser: user.isSuperUser,
            isStaff: user.isStaff,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            mobile: user.mobile,
        };
        return payload;
    }
    async comparePassword(dbPassword, userPassword) {
        return argon2.verify(dbPassword, Buffer.from(userPassword));
    }
    async encryptData(data) {
        return crypto_ts_1.AES.encrypt(data, constants_1.SECRET_SALT).toString();
    }
    async decryptData(code) {
        return crypto_ts_1.AES.decrypt(code, constants_1.SECRET_SALT).toString(crypto_ts_1.enc.Utf8);
    }
    async genSixDigitNo() {
        return Math.floor(100000 + Math.random() * 900000);
    }
    async genEncryptCode() {
        return crypto_ts_1.AES.encrypt((await this.genSixDigitNo()).toString(), constants_1.SECRET_SALT).toString();
    }
    async createExpiryDate(time_ms) {
        return new Date(Date.now() + time_ms);
    }
    async sendMail(sendTo, mailSubject, template, data) {
        return this.mailerService.sendMail({ to: sendTo, subject: mailSubject, template: template, context: data });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mailer_1.MailerService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map