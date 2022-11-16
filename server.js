const React = require("react");
const { renderToString } = require("react-dom/server");
const express = require("express");
const { App } = require("./src/App");
const { getUsers } = require("./src/getUsers");
const app = express();

app.get("/", (req, res) => {
  getUsers()
    .then(response => response.json())
    .then(users => {
      const html = renderToString(<App users={users} />);

      res.send(html);
    });
});

app.listen(8080, () => {
  console.log("Server running on port 8080...");
});
