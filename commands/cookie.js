const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  let giveCookieto = message.mentions.users.first();
  if(giveCookieto == message.author) return message.channel.send('Loser!');

  if (message.mentions.users.size < 1) { 
    let embed = new Discord.RichEmbed()
      .setTitle('You havent said who\'s cookie it is so i ate it.')
      .setColor('#683e0d')
      .setThumbnail('https://s-media-cache-ak0.pinimg.com/originals/ba/7d/0d/ba7d0df9c103c6c51b9921695dc9381e.jpg');

    message.channel.send({embed});
    return;
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(`Sent you a cookie ${giveCookieto.username}!`)
    .setColor('#683e0d')
    .setThumbnail('http://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png');
  message.channel.send({embed});
};

exports.help = {
  name: 'cookie',
  description: '🍪 Gives mentioned user a cookie.',
  usage: 'cookie [mention]'
};
