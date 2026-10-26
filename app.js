require('dotenv').config()
const express = require('express');
// import express from "express"  // isko bhi use kar sakte hai  
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('hitesdotcom')
})

app.get('/login' , (req,res) => {
    res.send('<h1>please login at deepanshu and code </h1>')
})
app.get('/youtube',(req,res) => {
  res.send('<h2> chai aur code</h2>')
})

module.exports = app
