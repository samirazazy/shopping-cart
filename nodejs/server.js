import express from "express";
import data from "./data";

const app = express();

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = data.items.find((el) => el._id === itemId);

  if (item) {
    res.send(item);
    // console.log(item);
  } else {
    res.status(404).send({ msg: "Item is not found..." });
    // console.log(msg);
  }
});

app.get("/api/items", (req, res) => {
  res.send(data.items);
});

app.listen(5000, () => {
  console.log("server started successfully...");
});
