const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const contactFormRouter = require("./backend/contactForm");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api", contactFormRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Serveur en écoute sur le port ${PORT}`);
});
