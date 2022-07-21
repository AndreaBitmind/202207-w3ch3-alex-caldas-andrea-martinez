import { IRanking } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

class Ranking extends Component implements IRanking {
  childAmount;

  child: HTMLElement;

  clicked: MouseEvent;

  constructor(parent: HTMLElement, childAmount: number) {
    super(parent, "score", "ul");
    this.childAmount = childAmount;

    this.createList();
  }

  createList(): void {
    for (let i = 1; i <= this.childAmount; i += 1) {
      this.child = document.createElement("li");
      this.child.className = "score__star";

      const icon = document.createElement("i");
      icon.className = "icon-score far fa-star";

      icon.title = `${i}/${this.childAmount}`;

      this.child.appendChild(icon);
      this.element.appendChild(this.child);

      this.child.addEventListener("click", (e) => {
        this.clicked = e;
        this.click();
      });
    }
  }

  click(): void {
    const target = this.clicked.target as HTMLElement;
    const range = target.parentNode.parentNode;
    const value = target.getAttribute("title");
    const position = value.slice(0, 1);

    for (let i = 0; i <= range.childNodes.length; i += 1) {
      if (i < Number(position)) {
        range.children[i].children[0].classList.remove("far");
        range.children[i].children[0].classList.add("fas");
      } else {
        range.children[i].children[0].classList.add("far");
        range.children[i].children[0].classList.remove("fas");
      }
    }
  }
}

export default Ranking;
