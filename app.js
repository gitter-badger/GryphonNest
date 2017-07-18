const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone:true});
const config = require('./config.json');
const fs = require('fs');
const prefix = config.prefix;
// require("./Utils/events")
// require("./Utils/onMessage")
// require("./commands/Music/music")

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

client.on('ready', () => {
  console.log(`${client.user.tag} is up in ${client.guilds.size} guilds, for ${client.users.size} users!\nFlight started at${new Date()}\nUsing Gbot by Pesky12!`)
  client.user.setGame(`use ${prefix}help | Serving in: ${client.guilds.size} guilds! | pesky12.github.io/GryphonNest For source code and more info!`)
  let embed = new Discord.RichEmbed()
      .setTitle('I have been restarted')
      .setColor('#ff7700')
      .setFooter('Restart', client.user.avatarURL)
      .setTimestamp(new Date());
  client.channels.get("331072865707360258").send({embed});
});


client.on('guildMemberRemove', (member) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${member.user.username} just left.`, member.user.displayAvatarURL)
      .setDescription(`👋 Did we say something wrong?`)
      .setColor('#c4350d')
      .setFooter('User left', client.user.avatarURL)
      .setTimestamp(new Date());
    member.guild.defaultChannel.send({embed});
                let embed2 = new Discord.RichEmbed()
                    .setAuthor(`${member.user.username} just left from ${member.guild.name}.`, member.user.displayAvatarURL)
                    .setDescription(`👋 Did we said something wrong?`)
                    .setColor('#c4350d')
                    .setFooter('User left', client.user.avatarURL)
                    .setTimestamp(new Date());
    client.channels.get("331814800046817281").send({embed: embed2});
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
                    .setDescription(`👋 LOL i hope he dies there xd.`)
                    .setColor('#0dc425')
                    .setFooter('User left', client.user.avatarURL)
                    .setTimestamp(new Date());
    client.channels.get("331814800046817281").send({embed: embed2});
});


client.on('message', async (message) => {
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
client.on('message', message => {

    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }

   if (message.content.startsWith('Where is my son?')) {
        if (message.author.id == config.ownerID) {
            message.channel.send("Here mate")
            console.log("Here mate")
        } else {
            message.channel.send("I dont know where he is")
            console.log("Where is my son?")
        }

    }
// I  A M  G R Y P H O N
        // if (message.author.bot) return;
        // if (message.content.startsWith('lmao')) {
        //     if (message.channel.id == '316291869170728971') {
        //         message.channel.send('this is a testing channel no LMAOs Counted')
        //     } else {
        //         sql.get(`SELECT * FROM scores`).then(row => {
        //             if (!row) {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //                 client.user.setGame(`Strange LMAO: ${row.points}`)
        //             } else {
        //                 let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        //                 sql.run(`UPDATE scores SET points = ${row.points + 1}`);
        //             }
        //             client.user.setGame(`Strange LMAO: ${row.points}`)
        //         }).catch(() => {
        //             console.error;
        //             sql.run('CREATE TABLE IF NOT EXISTS scores (points INTEGER)').then(() => {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //             });
        //         });
        //     };
        // };
        // if (message.content.startsWith('LMAO')) {
        //     if (message.channel.id == '316291869170728971') {
        //         message.channel.send('this is a testing channel no LMAOs Counted')
        //     } else {
        //         sql.get(`SELECT * FROM scores`).then(row => {
        //             if (!row) {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //                 client.user.setGame(`Strange LMAO: ${row.points}`)
        //             } else {
        //                 let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        //                 sql.run(`UPDATE scores SET points = ${row.points + 1}`);
        //             }
        //             client.user.setGame(`Strange LMAO: ${row.points}`)
        //         }).catch(() => {
        //             console.error;
        //             sql.run('CREATE TABLE IF NOT EXISTS scores (points INTEGER)').then(() => {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //             });
        //         });
        //     };
        // };
        // if (message.content.startsWith('Lmao')) {
        //     if (message.channel.id == '316291869170728971') {
        //         message.channel.send('this is a testing channel no LMAOs Counted')
        //     } else {
        //         sql.get(`SELECT * FROM scores`).then(row => {
        //             if (!row) {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //                 client.user.setGame(`Strange LMAO: ${row.points}`)
        //             } else {
        //                 let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
        //                 sql.run(`UPDATE scores SET points = ${row.points + 1}`);
        //             }
        //             client.user.setGame(`Strange LMAO: ${row.points}`)
        //         }).catch(() => {
        //             console.error;
        //             sql.run('CREATE TABLE IF NOT EXISTS scores (points INTEGER)').then(() => {
        //                 sql.run('INSERT INTO scores (points) VALUES (?)', [1]);
        //             });
        //         });

        //     };
        // };
    });

let responseObject = {
    'ayy': 'Ayy, lmao!',

    'Help': 'There is no help',
    'help': 'There is no help',
    'HELP': 'There is no help',

    'What should i draw?': 'How about you just draw',
    'What should i draw': 'How about you just draw',

    'What is love': 'BABY DONT HURT ME',
    'What is love?': 'BABY DONT HURT ME',
    'what is love': 'BABY DONT HURT ME',
    'what is love?': 'BABY DONT HURT ME',
    'What is life': 'Just a weird anime.',
    'What is life?': 'Just a weird anime.',
    'what is life': 'Just a weird anime.',
    'what is life?': 'Just a weird anime.',

    'memes': 'My name jeff',
    'memes': 'My name jeff',
    'memez': 'My name jeff',
    'MEME': 'My name jeff',
    'MEMES': 'My name jeff',
    'Meme': 'My name jeff',
    'meme': 'My name jeff',

    'What is anime?': 'Ur life',
    'What is anime': 'Ur life',
    'what is anime': 'Ur life',
    'what is anime?': 'Ur life',
    'What is Anime?': 'Ur life',
    'What is Anime': 'Ur life',

    'payload': 'Pushing the payload (ノಠ益ಠ)ノ彡|┻━┻|',
    'Payload': 'Pushing the payload (ノಠ益ಠ)ノ彡|┻━┻|',
    'Push the payload': 'Pushing the payload (ノಠ益ಠ)ノ彡|┻━┻|',

    'Who is a good gryphon?': 'ME!!',
    'who is a good gryphon?': 'ME!!',
    'Who is a good gryphon': 'ME!!',
    'Who is a good gryphon': 'ME!!',

    'Steam Punk Giraffe': 'Thats my jam!',
    'steam punk giraffe': 'Thats my jam!',
}

client.login(config.token);
