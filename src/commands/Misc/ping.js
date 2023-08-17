const SlashCommandBuilder  = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
   .setName('ping')
   .setDescription('check bot ping'),
   
   await i.reply({content: `${client.ws.ping} ms`});
}