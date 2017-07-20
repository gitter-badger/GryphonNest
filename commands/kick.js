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

if(message.guild.channels.find('name', 'mod-log')){
  const embedBanned = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('You have been kicked!!')
    .setColor('#ff0000')
    .setTimestamp(new Date)
    .addField('Action', 'Kick', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Kick', client.user.avatarURL);
  const embedchannel = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} kicked some ass and chewed bubblegum!`, message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField(`And ${user.tag} is gone`, `Check mod-log for more info.`, true)
    .setFooter('Kick', client.user.avatarURL);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Copy of this message was sent to server owner and #mod-log!')
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField('Action', 'Kick', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Kick', client.user.avatarURL);
  message.channel.send({embed: embedchannel})
  client.users.get(user.id).send({embed: embedBanned});
  message.guild.channels.find('name', 'mod-log').send({embed})
  return
  return;
} else {
  const embedBanned = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('You have been kicked!!')
    .setColor('#ff0000')
    .setTimestamp(new Date)
    .addField('Action', 'Kick', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Kick', client.user.avatarURL);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Copy of this message was sent to server owner!\nCreating a #mod-log channel is recomended!')
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField('Action', 'Kick', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Kick', client.user.avatarURL);
  message.channel.send({embed});
  client.users.get(user.id).send({embed: embedBanned});
  message.guild.owner.send({embed});
  return;
}
};

exports.help = {
  name: 'kick',
  description: '👞 Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
