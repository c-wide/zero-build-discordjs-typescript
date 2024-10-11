import { Client, Events, GatewayIntentBits } from "discord.js";
import { readyHandler } from "./ready.ts";

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, readyHandler);

await client.login(process.env.DISCORD_TOKEN);
