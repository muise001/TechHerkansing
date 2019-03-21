const PORT = process.env.port || 2000
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const fetch = require("node-fetch")
const mysql = require("promise-mysql")
const ENV = require("dotenv").config().parsed
const salt = "0923ur902hfwnWEhfewo89282@@@u9ef"
const md5 = require("md5")
// const session = require("express-session")

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
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.get("/", (req, res) => {
  pool.query("SELECT * FROM test")
    .then(res => console.log(res))
  res.render("index")
})

app.get("/createAccount", (req, res) => {
  res.render("createAccount")
})

app.post("/login", (req, res) => {
  const { password, email } = req.body
  console.log(md5(salt+req.body.password+salt))
})

app.post("/createAccount", (req, res) => {
  const { username, email, password, password2, name, last_name, birthDay, gender, bio, profilePicture } = req.body
  if (password === password2) {
    pool.query("INSERT INTO users SET ?", {
      username, email, password: md5(salt+password+salt), name, last_name, birthDay, gender, bio, profilePicture
    })
    res.render("/home")
  } else {
    res.redirect("/?error=true")
    console.log("passwords don't match")
    return
  }
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
