const db = require('../config');

const insertNewFile = (req, result) => {
    const data = {
        file_name: req.file.filename,
        created_at: Date.now()
    }
    const sql = 'INSERT INTO file SET ?'
    db.query(sql, data, (err, results) => {
        if(err){
            return result(err, null);
        }
        return result(null, results);
    });
}

module.exports = { insertNewFile };