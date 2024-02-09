import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { LinkScrollContext } from "./LinkScrollContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<LinkScrollContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</LinkScrollContext>
);
