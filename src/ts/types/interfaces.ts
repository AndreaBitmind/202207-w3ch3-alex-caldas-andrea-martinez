export interface Icomponent {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface IRanking {
  childAmount: number;
  child: HTMLElement;

  createList?: () => void;
  addEventListener?: () => void;
}
