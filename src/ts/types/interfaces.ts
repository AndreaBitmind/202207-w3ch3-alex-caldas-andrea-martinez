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

export interface Serie {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}
export type ISeries = Serie[];
