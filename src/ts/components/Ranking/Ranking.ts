class Ranking {
  constructor(childAmount: number) {
    const container = document.createElement("ul");
    container.className = "score";
    for (let i = 1; i <= childAmount; i += 1) {
      const child = document.createElement("li");
      child.className = "score__star";
      const icon = document.createElement("i");
      icon.className = "icon-score far fa-star";
      icon.title = `${i}/${childAmount}`;
      child.appendChild(icon);
      container.appendChild(child);
    }

    document.body.appendChild(container);
  }
}

export default Ranking;
