import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
  name: 'ping',
  description: 'Show client ping latency',
  testOnly: false,
  options: [],
  run: async (client, interaction, args) => {
    const latency = client.ws.ping;
    const embed = new MessageEmbed()
      .setDescription(`Ping latency : ${latency}ms!`)
      .setColor('GOLD');
    interaction.followUp({ embeds: [embed] });
  },
};
