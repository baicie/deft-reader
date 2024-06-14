import { cac } from "cac";
import { VERSION } from "./constants";
import { bootstrap } from "@deft-reader/api";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const cli = cac("deft");
const __dirname = fileURLToPath(new URL(".", import.meta.url));
cli
  .option("-c, --config <file>", `[string] use specified config file`)
  .option("-e, --env <file>", `[string] use specified env file`)
  .option("-p, --port <port>", `[number] use specified port`, {
    default: 3001,
  })
  .command("[root]", "start dev server") // default command
  .alias("start")
  .action(async (root, options) => {
    try {
      const envStr = `
        DATABASE_PATH=${path.resolve(__dirname, "database.sqlite")}
        DATABASE_PORT=${options.port}
      `;

      const envFile = path.resolve(__dirname, ".env");
      fs.writeFileSync(envFile, envStr);

      await bootstrap(envFile).then(() => {
        console.log("Server started");
      });
    } catch (error) {
      console.error(error);
    }
  });

cli.command("config").action(async () => {
  console.log(__dirname);
});

cli.help();
cli.version(VERSION);

cli.parse();