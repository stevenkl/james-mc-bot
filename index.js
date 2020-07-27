require('dotenv').config();

var mineflayer = require('mineflayer');
var pkg        = require('./package.json');


var bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: process.env.MC_PORT,
  username: process.env.BOT_NAME,
  version: process.env.MC_VERSION
});

pkg["bot-hooks"].forEach(item => {
  var mod = require("./lib/" + item.module);
  bot.on(item.name, mod(bot));
});


// bot.on('chat', function (username, message) {
  // if (username === bot.username) return;
  // bot.chat(message);
// });

bot.on('error', err => console.log(err));
