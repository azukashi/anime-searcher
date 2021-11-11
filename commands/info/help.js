const { Client, Message, MessageEmbed } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  name: "help",
  description: "Shows Help Desk",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle(":book: Help Menu")
      .addField(
        "Available Commands",
        `\`${process.env.PREFIX}help\` - Show this Help Desk.\n\`${process.env.PREFIX}ping\` - Show client ping latency.\n\`${process.env.PREFIX}search <image-url || upload-image>\` - Search anime from Image Source. Requires Image URL or Upload Image.`
      )
      .addField(
        "Slash Commands",
        `\`/help\` - Show this Help Desk\n\`/ping\` - Show client ping latency\n\`/search\` - Search anime from Image Source. Requires Image URL.`
      )
      .setColor("GOLD")
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
