import { sayHello } from "@engram-compose-template/utils";
import express from "express";

const PORT = process.env.PORT || 8080;

async function main() {
  sayHello();

  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
