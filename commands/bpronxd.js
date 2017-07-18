const Discord = require('discord.js');
const booru = require('booru');
exports.run = (client, message, args) =>{
  if(!message.channel.name.startsWith('nsfw')) return message.channel.send('This only works in channels with a "nsfw" option enabled use __**~sbooru**__ instead!!');
  let site = args[0];
  let tags = args.slice(1);
  if(args.length < 1) {
    let embed = new Discord.RichEmbed()
      .setTitle('Please specify a booru and tags!')
      .setDescription('Use |~help booru| for extended info about tags and sites.')
      .setColor('#42b0f4')
      .setFooter('Invalid Input', client.user.avatarURL);
    message.channel.send({embed});
    return;
  }

  booru.search(site, tags, {limit: 1, random: true})
    .then(booru.commonfy)
    .then(images => {
      for (let image of images) {
        message.channel.startTyping();
        setTimeout(() => {
          let embed = new Discord.RichEmbed()
            .addField('Rating:', `${image.common.rating}`, true)
            .addField('Score:', `${image.common.score}`, true)
            .setImage(image.common.file_url)
            .setColor('#c83fff')
            .setFooter(`Booru | Tags: ${args.join(' ')}`, client.user.avatarURL);
          message.channel.send({embed});
          message.channel.stopTyping();
        }, Math.random() * (100 - 3) + 5 * 1000);
      }
    })
    .catch(err => {
      if (err.name === 'booruError') {
        client.channels.get('333727164937666562').send(`Booru ${err.message}`);
        if(err.message.startsWith('Site not ')) {
          let embed = new Discord.RichEmbed()
            .setTitle(`${err.message}`)
            .setDescription('Use **|~help booru|** for **extended info** about **sites that are supported!**.')
            .setColor('#c83fff')
            .setFooter('Invalid Input', client.user.avatarURL);
          message.channel.send({embed});
          return;
        }
        if(err.message.startsWith('You didn\'t give ')) {
          let embed = new Discord.RichEmbed()
            .setTitle(`I can find nothing with these tags: *${tags.join(' ')}*`)
            .setDescription('Use **|~help booru|** for **extended info** about **tags**.')
            .setColor('#c83fff')
            .setFooter('Invalid Input', client.user.avatarURL);
          message.channel.send({embed});
          return;
        }
      } else {
        client.channels.get('333727164937666562').send(`Booru ${err}`);
      }
    });
};
exports.help = {
  name: 'booru',
  description: '🔍 Searches specified booru. (NSFW sites enabled/NSFW channels only).',
  usage: 'booru [site] [tags] \nSupported sites and aliases (NSFW site list sfw are supported as well):\n e621.net | e6\ndanbooru.donmai.us | db\nrule34.xxx | r34\n rule34.paheal.net | paheal\n derpibooru.org | derp\n For better understanding of tag system read \'http://e926.net/help/tags\''
};