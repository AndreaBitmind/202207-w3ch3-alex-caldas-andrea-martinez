class Ranking {
  constructor(childAmount: number) {
    const container = document.createElement("ul");
    for (let i = 0; i < childAmount; i += 1) {
      const child = document.createElement("li");
      container.appendChild(child);
    }

    document.body.appendChild(container);
  }
}

export default Ranking;
