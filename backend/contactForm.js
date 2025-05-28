const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

console.log("EMAIL_USER:", process.env.EMAIL);
console.log("EMAIL_PASS:", process.env.PASSWORD ? "[OK]" : "[VIDE]");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
	const { name, email, message } = req.body;

	// 7. Configuration du transporteur pour envoyer un email avec Gmail
	const transporter = nodemailer.createTransport({
		service: "gmail", // On utilise Gmail
		auth: {
			user: process.env.EMAIL, // Ton adresse email
			pass: process.env.PASSWORD, // Mot de passe d'application
		},
	});

	// 8. Définition de l'email à envoyer
	const mailOptions = {
		from: email, // Email de l'expéditeur (utilisateur)
		to: process.env.EMAIL, // Tu reçois l'email
		subject: `Portfolio contact - ${name}`, // Objet de l'email
		text: message, // Contenu du message
	};

	// 9. Envoi de l'email
	try {
		await transporter.sendMail(mailOptions);
		res
			.status(200)
			.json({ success: true, message: "Email envoyé avec succès !" });
	} catch (error) {
		console.error("Erreur :", error);
		res
			.status(500)
			.json({ success: false, message: "Erreur lors de l'envoi de l'email." });
	}
});

// 10. Démarrage du serveur
app.listen(PORT, () => {
	console.log(`Serveur en écoute sur le port ${PORT}`);
});

const path = require("path");

// Sert les fichiers React si on est en production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "..frontend/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
	});
}
