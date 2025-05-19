import React, { useEffect, useRef } from "react";
import "../styles/charact-rbnb.css";

import ruby from "../assets/Logos/ruby.png";
import rails from "../assets/Logos/rails.png";
import html from "../assets/Logos/HTML.png";
import css from "../assets/Logos/CSS.png";
import javascript from "../assets/Logos/JavaScript.png";
import figma from "../assets/Logos/Figma.png";
import bootstrap from "../assets/Logos/Bootstrap.png";
import trello from "../assets/Logos/trello.png";
import ubuntu from "../assets/Logos/ubuntu.png";
import stimulus from "../assets/Logos/stimulus.png";
import photoshop from "../assets/Logos/photoshop.png";
import illustrator from "../assets/Logos/illustrator.png";

import index from "../assets/Screenshots/charact'rbnb/index_chars.jpg";
import char_card from "../assets/Screenshots/charact'rbnb/char_card.jpg";
import booking_card from "../assets/Screenshots/charact'rbnb/booking_card.jpg";
import app_logo from "../assets/Logo_Charabnb_vector_detailled.svg";

function CharactRbnb() {
	const titleRef = useRef(null); // ref pour accéder à l'élément DOM

	useEffect(() => {
		const handleScroll = () => {
			const title = titleRef.current;
			if (!title) return;

			const rect = title.getBoundingClientRect();
			const centerY = rect.top + rect.height / 2;
			const viewportHeight = window.innerHeight;

			const centerScreen = viewportHeight / 2;

			if (centerY <= centerScreen) {
				// Quand on est au-dessus du centre (scroll vers le bas), barre à largeur max
				title.style.setProperty("--underline-extra-width", "60vw");
			} else {
				// Quand on est en dessous du centre (scroll vers le haut), barre rétrécit linéairement
				const progress = 1 - (centerY - centerScreen) / centerScreen;
				const clamped = Math.max(0, Math.min(progress, 1));
				const width = 60 * clamped;
				title.style.setProperty("--underline-extra-width", `${width}vw`);
			}
		};

		// Appelle au scroll
		window.addEventListener("scroll", handleScroll);

		// Appelle une fois au montage pour initialiser
		handleScroll();

		// Nettoyage de l'event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div class="project-title-div">
				<h2 class="project-title" ref={titleRef}>
					Charact'Rbnb
				</h2>
			</div>
			<div class="project-char-container">
				<div class="flex-left">
					<div class="char-softw-container box-shadow-blue">
						<img src={ruby} alt="ruby" class="char-softw-logo" />
						<img src={rails} alt="rails" class="char-softw-logo" />
						<img src={html} alt="html" class="char-softw-logo" />
						<img src={css} alt="css" class="char-softw-logo" />
						<img src={bootstrap} alt="bootstrap" class="char-softw-logo" />
						<img src={javascript} alt="javascript" class="char-softw-logo" />
						<img src={stimulus} alt="stimulus" class="char-softw-logo" />
						<img src={ubuntu} alt="ubuntu" class="char-softw-logo" />
						<img src={figma} alt="figma" class="char-softw-logo" />
						<img src={trello} alt="trello" class="char-softw-logo" />
						<img src={photoshop} alt="photoshop" class="char-softw-logo" />
						<img src={illustrator} alt="illustrator" class="char-softw-logo" />
					</div>
					<div class="char-card-container">
						<img
							src={char_card}
							alt="character card"
							class="char-card box-shadow-blue"
						/>
					</div>
				</div>
				<div class="flex-right">
					<div class="char-screen-container">
						<img
							src={index}
							alt="characters list page"
							class="char-screen-board box-shadow-blue"
						/>
					</div>
					<div class="flex-bottom-char">
						<div class="booking-card-container">
							<img
								src={booking_card}
								alt="booking card"
								class="booking-card box-shadow-blue"
							/>
						</div>
						<div class="logo-container">
							<img
								src={app_logo}
								alt="charact'rbnb logo"
								class="charact-rbnb-logo box-shadow-blue"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CharactRbnb;
