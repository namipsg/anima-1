import React from "react";
import ReactDOMClient from "react-dom/client";
import { RankingsMobile } from "./screens/RankingsMobile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RankingsMobile />);
