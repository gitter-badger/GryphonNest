const Discord = require('discord.js');
const booru = require('sfwbooru');
exports.run = (client, message, args) =>{
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
            .setImage(image.common.file_url)
            .setColor('#42b0f4')
            .setFooter(`Score: ${image.common.score} | Tags: ${args.join(' ')}`, client.user.avatarURL);
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
            .setColor('#42b0f4')
            .setFooter('Invalid Input', client.user.avatarURL);
          message.channel.send({embed});
          return;
        }
        if(err.message.startsWith('You didn\'t give ')) {
          let embed = new Discord.RichEmbed()
            .setTitle(`I can find nothing with these tags: *${tags.join(' ')}*`)
            .setDescription('Use **|~help booru|** for **extended info** about **tags**.')
            .setColor('#42b0f4')
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
  name: 'sbooru',
  description: '🔍 searches in a specified booru! (SFW sites only!)',
  usage: 'sbooru [site] [tags] \nSupported sites and aliases:\n e921.net | e9\nkonachan.net | konan\nsafebooru.org | safe\n tbib.org | tb\n dollbooru.org | doll\n For better understanding of tag system read \'http://e926.net/help/tags\''
};