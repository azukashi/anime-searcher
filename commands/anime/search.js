const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const anilist = require("anilist-node");
const Anilist = new anilist();

module.exports = {
  name: "search",
  description: "Search Anime from a Image",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    // Get Image from User. Uploaded image or Image URL.
    const image = message.attachments.size > 0 ? message.attachments.map((attachments) => attachments.url) : args.join(" ");
    
    // If there is no image, Reply and tell the user.
    if (!image) return message.reply({content: `Please send a Image or Image URL!\nExample : \`${client.config.prefix}search https://gifaldyazka.is-a.dev/image/demo.png\`\nOr upload an image with \`${client.config.prefix}search\` caption.`});

    // Fetch data using node-fetch.
    fetch(`https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(image)}`)
      .then((res) => res.json())
      .then((body) => {
        // Try-catch block
        try {
          Anilist.media.anime(body.result[0].anilist).then((data) => {
            const embed = new MessageEmbed()
              .setAuthor(`Okay, Got it!`, client.user.displayAvatarURL({}))
              .addField(`Title`, `${data.title.romaji}`)
              .addField(`Similarity`, `${body.result[0].similarity}`)
              .addField(`Episode(s)`, `${data.episodes}`, true)
              .addField(`Type`, `${data.format}`, true)
              .addField(`Status`, `${data.status}`, true)
              .setThumbnail(data.coverImage.large)
              .setImage(body.result[0].image)
              .setFooter(`Search Request by ${message.author.username}`)
              .setTimestamp()
              .setColor("GOLD");
            message.channel.send({ embeds: [embed] });
          });
        } catch (err) {
          // If there is any errors, It will not crashing your process. It'll catch and tell the error.
          const embed = new MessageEmbed()
            .setTitle(":x: That Anime is Not Found!")
            .setDescription(
              `Something went wrong. Maybe the result is not found.\n\`\`\`yml\n${err}\n\`\`\``
            )
            .setColor("#FF0000")
            .setTimestamp();
          message.channel.send({ embeds: [embed] });
          console.log(err);
        }
      });
  },
};
