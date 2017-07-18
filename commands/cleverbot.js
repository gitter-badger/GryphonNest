const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    const Cleverbot = require('cleverbot-node');
    const clbot = new Cleverbot;
    const config = require('../config.json')

    clbot.configure({ botapi: config.clevertoken });

    let Text = message.content.slice(4);

    clbot.write(args, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
            message.channel.send(response.output).catch(console.error);
            message.channel.stopTyping();
            let embed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField(`${message.author.tag}:`, `${message.content}`)
                .addField(`${message.guild.name}:`, `${response.output}`)
                .setColor('#ff7700')
                .setFooter('Logging', client.user.avatarURL)
                .setTimestamp(new Date());
            client.channels.get("331812235678580757").send({embed});
        }, Math.random() * (1 - 3) + 1 * 1000);
    });

    //CLEVERIO TRY

// const Cleverbotio = require('cleverbot.io');
// const clbot = new Cleverbotio('uNMEYKBGQao1g7hK','CqYIqBSy284oQMufoTnYmcFkJMe5FY31');

//     let input = message.content.slice(1)
//     clbot.setNick(message.guild.name);
//     message.channel.startTyping();
//     clbot.create((err, session) => {
//         clbot.ask(input, function (err, response) {
//             message.channel.send(response).catch(console.error)
//             message.channel.stopTyping();
//               let embed = new Discord.RichEmbed()
//                 .setAuthor(message.guild.name, message.guild.iconURL)
//                 .addField(`${message.author.tag}:`, `${message.content}`)
//                 .addField(`${message.guild.name}:`, `${response}`)
//                 .setColor('#ff7700')
//                 .setFooter('Logging', client.user.avatarURL)
//                 .setTimestamp(new Date());
//             client.channels.get("331812235678580757").send({embed});
//         });
//     });
};

exports.help = {
  name: 'cl',
  description: '💬 Talk to me!',
  usage: 'cl [message]'
};