const mysql = require('mysql');

const db = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "file_upload_app",
});

db.connect(err => {
    if(err){
        throw err;
    }
    console.log("Mysql connected !");
});

module.exports = db;