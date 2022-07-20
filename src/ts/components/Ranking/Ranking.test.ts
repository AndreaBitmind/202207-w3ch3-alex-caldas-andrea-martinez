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
  describe("When instantiated with 10 childs", () => {
    test("Then it should show a ul parent with 10 li", () => {
      const childAmount = 10;
      const child = new Ranking(childAmount);

      expect(child.element.childNodes.length).toEqual(childAmount);
    });
  });

  describe("When instantatied with 5 as li child elements", () => {
    test("Then it should show 5 li with icons inside", () => {});
  });
});
