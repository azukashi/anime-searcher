import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';
import anilist from 'anilist-node';
import fetch from 'node-fetch';
const AniList = new anilist();

export const command: Command = {
    name: 'search',
    description: 'Search for an Anime from Image source',
    aliases: [],
    usage: '<image_url or attachments>',
    testOnly: false,
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    run: async(client, message, args) => {
        // Get image from user
        const image: any = message.attachments.size > 0 ? message.attachments.map((attachments) => attachments.url) : args.join(" ");
        if(!image) message.reply({ content: `Expected got 1 argument, but got 0` });

        // Fetch to trace.moe using node-fetch
        fetch(`https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(image)}`)
        .then((res) => res.json())
        .then((body) => {
          // Try-catch block
          try {
            AniList.media.anime(body.result[0].anilist).then((data) => {
              const embed = new MessageEmbed()
                .setAuthor({ name: `Okay, Got it!`, iconURL: client.user.displayAvatarURL() })
                .addField(`Title`, `${data.title.romaji}`)
                .addField(`Similarity`, `${body.result[0].similarity}`)
                .addField(`Episode(s)`, `${data.episodes}`, true)
                .addField(`Type`, `${data.format}`, true)
                .addField(`Status`, `${data.status}`, true)
                .setThumbnail(data.coverImage.large)
                .setImage(body.result[0].image)
                .setFooter({ text: `Search Request by ${message.author.username}` })
                .setTimestamp()
                .setColor("GOLD");
              message.channel.send({ embeds: [embed] });
            });
          } catch (err) {
            // Catch error block
            const embed = new MessageEmbed()
              .setTitle(":x: That Anime is Not Found!")
              .setDescription(`Something went wrong. Maybe the result is not found.\n\`\`\`yml\n${err}\n\`\`\``)
              .setColor("#FF0000")
              .setTimestamp();
            message.channel.send({ embeds: [embed] });
            console.log(err);
          }
        });
    }
}