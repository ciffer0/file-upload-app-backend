const db = require('../config');

const insertNewFile = (req, result) => {
    const data = {
        file_name: req.file.filename,
        created_at: new Date()
    }

    const sql = 'INSERT INTO file SET ?'
    db.query(sql, data, (err, results) => {
        if(err){
            return result(err, null);
        }
        return result(null, results);
    });
}

const selectAllFiles = (result) => {
    
    const sql = 'SELECT * FROM file'
    db.query(sql, (err, results) => {
        if(err){
            return result(err, null);
        }
        const maDate = results[results.length - 1].created_at
        console.log(maDate.toLocaleDateString("fr"))
        return result(null, results);
    });
}

module.exports = { insertNewFile, selectAllFiles };