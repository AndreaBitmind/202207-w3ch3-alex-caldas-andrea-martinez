import Ranking from "./Ranking.js";

/* 
- un raking debe crear un elemento ul padre de múltiples elementos li que cada uno contiene un icono
- un raking debe mostrar una lista de iconos
- cuando el usuario haga clic en el icono, cambia a estilo opaco
- cuando un icono es seleccionada, los iconos de su izquierda cambian de estado con ella
- cuando un icono es seleccionada, los iconos de su derecha cambian al color opuesto
- cuando el usuario hace clic en el icono, modifica el valor de la propiedad score pertinente en el array "series"                                         
 */

describe("Given a Ranking component", () => {
  describe("When instantiated anywhere", () => {
    test("Then it should show a ul parent with multiple li", () => {
      const childAmount = 10;

      const ranking = new Ranking(childAmount);
      const ulParent = ranking.element.querySelector("ul");
    });
  });

  describe("When instantatied with 5 as li child elements", () => {
    test("Then it should show 5 li with icons inside", () => {});
  });
});
