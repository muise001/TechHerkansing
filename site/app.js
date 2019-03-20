const PORT = process.env.port || 2000
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const fetch = require("node-fetch")
const mysql = require("promise-mysql")
const ENV = require("dotenv").config().parsed

const pool = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.USER,
  password: ENV.PASS,
  database: ENV.DB_NAME,
  port: 3306
})

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  pool.query("SELECT * FROM test")
    .then(res => console.log(res))
  res.render("index")
})

app.get("/createAccount", (req, res) => {
  res.render("createAccount")
})

app.post("/createUser", (req, res) => {
  console.log(req.body.email);
  pool.query("INSERT INTO test SET ?", {
    name: req.body.email
  }).then(res => console.log(res))
  res.render("index")
})

let server = app.listen(PORT, () => {
  console.log('port 2000')
})
