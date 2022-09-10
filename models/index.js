const db = require("../config");
const { writeFile, unlinkSync, existsSync } = require("fs");

const insertNewFile = (req, result) => {
  const data = {
    file_name: req.file.filename,
    created_at: new Date(),
  };

  const sql = "INSERT INTO file SET ?";
  db.query(sql, data, (err, results) => {
    if (err) {
      return result(err, null);
    }
    return result(null, results);
  });
};

const selectAllFiles = (result) => {
  const sql = "SELECT * FROM file";
  db.query(sql, (err, results) => {
    if (results[0]) {
      if (err) {
        return result(err, null);
      }
      return result(null, results);
    }else{
        return result(null, null)
    }
  });
};


const supprimerFile = (id, result) => {
    db.query(
      "SELECT file_name FROM file WHERE id = ?",
      [id],
      (err, res) => {
        if (!res) {
          result({ error: "An error has been occured" });
        } else {
          if (err) {
            result(err, null);
          } else {
            if (existsSync(`./files/${res[0].file_name}`)) {
              unlinkSync(`./files/${res[0].file_name}`);
            }
            db.query(
              "DELETE FROM file WHERE id = ?",
              [id],
              (err, results) => {
                if (!results) {
                  result({ error: "An error has been occured" });
                } else {
                  if (err) {
                    result(err, null);
                  } else {
                    result(null, { id });
                  }
                }
              }
            );
          }
        }
      }
    );
  };
module.exports = { insertNewFile, selectAllFiles, supprimerFile };
