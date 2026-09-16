import dotenv from 'dotenv'
dotenv.config()

import {
    Client,
    Events,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    GatewayIntentBits,
    ActionRowBuilder,
} from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
})

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN)

const testBtn = new ButtonBuilder()
    .setCustomId("TestHello")
    .setLabel("Hello World")
    .setStyle(ButtonStyle.Primary)


const row = new ActionRowBuilder().addComponents(testBtn)

client.on("messageCreate", async (message) => {
    if (!message?.author.bot) {
        message.author.send({
            content: "Hello World!",
            components: [row]
        })
    }
})

client.on("interactionCreate", async (interaction) => {
    if(interaction.customId === "TestHello"){
        await interaction.reply("Hello Back!")
    }
})