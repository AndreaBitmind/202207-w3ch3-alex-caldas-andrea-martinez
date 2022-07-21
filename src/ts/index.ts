/* eslint-disable no-new */
import Ranking from "./components/Ranking/Ranking.js";
import Card from "./components/Card/Card.js";
import series from "./components/series/series.js";

new Card(document.body, "nombre del poster", series[0]);
const li = document.querySelector("li");
new Ranking(li, 5);
