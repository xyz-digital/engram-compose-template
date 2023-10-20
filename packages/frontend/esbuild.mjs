import esbuild from "esbuild";
import dotenv from "dotenv";
import { argv } from "process";

async function main() {
  const define = {};
  const { parsed } = dotenv.config();

  if (parsed) {
    for (const key of Object.keys(parsed)) {
      define[`process.env.${key}`] = `"${parsed[key]}"`;
    }
  }

  const entryPoints = ["src/index.tsx"];
  const outfile = "public/index.js";

  if (argv.includes("--serve")) {
    let ctx = await esbuild.context({ entryPoints, outfile, define, bundle: true });
    await ctx.watch();
    let { host, port } = await ctx.serve({ port: 3000, servedir: "public" });
    console.log("Watching for changes...");
    console.log(`Serving frontend on http://${host}:${port}`);
  } else if (argv.includes("--watch")) {
    let ctx = await esbuild.context({ entryPoints, outfile, define, bundle: true, treeShaking: true });
    await ctx.watch();
    console.log("Watching for changes...");
  } else {
    await esbuild.build({ entryPoints, outfile, define, treeShaking: true, minify: true, bundle: true });
  }
}

main();
