import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import avatar from "../assets/Avatar_Instagram.jpg";
import signature from "../assets/Signature_2023.png";
import "../styles/navbar.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<div>
			<div className="navbar">
				<div className="navbar-left">
					<a href="/">
						<img src={avatar} alt="Krys avatar" className="avatar" />
					</a>
					<a href="/">
						<img src={signature} alt="Signature logo" className="signature" />
					</a>
				</div>

				<div className="navbar-center">
					<p>Christelle Revol</p>
				</div>

				<div className="navbar-right">
					<a href="/" className="liens-navbar">
						Web Development
					</a>
					{/* <a href="/storyboard" className="liens-navbar">Storyboard</a> */}
					<a href="/contact" className="liens-navbar">
						Contact
					</a>
				</div>

				{/* mobile */}
				<div className="mobile" onClick={toggleMenu}>
					<FontAwesomeIcon
						icon={faBars}
						className={`mobile-menu-logo ${menuOpen ? "clicked" : ""}`}
					/>
				</div>
			</div>

			{/* Menu mobile déroulant */}
			<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
				<a href="/" onClick={() => setMenuOpen(false)}>
					Web Development
				</a>
				<a
					href="/contact"
					onClick={() => setMenuOpen(false)}
					className="menu-up-bar"
				>
					Contact
				</a>
			</div>
		</div>
	);
}

export default Navbar;
