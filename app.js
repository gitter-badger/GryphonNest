const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone:true});
const config = require('./config.json');
const fs = require('fs');
const prefix = config.prefix;



console.log(process.uptime())

require('./Utils/events.js')(client)
require('./Utils/onMessage.js')(client)
if (fs.existsSync('./Utils/muzak.js')) {
require('./Utils/muzak.js')(client)
}

client.commands = new Discord.Collection

fs.readdir("./commands/", (err, files) =>{
    if(err) return console.error(err)
    let filesjs = files.filter(f => f.split(".").pop() === "js")
    if(filesjs <= 0){
        console.log('No commands to load mate!')
        return
    }

    console.log(`Im trying to load ${filesjs.length} commands, hold up!`)
    filesjs.forEach((f, i) => {
        let file = require(`./commands/${f}`)
        console.log(`${i + 1}: ${f} ready to fly!`)
        client.commands.set(file.help.name, file);
    })
})


client.on('message', async (message) => {
        if(message.channel.type == 'dm') return;
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let messageAray = message.content.split(' ');
  let command = messageAray[0];
  let args = messageAray.slice(1);

  let cmd = client.commands.get(command.slice(prefix.length))
  if(cmd) {
  cmd.run(client, message, args)
  console.log(`${message.author.tag} used '${command} ${args}' in '${message.guild.name}'/'${message.channel.name}'`)
  let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setDescription(`${message.author.tag} used '${command} ${args}' in '${message.guild.name}'/'${message.channel.name}'`)
      .setColor('#ff7700')
      .setFooter('Logging', client.user.avatarURL)
      .setTimestamp(new Date());
  client.channels.get("331748531981516800").send({embed});
  }
});

client.login(config.token);
