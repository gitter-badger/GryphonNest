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
  message.delete()
  if(message.guild.channels.find('name', 'mod-log')){
    const embedChat = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} used "WARNING LETTER"!`, message.author.avatarURL)
    .setColor('#ff5d00')
    .setTimestamp(new Date)
    .addField(`${user.tag} has been warned!`, `Hes should get a PM with more info!\nCheck mod-log for more info.`, true)
    .setFooter('Warn', client.user.avatarURL);
  const embed = new Discord.RichEmbed()
    .setDescription('Copy of this message was sent to #mod-log and the warned user!')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#ff5d00')
    .setTimestamp(new Date())
    .addField('Action', 'Warning', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, false)
    .setFooter('Warn', client.user.avatarURL);
    const embedUser = new Discord.RichEmbed()
      .setDescription('YOU HAVE BEEN WARNED!!')
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor('#ff5d00')
      .setTimestamp(new Date())
      .addField('Action', 'Warning', true)
      .addField('Moderator', `${message.author.tag}`, true)
      .addField('Target', `${user.tag}`, true)
      .addField('Reason', `${reason}`, false)
      .setFooter('Warn', client.user.avatarURL);
  message.channel.send({embed: embedChat});
  message.guild.channels.find('name', 'mod-log').send({embed})
  client.users.get(user.id).send({embed: embedUser});
} else {
const embed = new Discord.RichEmbed()
  .setDescription('Copy of this message was sent to owner and the warned user!\nCreating a #mod-log channel is recomended!')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor('#ff5d00')
  .setTimestamp(new Date())
  .addField('Action', 'Warning', true)
  .addField('Moderator', `${message.author.tag}`, true)
  .addField('Target', `${user.tag}`, true)
  .addField('Reason', `${reason}`, false)
  .setFooter('Warn', client.user.avatarURL);
  const embedUser = new Discord.RichEmbed()
    .setDescription('YOU HAVE BEEN WARNED!!')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('#ff5d00')
    .setTimestamp(new Date())
    .addField('Action', 'Warning', true)
    .addField('Moderator', `${message.author.tag}`, true)
    .addField('Target', `${user.tag}`, true)
    .addField('Reason', `${reason}`, false)
    .setFooter('Warn', client.user.avatarURL);
message.channel.send({embed});
client.users.get(user.id).send({embed: embedUser});
message.guild.owner.send({embed});
}
};

exports.help = {
  name: 'warn',
  description: '🛑 Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
