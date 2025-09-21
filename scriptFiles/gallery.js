const galleryImages = [
  {
    url: "./img/index.jpg",
    title: "Event One",
  },
  {
    url: "./img/index.jpg",
    title: "Event Two",
  },
  {
    url: "./img/index.jpg",
    title: "Workshop",
  },
  {
    url: "./img/index.jpg",
    title: "Leadership Training",
  },
  {
    url: "./img/index.jpg",
    title: "Community Impact",
  },
  {
    url: "./img/index.jpg",
    title: "Youth Program",
  },
  {
    url: "./img/index.jpg",
    title: "Retreat",
  },
  {
    url: "./img/index.jpg",
    title: "Praise Night",
  },
  {
    url: "./img/index.jpg",
    title: "Training Session",
  },
];

const galleryGrid = document.getElementById("galleryGrid");

galleryImages.forEach((img) => {
  const card = document.createElement("div");
  card.className =
    "relative group overflow-hidden rounded-lg shadow-lg cursor-pointer";

  card.innerHTML = `
          <img src="${img.url}" alt="${img.title}"
            class="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"/>
          <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <p class="text-white font-bold text-lg">${img.title}</p>
          </div>
        `;

  galleryGrid.appendChild(card);
});

// auto update year
document.getElementById("year").textContent = new Date().getFullYear();
