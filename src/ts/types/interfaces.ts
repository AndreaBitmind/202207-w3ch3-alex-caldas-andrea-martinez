export interface Icomponent {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface IRanking {
  element: HTMLElement;
}
