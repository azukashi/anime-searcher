const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const anilist = require("anilist-node");
const Anilist = new anilist();

module.exports = {
  name: "search",
  description: "Search for an anime",
  options: [
    {
      type: 3,
      name: "image_url",
      description: "URL String of The Image",
      required: true,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const [image_url] = args;

    fetch(
      `https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(
        image_url
      )}`
    )
      .then((res) => res.json())
      .then((body) => {
        Anilist.media.anime(body.result[0].anilist).then((data) => {
          const embed = new MessageEmbed()
            .setAuthor(`Okay, Got it!`, client.user.displayAvatarURL({}))
            .addField(`Title`, `${data.title.romaji}`)
            .addField(`Similarity`, `${body.result[0].similarity}`)
            .addField(`Episode(s)`, `${data.episodes}`)
            .addField(`Type`, `${data.format}`)
            .addField(`Status`, `${data.status}`)
            .setThumbnail(data.coverImage.large)
            .setImage(body.result[0].image)
            .setFooter(`Search Request by ${interaction.user.username}`)
            .setTimestamp()
            .setColor("GOLD");
          interaction.followUp({ embeds: [embed] });
        });
      });
  },
};
