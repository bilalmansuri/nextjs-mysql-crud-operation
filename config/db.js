import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "Abcd@1234",
    port: 3306,
    database: "productsdb",
  },
});

export { pool };
