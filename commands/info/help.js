const { Client, Message, MessageEmbed } = require("discord.js");

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
      .addField("Available Commands", `\`${client.config.prefix}help\` - Show this Help Desk.\n\`${client.config.prefix}ping\` - Show client ping latency.\n\`${client.config.prefix}search <image-url || upload-image>\` - Search anime from Image Source. Requires Image URL or Upload Image.`)
      .addField("Slash Commands", `\`/help\` - Show this Help Desk\n\`/ping\` - Show client ping latency\n\`/search\` - Search anime from Image Source. Requires Image URL.`)
      .setColor("GOLD")
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
