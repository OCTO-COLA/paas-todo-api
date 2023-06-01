require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())

const env = process.env
app.get("/", function (req, res) {
  res.send(`Environment is ${env.NOM_ENV}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
