"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListApplication = exports.main = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
Object.defineProperty(exports, "TodoListApplication", { enumerable: true, get: function () { return application_1.TodoListApplication; } });
async function main(options = {}) {
    const app = new application_1.TodoListApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    return app;
}
exports.main = main;
if (require.main === module) {
    // Run the application
    const config = {
        rest: {
            port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
            host: (_b = process.env.HOST) !== null && _b !== void 0 ? _b : 'localhost',
            openApiSpec: {
                // useful when used with OpenAPI-to-GraphQL to locate your application
                setServersFromRequest: true,
            },
        },
    };
    main(config).catch(err => {
        console.error('Cannot start the application.', err);
        process.exit(1);
    });
}
tslib_1.__exportStar(require("./models"), exports);
tslib_1.__exportStar(require("./repositories"), exports);
tslib_1.__exportStar(require("@loopback/rest"), exports);
//# sourceMappingURL=index.js.map