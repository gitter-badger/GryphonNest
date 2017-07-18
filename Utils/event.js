client.on('ready', () => {
  console.log(`${client.user.username} is online and ready Master Gryphon!\n${new Date()}`);
  let embed = new Discord.RichEmbed()
    .setTitle('I have been restarted')
    .setColor('#ff7700')
    .setFooter('Restart', client.user.avatarURL)
    .setTimestamp(new Date());
  client.channels.get('331072865707360258').send({embed});
});



client.on('guildMemberRemove', (member) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username} just left.`, member.user.displayAvatarURL)
    .setDescription('👋 Did we said something wrong?')
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

//Bye

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
