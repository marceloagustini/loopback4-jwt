"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'postgres',
    connector: 'postgresql',
    url: "postgres://postgres:postgres@localhost:5432/examplejwt",
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'examplejwt'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let PostgresDataSource = class PostgresDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
PostgresDataSource.dataSourceName = 'postgres';
PostgresDataSource.defaultConfig = config;
PostgresDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.postgres', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], PostgresDataSource);
exports.PostgresDataSource = PostgresDataSource;
//# sourceMappingURL=postgres.datasource.js.map