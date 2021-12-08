import { Message, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
  name: 'help',
  description: 'Show help desk',
  testOnly: false,
  options: [],
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setTitle(':book: Help Menu')
      .setThumbnail(client.user.displayAvatarURL({ size: 512 }))
      .addField(
        'Available Commands',
        `\`${process.env.PREFIX}help\` - Show this Help Desk.\n\`${process.env.PREFIX}ping\` - Show client ping latency.\n\`${process.env.PREFIX}search <image-url || attachments>\` - Search anime from Image Source. Requires Image URL or Attachments Upload.`
      )
      .addField(
        'Slash Commands',
        `\`/help\` - Show this Help Desk\n\`/ping\` - Show client ping latency\n\`/search\` - Search anime from Image Source. Requires Image URL.`
      )
      .setColor('GOLD')
      .setTimestamp();
    interaction.followUp({ embeds: [embed] });
  },
};
