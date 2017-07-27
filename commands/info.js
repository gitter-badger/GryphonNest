const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  let embed = new Discord.RichEmbed()
    .setTitle(`Infoboard for ${client.user.username}`)
    .setDescription('Here is some info about this bot!!')
    .addField('Uptime', `${process.uptime()} Seconds`,true)
    .addField('Code Author', client.users.get('235047463017381888').tag, true)
    .setColor('#7f16ff')
    .setThumbnail(client.user.avatarURL);
  message.channel.send({embed});
  message.channel.send('https://github.com/Pesky12/GryphonNest');
};
235047463017381888;
exports.help = {
  name: 'info',
  description: '🔧 Shows info about the bot with links!',
  usage: 'info'
};
