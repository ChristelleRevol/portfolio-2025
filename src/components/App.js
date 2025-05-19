import "../styles/App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShowAiDuel from "./ShowAiDuel";
import ParticlesBackground from "./ParticlesBackground";

function App() {
	if (window.location.pathname === "/") {
		return (
			<div
				style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
			>
				<ParticlesBackground /> {/* En premier, mais rendu en fond */}
				<div style={{ position: "relative", zIndex: 1 }}>
					<Navbar />
					<Home />
					<Footer />
				</div>
			</div>
		);
	}

	if (window.location.pathname === "/ai-duel") {
		return (
			<div
				style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
			>
				<ParticlesBackground />
				<div style={{ position: "relative", zIndex: 1 }}>
					<Navbar />
					<ShowAiDuel />
				</div>
			</div>
		);
	}
}

export default App;
