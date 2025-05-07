import "../styles/ai-duel.css";
import AiAnim from "./Ai-anim";
import "@dotlottie/player-component";

import ruby from "../assets/Logos/ruby.png";
import rails from "../assets/Logos/rails.png";
import html from "../assets/Logos/HTML.png";
import css from "../assets/Logos/CSS.png";
import javascript from "../assets/Logos/JavaScript.png";
import figma from "../assets/Logos/Figma.png";
import bootstrap from "../assets/Logos/Bootstrap.png";
import trello from "../assets/Logos/trello.png";
import heroku from "../assets/Logos/heroku.png";
import sql from "../assets/Logos/Sql.png";
import ubuntu from "../assets/Logos/ubuntu.png";
import stimulus from "../assets/Logos/stimulus.png";
import photoshop from "../assets/Logos/photoshop.png";
import illustrator from "../assets/Logos/illustrator.png";

import board from "../assets/Screenshots/Board.jpg";
import prompt_card from "../assets/Screenshots/prompt_card.jpg";
import app_logo from "../assets/Logo_AI-Duel.svg";

function AiDuel() {
	return (
		<div>
			<div class="project-title-div">
				<h2 class="project-title">AI-Duel</h2>
			</div>
			<div class="project-container">
				<div class="flex-up">
					<div class="softw-container box-shadow-blue">
						<img src={ruby} alt="ruby" class="softw-logo" />
						<img src={rails} alt="rails" class="softw-logo" />
						<img src={html} alt="html" class="softw-logo" />
						<img src={css} alt="css" class="softw-logo" />
						<img src={bootstrap} alt="bootstrap" class="softw-logo" />
						<img src={javascript} alt="javascript" class="softw-logo" />
						<img src={stimulus} alt="stimulus" class="softw-logo" />
						<img src={sql} alt="sql" class="softw-logo" />
						<img src={heroku} alt="heroku" class="softw-logo" />
						<img src={ubuntu} alt="ubuntu" class="softw-logo" />
						<img src={figma} alt="figma" class="softw-logo" />
						<img src={trello} alt="trello" class="softw-logo" />
						<img src={photoshop} alt="photoshop" class="softw-logo" />
						<img src={illustrator} alt="illustrator" class="softw-logo" />
					</div>
					<div class="screen-container">
						<img
							src={board}
							alt="board page"
							class="screen-board box-shadow-blue"
						/>
					</div>
				</div>
				<div class="flex-down">
					<div class="anim-container box-shadow-blue">
						<AiAnim />
					</div>
					<div class="prompt-card-container">
						<img
							src={prompt_card}
							alt="ai prompt card"
							class="prompt-card box-shadow-blue"
						/>
					</div>
					<div class="ai-logo-container">
						<img
							src={app_logo}
							alt="ai prompt card"
							class="ai-logo box-shadow-blue"
						/>

						<script
							src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
							type="module"
						/>
						<div class="lottie-wrapper">
							<dotlottie-player
								src="https://lottie.host/89b76ae4-77a1-43cf-ad50-9f1462bff76b/gAv3jjACH6.lottie"
								background="transparent"
								speed="1"
								style={{ height: "160px" }}
								loop
								autoplay
								id="anim"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AiDuel;
