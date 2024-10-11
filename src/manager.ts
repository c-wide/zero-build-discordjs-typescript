import path from "node:path";
import { ShardingManager } from "discord.js";

const manager = new ShardingManager(path.join(import.meta.dirname, "bot.ts"), {
	token: process.env.DISCORD_TOKEN,
	execArgv: ["--experimental-strip-types"],
});

manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} Launched`));

await manager.spawn();
