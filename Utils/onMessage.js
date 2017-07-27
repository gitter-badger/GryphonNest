const Discord = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix;


module.exports = (client) =>{
  client.on('message', message => {

    if (responseObject[message.content]) {
      message.channel.send(responseObject[message.content]);
    }

    if (message.content.startsWith('Where is my son?')) {
      if (message.author.id == config.ownerID) {
        message.channel.send('Here mate');
        console.log('Here mate');
      } else {
        message.channel.send('I dont know where he is');
        console.log('Where is my son?');
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
  };
};
