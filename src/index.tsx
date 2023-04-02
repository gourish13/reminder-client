import React from "react";
import { Root, createRoot } from "react-dom/client";
import App from "./App";

const container: HTMLElement | null = document.getElementById("root");
const root: Root = createRoot(container as Element)
root.render(<App />);