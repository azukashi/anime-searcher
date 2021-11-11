const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Show client ping latency',
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle('Pong!')
      .setDescription(`Client Ping Latency : ${client.ws.ping}`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
