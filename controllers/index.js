const { insertNewFile, selectAllFiles, supprimerFile } = require('../models')

const uploadNewFile = (req, res) => {
    insertNewFile(req, (err, results) => {
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).json({ message: "file added successfully", results });
    });
}

const getAllFiles = (req, res) => {
    selectAllFiles((err, results) => {
        if(err){
            return res.status(404).send(err);
        }
        return res.status(200).json(results);
    });
}

const deleteFile = (req, res) => {
    const id = req.params.id;
    supprimerFile(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
};

module.exports = { uploadNewFile, getAllFiles, deleteFile };