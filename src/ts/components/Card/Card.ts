/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Icomponent, Serie } from "../../types/interfaces.js";
import Component from "../Component/Component.js";

class Card extends Component implements Icomponent {
  namePoster: string;

  constructor(parent: HTMLElement, namePoster: string, private serie: Serie) {
    super(parent, "serie", "li");

    this.namePoster = namePoster;

    this.render();
  }

  render(): void {
    const html = `
    <img class="serie__poster" src="${this.serie.poster}" alt="${this.namePoster}" />
    <h4 class="serie__title">${this.serie.name}</h4>
    <p class="serie__info">${this.serie.creator} ${this.serie.year}</p>
    `;
    this.element.innerHTML = html;
  }
}

export default Card;
