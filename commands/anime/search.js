const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const anilist = require("anilist-node");
const Anilist = new anilist();

module.exports = {
  name: "search",
  description: "Search Anime from a Image",
  aliases: ["anime-src"],
  emoji: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const image_url =
      args.join(" ") || message.attachments.size > 0
        ? message.attachments.array()[0].url
        : null;
    if (!image_url)
      return message.reply(
        `Please send a Image or Image URL!\nExample : \`${client.config.prefix}search https://gifaldyazka.is-a.dev/image/demo.png\``
      );
    fetch(
      `https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(
        image_url
      )}`
    )
      .then((res) => res.json())
      .then((body) => {
        try {
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
              .setFooter(`Search Request by ${message.author.username}`)
              .setTimestamp()
              .setColor("GOLD");
            message.channel.send({ embeds: [embed] });
          });
        } catch (err) {
          const embed = new MessageEmbed()
            .setTitle(":x: That Anime is Not Found!")
            .setDescription(
              `Something went wrong. Maybe the result is not found.\n\`\`\`yml\n${err}\n\`\`\``
            )
            .setColor("#FF0000")
            .setTimestamp();
          message.channel.send({ embeds: [embed] });
        }
      });
  },
};
