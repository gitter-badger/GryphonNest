const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply('You dont have permissions ya twat!');
  if (reason.length < 1){ 
    let embed = new Discord.RichEmbed()
      .setTitle('Specify a reason for warning!')
      .setColor('#f22a0c')
      .setFooter('Warn', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  if (message.mentions.users.size < 1) { 
    let embed = new Discord.RichEmbed()
      .setTitle('Please specify any mentions.')
      .setColor('#f22a0c')
      .setFooter('Warn', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  const embed = new Discord.RichEmbed()
    .setDescription('Copy of this message was sent to server owner and the warned user!')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#ff5d00')
    .setTimestamp(new Date())
    .addField('Action', 'Warning', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, false)
    .setFooter('Warn', client.user.avatarURL);
  message.channel.send({embed});
  message.guild.owner.send({embed});
  client.users.get(user.id).send({embed});
};

exports.help = {
  name: 'warn',
  description: '🛑 Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
