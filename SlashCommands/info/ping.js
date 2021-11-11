const { Client, CommandInteraction } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Show client Ping Latency',
  options: [],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    interaction.followUp({ content: `${client.ws.ping}ms!` });
  },
};
