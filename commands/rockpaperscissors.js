const Discord = require('discord.js');
exports.run = (client, message, args) =>{
  var userChoice = args.join(' ');
  if (userChoice.length < 1){ 
    let embed = new Discord.RichEmbed()
      .setTitle('👊 Rock, ✋Paper, ✌Scissors?')
      .setColor('#1c4bd8');
    message.channel.send({embed});
    return;
  }
//  if (!userChoice.startsWith('scissors')){ 
//     let embed = new Discord.RichEmbed()
//       .setTitle('👊 Rock, ✋Paper, ✌Scissors?')
//       .setColor('#1c4bd8');
//     message.channel.send({embed});
//     return;
//   }
//   else if (!userChoice.startsWith('paper')){ 
//     let embed = new Discord.RichEmbed()
//       .setTitle('👊 Rock, ✋Paper, ✌Scissors?')
//       .setColor('#1c4bd8');
//     message.channel.send({embed});
//     return;
//   }
//   else if (!userChoice.startsWith('rock')){ 
//     let embed = new Discord.RichEmbed()
//       .setTitle('👊 Rock, ✋ Paper, ✌ Scissors?')
//       .setColor('#1c4bd8');
//     message.channel.send({embed});
//     return;
//   }
  var computerChoice = Math.random();
  if (computerChoice <0.34){
    computerChoice = 'rock';
  }else if(computerChoice <=0.67){
    computerChoice = 'paper';
  }
  else{
    computerChoice = 'scissors';
  }
  var compare = function(choice1,choice2){
    if(choice1===choice2){
      let embedtie = new Discord.RichEmbed()
        .setAuthor(`🎲 ${choice1} x ${choice2}`)
        .setTitle('🤝 TIE!')
        .setColor('#1c4bd8');
      return message.channel.send({embed: embedtie});
    }
    if(choice1==='rock'){
      if(choice2==='scissors'){
        let embedrock = new Discord.RichEmbed()
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setTitle('👊 Rock wins!')
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedrock});
      }
      else{              
        let embedpap = new Discord.RichEmbed()
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setTitle('✋ Paper wins!')
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedpap});
      }
    }


    if(choice1==='paper'){
      if(choice2==='rock'){              
        let embedpap = new Discord.RichEmbed()
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setTitle('✋ Paper wins!')
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedpap});
      }
      else{              
        let embedsciss = new Discord.RichEmbed()
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setTitle('✌ Scissors wins!')
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedsciss});
      }
    }


    if(choice1==='scissors'){
      if(choice2==='rock'){              
        let embedrock = new Discord.RichEmbed()
          .setTitle('👊 Rock wins!')
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedrock});
      }
      else{              
        let embedsciss = new Discord.RichEmbed()
          .setAuthor(`🎲 ${choice1} x ${choice2}`)
          .setTitle('✌ Scissors wins!')
          .setColor('#1c4bd8');
        return message.channel.send({embed: embedsciss});
      }
    }
  };
  compare(userChoice,computerChoice);

};

exports.help = {
  name: 'rps',
  description: '👊 Rock, ✋Paper, ✌Scissors!',
  usage: 'rps [👊 Rock | ✋Paper | ✌Scissors!]'
};
