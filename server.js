const express = require("express");
const dotenv = require("dotenv");
const Zuri = require("./models/zuriSchema");
require("./config/dbConnect")();

const app = express();
app.use(express.json());

dotenv.config();

// Requests

// Create Payload
app.post("/apis/zuridata/create", async (req, res) => {
  const { name, email, country } = req.body;
  let zuri = new Zuri({
    message: "Created",
    data: {
      name,
      email,
      country,
    },
  });
  await zuri
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(`Error: ${err.message}`);
    });
});


// Get data created
app.get("/apis/zuridata/", (req, res) => {
  Zuri.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(`Error: ${err.message}`);
    });
});


// Updates Data
app.put("/apis/zuridata/:id", (req, res) => {
  let id = req.params.id;
  Zuri.findByIdAndUpdate(id)
    .then((result) => {
      result.message = "Updated";
      res.send(result);
    })
    .catch((err) => {
      res.send(`Error: ${err.message}`);
    });
});


// Deletes data
app.delete("/apis/zuridata/:id", (req, res) => {
  let id = req.params.id;
  Zuri.findByIdAndDelete(id)
    .then((result) => {
      result.message = "Deleted";
      res.send(result);
    })
    .catch((err) => {
      res.send(`Error: ${err.message}`);
    });
});

const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
