exports.run = (client, message, args) =>{
  var randomCat = require('random-cat');
  const catFacts = require('cat-facts');
  var img = randomCat.get();
  let fact = catFacts.random();

  let embed = new Discord.RichEmbed()
                  .setTitle('Cat fact and picture.')
                  .setImage(img)
                  .setColor('#ba881b')
                  .setDescription(fact)
                  .setTimestamp(new Date())
                  .setFooter('Meow', client.user.avatarURL)
        message.channel.send({embed})
return;
};

exports.help = {
  name: 'cat',
  description: 'Tell you a cat fact and sends a random cat picture.',
  usage: 'cat'
};
