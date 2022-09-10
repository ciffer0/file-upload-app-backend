const express = require("express");
const route = require("./routes");
const { join } = require('path')
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
})

app.use("/files", express.static(join(process.cwd(), "files")));

app.use("/file", route);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
