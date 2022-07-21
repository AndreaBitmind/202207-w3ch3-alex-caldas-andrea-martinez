/* eslint-disable import/extensions */
import Ranking from "./Ranking";

/* 
- un ranking debe crear un elemento ul padre de múltiples elementos li 
- un raking debe mostrar una lista de iconos
- cuando el usuario haga clic en el icono, cambia a estilo opaco
- cuando un icono es seleccionada, los iconos de su izquierda cambian de estado con ella
- cuando un icono es seleccionada, los iconos de su derecha cambian al color opuesto
- cuando el usuario hace clic en el icono, modifica el valor de la propiedad score pertinente en el array "series"                                         
 */

describe("Given a Ranking component", () => {
  const div = document.createElement("div");
  describe("When instantiated with 10 childs", () => {
    test("Then it should show a ul parent with 10 li", () => {
      const childAmount = 10;
      const parent = new Ranking(div, childAmount);

      expect(parent.element.childNodes.length).toEqual(childAmount);
    });
  });

  describe("When instantatied with 1 as li child elements", () => {
    test("Then it should show 1 li with icons inside", () => {
      const childAmount = 1;
      const parent = new Ranking(div, childAmount);
      const firstChild = parent.element.getElementsByTagName("li")[0];
      const icon = firstChild.getElementsByTagName("i");

      expect(icon.length).toBe(1);
      expect(icon[0].getAttribute("class")).toBe("icon-score far fa-star");
    });
  });
});
