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
  
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Copy of this message was sent to server owner!')
    .setColor(0x00AE86)
    .setTimestamp(new Date)
    .addField('Action', 'Ban', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${userToBan.tag}`, true)
    .addField('Reason', `${reason}`, true)
    .setFooter('Ban', client.user.avatarURL);
  message.channel.send({embed});
  message.guild.owner.send({embed});
};
exports.help = {
  name: 'ban',
  description: '🔨 Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
