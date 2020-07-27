module.exports = function (bot) {
  return function (username, message) {
    if (username === bot.username) return;
    bot.chat(message);
  }
};