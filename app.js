const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

app.get("/", (req, res) => {
  res.render("index", {messages: messages});
}); 

app.get("/new", (req, res) => {
  res.render("form");
});

app.get("/msg", (req, res) => {
  res.render("msg");
});

app.post('/new', (req,res) => {
  const data = req.body;
  messages.push({text: data.text, user: data.user, added: new Date()});
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

