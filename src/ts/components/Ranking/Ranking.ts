import { IRanking } from "../../types/interfaces.js";

class Ranking implements IRanking {
  element: HTMLElement;

  constructor(childAmount: number) {
    this.element = document.createElement("ul");
    this.element.className = "score";
    for (let i = 1; i <= childAmount; i += 1) {
      const child = document.createElement("li");
      child.className = "score__star";
      const icon = document.createElement("i");
      icon.className = "icon-score far fa-star";
      icon.title = `${i}/${childAmount}`;
      child.appendChild(icon);
      this.element.appendChild(child);
    }
    document.body.appendChild(this.element);
  }
}

export default Ranking;
