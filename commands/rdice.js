const Discord = require('discord.js');
const randomgen = require('random-natural');
exports.run = (client, message, args) =>{
  var math = randomgen({ min: args[0], max: args[1] });
  let embed = new Discord.RichEmbed()
    .setTitle(`🎲 You rolled ${math}!`)
    .setColor('#2563c6');
  console.log(args[0] +' ' + args[1]);
  message.channel.send({embed});
};

exports.help = {
  name: 'roll',
  description: '🎲 Throws dice with the numbers specified.',
  usage: 'roll [min] [max]'
};
