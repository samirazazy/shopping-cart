import express from "express";
import data from "./data";

const app = express();

app.get("/api/items", (req, res) => {
  res.send(data.items);
});

app.listen(5000, () => {
  console.log("server started successfully...");
});
