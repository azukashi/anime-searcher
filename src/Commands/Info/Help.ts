import { MessageEmbed, ColorResolvable } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
  name: 'help',
  description: 'Show help desk',
  aliases: ['h'],
  usage: '',
  testOnly: false,
  permissions: ['SEND_MESSAGES'],
  run: async (client, message, args) => {
    // Specify embed color
    const rc: ColorResolvable = message.guild.me.displayHexColor;
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
      .setColor(rc)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  },
};
