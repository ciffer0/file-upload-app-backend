const express = require('express')
const route = require("./routes")

const app = express()

app.use(express.urlencoded({ extended : false }));

app.use(express.json());

app.use('/file', route);

app.listen(3000, () => {
    console.log("listening on port 3000")
})