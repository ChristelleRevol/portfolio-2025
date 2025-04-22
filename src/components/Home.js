import "../styles/home.css";

import ruby from '../assets/Logos/ruby.png';
import rails from '../assets/Logos/rails.png';
import html from '../assets/Logos/HTML.png';
import css from '../assets/Logos/CSS.png';
import javascript from '../assets/Logos/JavaScript.png';
import figma from '../assets/Logos/Figma.png';
import bootstrap from '../assets/Logos/Bootstrap.png';
import trello from '../assets/Logos/trello.png';
import heroku from '../assets/Logos/heroku.png';
import sql from '../assets/Logos/Sql.png';
import ubuntu from '../assets/Logos/ubuntu.png';
import stimulus from '../assets/Logos/stimulus.png';

function Home() {
    return (

        <div class="container">
            <div class="introduction">
                <p>
                    Bonjour, je suis Christelle Revol! 
                    <p></p>
                    Storyboardeuse et illustratrice pendant 5 ans où j'ai développé mes compétences en créativité, adaptabilité et collaboration en équipe,
                    J'ai choisi de débuter une nouvelle aventure professionelle dans le développement web.
                    <p></p>
                    Ce choix du domaine de la tech résulte d'une évolution naturelle, car j'ai toujours un certain lien avec ce domaine grâce à de 
                    nombreuses personnes de mon entourage travaillant dans ce secteur. Ma curiosité pour cette industrie s'est donc muée en volonté 
                    d'y prendre part à mon tour.
                    <br/>
                    Pour m'aider dans cette reconversion, j'ai choisi de suivre une formation intensive de 9 semaines en développement web avec Le Wagon.
                    J'ai ainsi appris à:
                </p>
                <ul>
                    <li>Coder du <span class="orange-text">back-end</span> avec <span class="orange-text">Ruby on Rails</span> </li>
                    <li>Le développement <span class="orange-text">front-end</span> avec <span class="orange-text">HTML, CSS</span> et <span class="orange-text">Javascript</span>, ainsi que les frameworks <span class="orange-text">React, Vue</span> et <span class="orange-text">Stimulus</span> </li>
                    <li>Créer et gérer des <span class="orange-text">databases</span> et le langage <span class="orange-text">SQL</span> </li>
                    <li>Gérer des projets et leur déploiement avec <span class="orange-text">Github</span> et <span class="orange-text">Heroku</span> </li>
                    <li>Faire des <span class="orange-text">appels d'api</span>, avec <span class="orange-text">Mapbox, Cloudinary, OpenAI, Anthropic</span> et <span class="orange-text">Mistral</span> </li>
                    <li>Et enfin, <span class="orange-text">travailler en groupe</span> sur des <span class="orange-text">projets d'applications dynamiques et motivants</span> </li>
                </ul>
                <p>Voici ces projets:</p>
            </div>
            <div>
                <div>
                    <img src={ruby} alt="ruby"/>
                    <img src={rails} alt="rails"/>
                </div>
            </div>
        </div>

    )
}

export default Home;