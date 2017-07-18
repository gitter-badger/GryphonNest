const Discord = require('discord.js');
const mal = require('MALjs');
const config = require('../config.json');
const he = require('he');
var api = new mal(config.MALlogin, config.MALpass);
exports.run = (client, message, args) =>{
  let animename = args.join(' ');
  if (animename.length < 1){ 
    let embed = new Discord.RichEmbed()
      .setTitle('What anime i should find?')
      .setColor('#d15b12')
      .setFooter('MAL', client.user.avatarURL)
      .setTimestamp(new Date());

    message.channel.send({embed});
    return;
  }
  console.log (animename);
  api.anime.search(animename)
    .then(result =>{

      var synopsis = result.anime[0].synopsis.toString().replace(/<[^>]+>|\[[^>]+]/gi, '');
      synopsis = he.decode(synopsis);
      const embed = new Discord.RichEmbed()
        .setDescription(synopsis)
        .setAuthor(`${result.anime[0].title} | ${result.anime[0].english}`, result.anime[0].image.toString())
        .setThumbnail(result.anime[0].image.toString())
        .setColor('#8d17d6')
        .addField('Episodes', result.anime[0].episodes, true)
        .addField('Type', result.anime[0].type, true)
        .addField('Score', result.anime[0].score, true)
        .addField('Status', result.anime[0].status, true)
        .addField('Start date', `${result.anime[0].start_date}`, true)
        .addField('End date', result.anime[0].end_date, true)
      message.channel.send({embed});
    })
    .catch(err => console.log(err));
};

exports.help = {
  name: 'anime',
  description: '🔍 Searches for animu by its name.',
  usage: 'anime [name]'
};
