// src/index.ts
import serverApp from "./app";
import config from "./config";

const server = async () => {
  serverApp.listen(config.port, () => {
    console.log("BD-ICONIC Server is running on port", config.port);
  });
};

server();
