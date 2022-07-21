import { Icomponent } from "../../types/interfaces.js";

class Component implements Icomponent {
  element: HTMLElement;

  constructor(parent: HTMLElement, className: string, tagName: string) {
    this.element = document.createElement(tagName);
    parent.appendChild(this.element);
    this.element.className = className;
  }
}

export default Component;
