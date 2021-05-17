import { Pool } from 'pg'

export const pool = new Pool({
    user: "postgres",
    password: "bhaskar",
    database: "typescriptdatabase",
    host: "localhost",
    port: 5133
});