import '../styles/App.css';
import Home from "./Home";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground"

function App() {
	if (window.location.pathname === "/") {
		return (
			<div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
			<ParticlesBackground /> {/* En premier, mais rendu en fond */}
			<div style={{ position: "relative", zIndex: 1 }}>
			  <Navbar />
			  <Home />
			</div>
		  </div>
		);
	}
}

export default App;
