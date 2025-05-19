import "../styles/Footer.css";

import linkedin from "../assets/Logos/Linkedin_logo_white.png";
import github from "../assets/Logos/Github_logo.png";
import signature from "../assets/Signature_2023.png";

function Footer() {
	return (
		<div class="footer-container">
			<img src={signature} alt="signature" class="footer-name" />
			<div class="footer-logo-container">
				<a
					href="https://fr.linkedin.com/in/christelle-revol-458923130"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={linkedin} alt="linkedin link" class="footer-logo" />
				</a>
				<a
					href="https://github.com/ChristelleRevol"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={github} alt="github link" class="footer-logo" />
				</a>
			</div>
			<a href="/contact" class="contact-btn">
				Contact
			</a>
		</div>
	);
}

export default Footer;
