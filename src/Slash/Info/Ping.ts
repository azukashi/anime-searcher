import { MessageEmbed, ColorResolvable } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
  name: 'ping',
  description: 'Show client ping latency',
  testOnly: false,
  options: [],
  run: async (client, interaction, args) => {
    // Specify embed color
    const rc: ColorResolvable = interaction.guild.me.displayHexColor;
    const latency = client.ws.ping;
    const embed = new MessageEmbed()
      .setDescription(`Ping latency : ${latency}ms!`)
      .setColor(rc);
    interaction.followUp({ embeds: [embed] });
  },
};
