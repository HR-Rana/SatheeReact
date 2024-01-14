import "../src/assets/Css/Style.css";
import './assets/Css/responsive.css'
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./CommonComponents/Routing/Routing";
import logo from "./assets/Images/logo/logo.png"
import Navbar from "./CommonComponents/Layout/Navbar";
import Footer from "./CommonComponents/Layout/Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Router />
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
