import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
