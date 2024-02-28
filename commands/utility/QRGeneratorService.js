const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Health check of bot'),
    async execute(interaction) {
        await interaction.reply('Healthy');
    },
};
