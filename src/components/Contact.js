import "../styles/contact.css";
import React, { useState } from "react";

import linkedin from "../assets/Logos/Linkedin_logo_white.png";
import github from "../assets/Logos/Github_logo.png";

function Contact() {
	console.log("width: ", window.innerWidth);
	// States pour stocker les valeurs des champs
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
	};

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

		if (!isMailValid(email)) {
			setStatus("adresse email invalide");
			return;
		}

		console.log("URL utilisée :", process.env.REACT_APP_WEB_URL);

		try {
			const res = await fetch(`${process.env.REACT_APP_WEB_URL}/send`, {
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
			<div class="references">
				<div class="ref-group">
					<h2>Email</h2>
					<a href="mailto:christellerevol.works@gmail.com">
						christellerevol.works@gmail.com
					</a>
					{/* <p>christellerevol.works@gmail.com</p> */}
				</div>
				<div class="ref-group">
					<h2>Réseaux Sociaux</h2>
					<div className="contact-logo-container">
						<a
							href="https://fr.linkedin.com/in/christelle-revol-458923130"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linkedin}
								alt="linkedin link"
								className="contact-logo"
							/>
						</a>
						<a
							href="https://github.com/ChristelleRevol"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={github} alt="github link" className="contact-logo" />
						</a>
					</div>
				</div>
			</div>

			{/*
			<div class="form">
				<h2 class="form-text">Contactez-moi</h2>
				<form onSubmit={handleSubmit}>
					<div class="form-inside">
						<div class="inputs-group">

							<input
								id="name"
								type="text"
								placeholder="Nom/Entreprise"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="form-background-color form-margin-right form-text"
							/>


							<input
								id="mail"
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="form-background-color form-text"
							/>
						</div>

						<textarea
							id="message"
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="form-background-color form-text"
						/>
						<button
							type="submit"
							onClick={handleClick}
							className={!clicked || status ? "submit-btn" : "btn-clicked"}
						>
							Envoyer
						</button>
					</div>
				</form>

				{status && <p class="status-msg">{status}</p>}
			</div>
			*/}
		</div>
	);
}

export default Contact;
