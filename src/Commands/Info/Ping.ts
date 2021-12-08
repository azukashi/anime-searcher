import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
  name: 'ping',
  description: 'Show client ping latency',
  aliases: ['p'],
  usage: '',
  testOnly: false,
  permissions: ['SEND_MESSAGES'],
  run: async (client, message, args) => {
    const latency = client.ws.ping;
    const embed = new MessageEmbed()
      .setDescription(`Ping latency : ${latency}ms!`)
      .setColor('GOLD');
    message.channel.send({ embeds: [embed] });
  },
};
