import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./CommonComponents/Routing/Routing";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <RouterProvider Router={Router}>
			
		</RouterProvider> */}
		<App />
	</React.StrictMode>
);
