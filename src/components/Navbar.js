import avatar from '../assets/Avatar_Instagram.jpg';
import signature from "../assets/Signature_2023.png";

function Navbar() {
    return (
        <div>
            <div>
                <img src={avatar} alt="Krys avatar" width="300px" height="300px"/>
                <img src={signature} alt="Signature logo" width="300px" height="150px"/>
            </div>
            <div>
                <a href="/">Web Development</a>
                <a href="/storyboard">Storyboard</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;