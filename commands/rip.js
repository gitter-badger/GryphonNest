const Jimp = require('jimp');
exports.run = (client, message, args) =>{
  let rip = message.content.slice(' ').slice(1);

  Jimp.read('http://tombgen.appspot.com/images/tombstone.png', function (err, image) {
    let rip = args.join(' ');
    message.channel.startTyping();
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
      image.print(font, 143, 107, rip, 400);
      image.write('./img/rip.png');
    });

    if (err) throw err;
  });
  setTimeout(() => {
    message.channel.send({file: './img/rip.png'});
    client.channels.get('331748531981516800').send({file: './img/rip.png'});
    message.channel.stopTyping();
  }, Math.random() * (100 - 3) + 5 * 1000);

};

exports.help = {
  name: 'rip',
  description: '🗿 Creates a tombstone with a defined text.',
  usage: 'rip [text]'
};
        
