const settings = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`<List of commands for GryphonBot>\n\n{Use ${settings.prefix}help <command> for more info!}\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage: ${command.help.usage}`, {code:'asciidoc'});
    }
  }
};

exports.help = {
  name: 'help',
  description: '❔ Displays all the available commands. Duh!',
  usage: 'help [command]'
};
