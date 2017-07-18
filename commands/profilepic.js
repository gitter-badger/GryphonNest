const Discord = module.require('discord.js');

module.exports.run = async(client, message, args) =>{
    // var mention = message.mentions.users.first();
    // if(mention <= 0){var user = message.author.displayAvatarURL}  
    // if(mention >= 0){var user = mention.displayAvatarURL}
let user = message.mentions.users.first();
if (message.mentions.users.size < 1){let embed = new Discord.RichEmbed()
      .setTitle('Please mention a user!')
      .setColor('#f22a0c')

    message.channel.send({embed});
    return;
  }
    let fakeLoadEmbed = new Discord.RichEmbed()
      .setAuthor('Searching....')
      .setColor('#f77a04')
      .setFooter('ProfilePic', client.user.avatarURL)
      .setTimestamp(new Date());

    let msg = await message.channel.send({embed: fakeLoadEmbed})

    let finishedEmbed = new Discord.RichEmbed()
      .setAuthor('Link', user.displayAvatarURL,user.displayAvatarURL)
      .setColor('#1bba31')
      .setFooter('Profilepic', client.user.avatarURL)
      .setTimestamp(new Date())
      .setImage(user.displayAvatarURL);

    await message.channel.send({embed: finishedEmbed})

    msg.delete()
}
exports.help = {
  name: 'profilepic',
  description: `🖨 Grabs mentioned user's profile pic.`,
  usage: 'profilepic [mention]'
};