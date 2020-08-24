"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
// update to Marcelo Agustini
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
let CustomUser = class CustomUser extends authentication_jwt_1.User {
};
CustomUser = tslib_1.__decorate([
    repository_1.model()
], CustomUser);
exports.CustomUser = CustomUser;
//# sourceMappingURL=customuser.model.js.map