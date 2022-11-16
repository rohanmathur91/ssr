import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { App } from "./src/App";
import { getUsers } from "./src/getUsers";
import fs from "node:fs/promises";
import path from "node:path";

const app = express();

app.get("/", async (req, res) => {
  const users = await getUsers();

  const index = await fs.readFile(
    path.join(path.resolve("./public"), "index.html"),
    { encoding: "utf-8" }
  );

  const html = renderToString(<App users={users} />);
  const finalIndexHtml = index.replace("<!-- react-app -->", html);

  res.send(finalIndexHtml);
});

app.listen(8080, () => {
  console.log("Server running on port 8080...");
});
