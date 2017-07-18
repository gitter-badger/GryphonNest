const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.channel.send('You dont have permissions ya twat!');

  if (reason.length < 1) { 
    let embed = new Discord.RichEmbed()
      .setTitle('Specify a reason and user for a kick!')
      .setColor('#f22a0c')
      .setFooter('Kick', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }

  if (message.mentions.users.size < 1) { 
    let embed = new Discord.RichEmbed()
      .setTitle('Please specify any mentions.')
      .setColor('#f22a0c')
      .setFooter('Kick', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  if (!message.guild.member(user).kickable) { 
    let embed = new Discord.RichEmbed()
      .setTitle('This user is not kickable for me!')
      .setColor('#f22a0c')
      .setFooter('Kick', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setDescription('Copy of this message was sent to server owner!')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action', 'Kick', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, true);
  message.channel.send({embed});
  message.guild.owner.send({embed});
  return;
};

exports.help = {
  name: 'kick',
  description: '👞 Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
