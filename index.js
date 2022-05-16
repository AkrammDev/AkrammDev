const express = require('express');
const app = express();
app.listen(() => console.log('Ready'));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js')
const client = new Discord.Client();
const cmd = require('node-cmd');
const ms = require('ms');
const fs = require('fs');
const prefix = "-";
///Codes :

///
client.login(process.env.token)
