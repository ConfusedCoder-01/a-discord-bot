const { Wordle } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');
 
module.exports = {
    data: new SlashCommandBuilder()
    .setName('wordle')
    .setDescription(`Play a game of Wordle!`),

    async execute (interaction) {
 
        const game = new Wordle({
            message: interaction,
            isSlashGame: false,
            embed: {
                title: `Wordle`,
                color: '#32CD32'
            },
            customWord: null,
            timeoutTime: 30000,
            winMessage: 'You won, the word was **{word}**.',
            loseMessage: 'You lost, the word was **{word}**.',
            timeoutMessage: 'The game went unfinished.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
        });
 
        try {
            await game.startGame();
          } catch (err) {
            console.log(err);
            await interaction.reply('An error was encountered while starting the game!');
          }
    },
};
