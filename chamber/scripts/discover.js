fetch("discover.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("pageTitle").textContent = data.title;
    document.getElementById("pageIntro").textContent = data.intro;

    const grid = document.getElementById("highlightsGrid");

    data.highlights.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("item");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;

      grid.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
