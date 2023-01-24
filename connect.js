import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "090404Zahar",
    database: "social"
})

//DB QUERY RETURNS (err, data) => {} DATA - ARRAY
