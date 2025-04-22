import avatar from '../assets/Avatar_Instagram.jpg';
import signature from "../assets/Signature_2023.png";
import "../styles/navbar.css";

function Navbar() {
    return (
        <div class="navbar">
            <div class="navbar-left">
                <img src={avatar} alt="Krys avatar" class="avatar"/>
                <img src={signature} alt="Signature logo" class="signature"/>
            </div>
            <div class="navbar-center">
                <p>Christelle Revol</p>
            </div>
            <div class="navbar-right">
                <a href="/" class="liens-navbar">Web Development</a>
                <a href="/storyboard" class="liens-navbar">Storyboard</a>
                <a href="/contact" class="liens-navbar">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;