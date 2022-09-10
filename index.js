const express = require('express')
const route = require("./routes")
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended : false }));

app.use(express.json());

app.use(cors())

app.use('/file', route);

app.listen(3000, () => {
    console.log("listening on port 3000")
})