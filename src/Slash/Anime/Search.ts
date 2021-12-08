import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import anilist from 'anilist-node';
import fetch from 'node-fetch';
const AniList = new anilist();

export const slash: Slash = {
    name: 'search',
    description: 'Search for an Anime from Image source',
    testOnly: false,
    options: [
        {
            type: 3,
            name: 'image_url',
            description: 'URL of the Image to search',
            required: true
        }
    ],
    run: async(client, interaction, args) => {
        // Get image from args
        const [image_url]: any = args;

        // Fetch to trace.moe using node-fetch
        fetch(`https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(image_url)}`)
        .then((res) => res.json())
        .then((body) => {
          // Try-catch block
          try {
            AniList.media.anime(body.result[0].anilist).then((data) => {
              const embed = new MessageEmbed()
                .setAuthor(`Okay, Got it!`, client.user.displayAvatarURL({ dynamic: true }))
                .addField(`Title`, `${data.title.romaji}`)
                .addField(`Similarity`, `${body.result[0].similarity}`)
                .addField(`Episode(s)`, `${data.episodes}`, true)
                .addField(`Type`, `${data.format}`, true)
                .addField(`Status`, `${data.status}`, true)
                .setThumbnail(data.coverImage.large)
                .setImage(body.result[0].image)
                .setFooter(`Search Request by ${interaction.user.username}`)
                .setTimestamp()
                .setColor("GOLD");
              interaction.followUp({ embeds: [embed] });
            });
          } catch (err) {
            // Catch error block
            const embed = new MessageEmbed()
              .setTitle(":x: That Anime is Not Found!")
              .setDescription(`Something went wrong. Maybe the result is not found.\n\`\`\`yml\n${err}\n\`\`\``)
              .setColor("#FF0000")
              .setTimestamp();
            interaction.followUp({ embeds: [embed] });
            console.log(err);
          }
        });
    }
}