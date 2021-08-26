const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Show Help Desk",
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle(":book: Help Menu")
      .addField(
        "Available Commands",
        `\`${client.config.prefix}help\` - Show this Help Desk.\n\`${client.config.prefix}ping\` - Show client ping latency.\n\`${client.config.prefix}search <image-url>\` - Search anime from Image Source. Requires Image URL.`
      )
      .addField(
        "Slash Commands",
        `\`/help\` - Show this Help Desk.\n\`/ping\` - Show client ping latency\n\`/search\` - Search anime from Image Source. Requires Image URL.`
      )
      .setColor("GOLD")
      .setTimestamp();
    interaction.followUp({ embeds: [embed] });
  },
};
