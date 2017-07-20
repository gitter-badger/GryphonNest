const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let userToBan = message.mentions.users.first();

  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.reply('You dont have permissions ya twat!');

  if (reason.length < 1) {
    let embed = new Discord.RichEmbed()
      .setTitle('Specify a reason for a ban!')
      .setColor('#f22a0c')
      .setFooter('Ban', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }


  if (message.mentions.users.size < 1) {
    let embed = new Discord.RichEmbed()
      .setTitle('Please specify any mentions or userID\'s!')
      .setColor('#f22a0c')
      .setFooter('Ban', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }

  if (!message.guild.member(userToBan).bannable) {
    let embed = new Discord.RichEmbed()
      .setTitle('This user is not bannable for me!')
      .setColor('#f22a0c')
      .setFooter('Ban', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  message.guild.ban(userToBan, reason);
  
if(message.guild.channels.find('name', 'mod-log')){
  const embedBanned = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('You have been banned!!')
    .setColor('#ff0000')
    .setTimestamp(new Date)
    .addField('Action', 'Ban', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${userToBan.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Ban', client.user.avatarURL);
  const embedchannel = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} used BANHAMMER`, message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField(`And ${userToBan.tag} is gone`, `Check mod-log for more info.`, true)
    .setFooter('Ban', client.user.avatarURL);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Copy of this message was sent to server owner and #mod-log!')
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField('Action', 'Ban', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${userToBan.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Ban', client.user.avatarURL);
  message.channel.send({embed: embedchannel})
  client.users.get(userToBan.id).send({embed: embedBanned});
  message.guild.channels.find('name', 'mod-log').send({embed})
  message.guild.owner.send({embed});
} else {
  const embedBanned = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('You have been banned!!')
    .setColor('#ff0000')
    .setTimestamp(new Date)
    .addField('Action', 'Ban', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${userToBan.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Ban', client.user.avatarURL);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Copy of this message was sent to server owner!\nCreating a #mod-log channel is recomended!')
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField('Action', 'Ban', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${userToBan.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Ban', client.user.avatarURL);
  message.channel.send({embed});
  client.users.get(userToBan.id).send({embed: embedBanned});
  message.guild.owner.send({embed});
}
};
exports.help = {
  name: 'ban',
  description: '🔨 Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
