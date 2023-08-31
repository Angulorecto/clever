import cluster from "cluster";
import os from "os";
import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();

const githubroutes = [
  {"path": "/clever/", "page": "src/pages/index.html"},
]
const otherroutes = [
  {"path": "/", "page": "src/pages/index.html"},
]
if (window.location.href = "https://angulorecto.github.com/clever/") {
  githubroutes.forEach((route) => {
    app.get(route.path, (req, res) => {
      res.sendFile(path.join(__dirname, "static", route.page));
    });
  });
  // Catch-all route
  app.get("/clever/*", (req, res) => {
    res.redirect("/clever/404");
  });
}
