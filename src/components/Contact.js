import "../styles/contact.css";
import React, { useState } from "react";

function Contact() {
	// States pour stocker les valeurs des champs
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const isMailValid = (email) => {
		const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regexp.test(email);
	};

	// Fonction qui sera appelée à l'envoi du formulaire
	const handleSubmit = async (e) => {
		e.preventDefault(); // Empêche le rechargement de la page

		if (!name || !email || !message) {
			setStatus("Tous les champs doivent être remplis");
			return;
		}

		if (!isMailValid) {
			setStatus("adresse email invalide");
			return;
		}

		try {
			const res = await fetch("http://localhost:5000/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message }), // On envoie les données
			});

			const data = await res.json();

			if (data.success) {
				setStatus("Message envoyé !");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setStatus("Erreur: ", data.message);
			}
		} catch (err) {
			setStatus("Erreur de connexion au serveur.");
		}
	};

	return (
		<div class="container-contact">
			<h2>Contactez-moi</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nom/Entreprise</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<label htmlFor="mail">Email</label>
				<input
					id="mail"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>

				<button type="submit">Envoyer</button>
			</form>

			{status && <p>{status}</p>}
		</div>
	);
}

export default Contact;
