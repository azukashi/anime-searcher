const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

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
        `\`${process.env.PREFIX}help\` - Show this Help Desk.\n\`${process.env.PREFIX}ping\` - Show client ping latency.\n\`${process.env.PREFIX}search <image-url>\` - Search anime from Image Source. Requires Image URL.`
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
