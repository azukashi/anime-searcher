require('dotenv').config();
const client = require('../index');

client.on('messageCreate', async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLowerCase().startsWith(process.env.PREFIX)
  )
    return;

  const [cmd, ...args] = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(' ');

  const command =
    client.commands.get(cmd.toLowerCase()) ||
    client.commands.find((c) => c.aliases?.includes(cmd.toLowerCase()));

  if (!command) return;
  await command.run(client, message, args);
});
