/* eslint-disable no-new */
import Ranking from "./components/Ranking/Ranking.js";

const div = document.createElement("div");
document.body.appendChild(div);
new Ranking(div, 5);
