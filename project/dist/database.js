"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    password: "bhaskar",
    database: "typescriptdatabase",
    host: "localhost",
    port: 5133
});
//# sourceMappingURL=database.js.map