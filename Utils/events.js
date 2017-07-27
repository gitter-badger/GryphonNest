const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;

module.exports = (client) =>{
  client.on('ready', () => {
    client.user.setUsername("Harold The Griffin")

    console.log(`${client.user.tag} is up in ${client.guilds.size} guilds, for ${client.users.size} users!\nFlight started at ${new Date()}\nUsing Gbot by Pesky12!`);
    client.user.setGame(`use ${prefix}help | Serving in: ${client.guilds.size} guilds! | pesky12.github.io/GryphonNest For source code and more info!`);
    let embed = new Discord.RichEmbed()
      .setTitle('I have been restarted')
      .setColor('#ff7700')
      .setFooter('Restart', client.user.avatarURL)
      .setTimestamp(new Date());
    client.channels.get('331072865707360258').send({embed});
    console.log(`Took: ${process.uptime()} seconds!`);
  });

  client.on('guildUnavailable', (guild)=>{
    let embed = new Discord.RichEmbed()
      .setTitle(`Guild '${guild.name}' not availible!`)
      .setColor('#ff7700')
      .setFooter('Probalby some servers on Discord side died i hope im not going to skype in 10 minutes oh boi!', client.user.avatarURL)
      .setTimestamp(new Date());
    client.channels.get('331072865707360258').send({embed});
  });

  client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`Role '${oldRole.name}/${newRole.name}' has been updated`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Role created', client.user.avatarURL)
        .setTimestamp(new Date());
      oldRole.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('roleDelete', (role) => {
    if (role.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`Role '${role.name}' has been deleted!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Role created', client.user.avatarURL)
        .setTimestamp(new Date());
      role.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('roleCreate', (role) => {
    if (role.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor('New role has been created!')
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Role created', client.user.avatarURL)
        .setTimestamp(new Date());
      role.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('guildBanAdd', (guild, user) => {
    if (guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${user.name} has been banned!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Ban', client.user.avatarURL)
        .setTimestamp(new Date());
      guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('channelCreate', (channel) => {
    if(channel.type == 'dm') return;
    if (channel.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`Channel ${channel.name} has been created!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Channel', client.user.avatarURL)
        .setTimestamp(new Date());
    // channel.guild.channels.find('name', 'mod-log').send({embed})
    } else {
      return;
    }
  });

  client.on('channelUpdate', (oldChannel, newChannel) => {
    if(newChannel.type == 'dm') return;
    if (oldChannel.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`Channel ${oldChannel.name}/${newChannel.name} has been updated!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Channel', client.user.avatarURL)
        .setTimestamp(new Date());
      oldChannel.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('channelDelete', (channel) => {
    if(channel.type == 'dm') return;
    if (channel.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`Channel ${channel.name} deleted!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Channel', client.user.avatarURL)
        .setTimestamp(new Date());
      channel.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('guildBanRemove', (guild, user) => {
    if (role.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${user.name} has been unbanned!`)
        .setDescription('For more info check the audit log')
        .setColor('#c4350d')
        .setFooter('Ban', client.user.avatarURL)
        .setTimestamp(new Date());
      guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });

  client.on('emojiCreate', (emoji) => {
    if (emoji.guild.channels.find('name', 'mod-log')) {
      let embed = new Discord.RichEmbed()
        .setAuthor('Emoji has been created!')
        .setDescription(`${emoji}\nFor more info check the audit log`)
        .setColor('#c4350d')
        .setFooter('Emoji', client.user.avatarURL)
        .setTimestamp(new Date());
      emoji.guild.channels.find('name', 'mod-log').send({embed});
    } else {
      return;
    }
  });


  client.on('guildMemberRemove', (member) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${member.user.username} just left.`, member.user.displayAvatarURL)
      .setDescription('👋 Did we say something wrong?')
      .setColor('#c4350d')
      .setFooter('User left', client.user.avatarURL)
      .setTimestamp(new Date());
    member.guild.defaultChannel.send({embed});
    let embed2 = new Discord.RichEmbed()
      .setAuthor(`${member.user.username} just left from ${member.guild.name}.`, member.user.displayAvatarURL)
      .setDescription('👋 Did we said something wrong?')
      .setColor('#c4350d')
      .setFooter('User left', client.user.avatarURL)
      .setTimestamp(new Date());
    client.channels.get('331814800046817281').send({embed: embed2});
  });

  client.on('guildMemberAdd', (member) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${member.user.username} welcome to our server!`, member.user.displayAvatarURL)
      .setDescription(`📥 C'mon everyone say hi to ${member.user.username}!`)
      .setColor('#1bbc12')
      .setFooter('User join', client.user.avatarURL)
      .setTimestamp(new Date());
    member.guild.defaultChannel.send({embed});
    let embed2 = new Discord.RichEmbed()
      .setAuthor(`${member.user.username} just joined ${member.guild.name}.`, member.user.displayAvatarURL)
      .setDescription('👋 LOL i hope he dies there xd.')
      .setColor('#0dc425')
      .setFooter('User left', client.user.avatarURL)
      .setTimestamp(new Date());
    client.channels.get('331814800046817281').send({embed: embed2});
  });

  client.on('warn', (warn)=>{
    let embed = new Discord.RichEmbed()
      .setTitle('DISCORD API WARN')
      .setDescription('Log', warn)
      .setColor('#ff7700')
      .setFooter('warn')
      .setTimestamp(new Date());
    client.channels.get('331072865707360258').send({embed});
  });

//BETTER NOT LOL
// client.on('debug', (debug)=>{
//   let embed = new Discord.RichEmbed()
//       .setTitle('DISCORD API WARN')
//       .setDescription('Log', debug)
//       .setColor('#ff7700')
//       .setFooter('DEBUG SPAM BOI!!!!')
//       .setTimestamp(new Date());
//   client.channels.get("331072865707360258").send({embed});
// })
};
