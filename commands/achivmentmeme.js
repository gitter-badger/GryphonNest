const Jimp = require('jimp')
exports.run = (client, message, args) =>{
  Jimp.read('https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t=', function (err, image) {
    let rip = args.join(' ');
    message.channel.startTyping();
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
      image.print(font, 59, 32, rip);
      image.write('./img/achiv.png');
    });

    if (err) throw err;
  });
  setTimeout(() => {
    message.channel.send({file: './img/achiv.png'});
    client.channels.get("331748531981516800").send({file: './img/achiv.png'});
    message.channel.stopTyping();
  }, Math.random() * (100 - 3) + 5 * 1000);

};

exports.help = {
  name: 'achiv',
  description: '🏆 Achievement get!',
  usage: 'achiv [text]'
};