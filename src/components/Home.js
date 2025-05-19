import "../styles/home.css";
import AiDuel from "./Ai-duel.js";
import CharactRbnb from "./Charact-rbnb.js";
import "@dotlottie/player-component";

import ruby from "../assets/Logos/ruby.png";
import rails from "../assets/Logos/rails.png";
import html from "../assets/Logos/HTML.png";
import css from "../assets/Logos/CSS.png";
import javascript from "../assets/Logos/JavaScript.png";
import figma from "../assets/Logos/Figma.png";
import bootstrap from "../assets/Logos/Bootstrap.png";
import react from "../assets/Logos/react.png";
import heroku from "../assets/Logos/heroku.png";
import sql from "../assets/Logos/Sql.png";
import ubuntu from "../assets/Logos/ubuntu.png";
import stimulus from "../assets/Logos/stimulus.png";

import mapbox from "../assets/Logos/mapbox.png";
import openai from "../assets/Logos/openai.png";
import mistral from "../assets/Logos/Mistral.png";
import claude from "../assets/Logos/claude.png";
import openweather from "../assets/Logos/openweather.png";
import cloudinary from "../assets/Logos/cloudinary.png";

function Home() {
	console.log("width: ", window.innerWidth);

	return (
		<div class="container">
			<div class="introduction">
				<p>
					Bonjour, je suis Christelle Revol!
					<p />
					Storyboardeuse et illustratrice reconvertie dans le développement web
					fullstack, J'ai à cœur de mettre mes compétences au services de
					projets innovants alliant technologie et lucidité sur les enjeux de
					demain
				</p>
			</div>
			<div class="intro-paragraphe-2">
				<p>
					Mon intérêt pour le développement informatique, nourris par un réseau
					de proche et d'amis majoritairement dans le domaine de la tech, m'a
					confortée dans mon désir de reconversion dans ce milieu.
					<br />
					Pour suivre ce nouveau parcours, j'ai effectué un apprentissage en
					autodidacte et en formation de développement web fullstack auprès du
					Wagon où j'ai pu mettre à contribution mes connaisances de différents
					langages et frameworks sur des projets stimulants.
				</p>
			</div>
			<div class="lists-container">
				<div class="soft-fr-list">
					<h3>Langages, Frameworks et Outils</h3>
					<div>
						<ul>
							<li>
								Ruby
								<img src={ruby} alt="ruby" class="softw-logo-small" />
							</li>
							<li>
								Rails
								<img src={rails} alt="rails" class="softw-logo-small" />
							</li>
							<li>
								Javascript
								<img
									src={javascript}
									alt="javascript"
									class="softw-logo-small"
								/>
							</li>
							<li>
								React
								<img src={react} alt="react" class="softw-logo-small" />
							</li>
							<li>
								Stimulus
								<img src={stimulus} alt="stimulus" class="softw-logo-small" />
							</li>
							<li>
								HTML
								<img src={html} alt="html" class="softw-logo-small" />
							</li>
							<li>
								CSS
								<img src={css} alt="css" class="softw-logo-small" />
							</li>
							<li>
								Bootstrap
								<img src={bootstrap} alt="bootstrap" class="softw-logo-small" />
							</li>
							<li>
								SQL
								<img src={sql} alt="sql" class="softw-logo-small" />
							</li>
							<li>
								Ubuntu
								<img src={ubuntu} alt="ubuntu" class="softw-logo-small" />
							</li>
							<li>
								Heroku
								<img src={heroku} alt="heroku" class="softw-logo-small" />
							</li>
							<li>
								Figma
								<img src={figma} alt="figma" class="softw-logo-small" />
							</li>
						</ul>
					</div>
				</div>
				<div class="soft-fr-list">
					<h3>API utilisées</h3>
					<div>
						<ul>
							<li>
								OpenAI
								<img src={openai} alt="openAI" class="softw-logo-small" />
							</li>
							<li>
								Mistral
								<img src={mistral} alt="mistral" class="softw-logo-small" />
							</li>
							<li>
								Claude
								<img src={claude} alt="claude" class="softw-logo-small" />
							</li>
							<li>
								Cloudinary
								<img
									src={cloudinary}
									alt="cloudinary"
									class="softw-logo-small"
								/>
							</li>
							<li>
								Mapbox
								<img src={mapbox} alt="mapbox" class="softw-logo-small" />
							</li>
							<li>
								OpenWeatherMap
								<img
									src={openweather}
									alt="openweather"
									class="softw-logo-small"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<AiDuel />
			<CharactRbnb />
		</div>
	);
}

export default Home;
