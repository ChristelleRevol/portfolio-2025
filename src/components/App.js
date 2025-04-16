import '../styles/App.css';
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
	if (window.location.pathname === "/") {
		return (
			<div>
				<Navbar />
				<Home />
			</div>
		);
	}
}

export default App;
