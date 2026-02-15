const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// 👉 PASTE YOUR SOURCE CHANNEL ID BETWEEN QUOTES
const SOURCE_CHANNEL_ID = "1472376163195158804";

const TARGET_KEYWORDS = ["himothy-trades", "himothy-alerts"];

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.channel.id !== SOURCE_CHANNEL_ID) return;
  if (message.author.bot) return;

  client.guilds.cache.forEach(async (guild) => {
    const channels = await guild.channels.fetch();

    channels.forEach(channel => {
      if (!channel.name) return;

      const lowerName = channel.name.toLowerCase();

      if (TARGET_KEYWORDS.some(keyword => lowerName.includes(keyword))) {
        if (channel.isTextBased()) {
          channel.send(message.content).catch(() => {});
        }
      }
    });
  });
});

client.login(process.env.DISCORD_TOKEN);

