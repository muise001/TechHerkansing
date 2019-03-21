const PORT = process.env.port || 2000
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
const fetch = require("node-fetch")
const mysql = require("promise-mysql")
const ENV = require("dotenv").config().parsed
const myConnection = require('express-myconnection');
const salt = "0923ur902hfwnWEhfewo89282@@@u9ef"
const md5 = require("md5")
const session = require("express-session")

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
  if (req.session.loggedin) {
    res.redirect("/home")
  } else {
    res.render("index")
  }
})

app.get("/createAccount", (req, res) => {
  res.render("createAccount")
})

app.post("/login", (req, res, next) => {
  const { password, email } = req.body
  pool.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
    if (err) return next(err)
    result = result[0]
    if (md5(salt + password + salt) === result.password) {
      req.session.loggedin = true
      req.session.data = result
      res.redirect("/home")
    } else {
      console.log("wrong password")
      res.render("index")
      return
    }
  })
})

app.post("/createAccount", (req, res) => {
  const { username, email, password, password2, name, last_name, birthDay, gender, bio, profilePicture, preference } = req.body
  if (password === password2) {
    pool.query("INSERT INTO users SET ?", {
      username, email, password: md5(salt+password+salt), name, last_name, birthDay, gender, bio, profilePicture, preference
    })
    res.render("/home")
  } else {
    res.redirect("/?error=true")
    console.log("passwords don't match")
    return
  }
})

app.get("/home", (req, res) => {
  console.log(req.session)
  if (req.session.loggedin) {
    res.render("home")
  } else {
    res.redirect("/")
  }
})

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if(err) console.log(err);
  })
  res.redirect("/")
})

let server = app.listen(PORT, () => {
  console.log('port 2000')
})
