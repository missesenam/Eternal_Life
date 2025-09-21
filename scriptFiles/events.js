const events = [
  {
    title: "Leadership Summit 2025",
    date: "March 10, 2025",
    location: "Accra, Ghana",
    img: "./img/leadership.jpg",
    description:
      "Join us for an inspiring summit with top leaders and mentors.",
  },
  {
    title: "Youth Empowerment Bootcamp",
    date: "April 5, 2025",
    location: "Kumasi, Ghana",
    img: "./img/leadership.jpg",
    description:
      "A one-week intensive bootcamp to build confidence and skills in young leaders.",
  },
  {
    title: "Annual Praise & Worship Night",
    date: "June 12, 2025",
    location: "Takoradi, Ghana",
    img: "./img/leadership.jpg",
    description:
      "An unforgettable night of worship, music, and spiritual revival.",
  },
];

const eventsContainer = document.getElementById("events-container");

events.forEach((event) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition";

  card.innerHTML = `
    <img src="${event.img}" alt="${event.title}" class="w-full h-48 object-cover"/>
    <div class="p-4">
      <h3 class="text-xl font-bold text-darkpurple">${event.title}</h3>
      <p class="text-gray-600 text-sm mt-1"><b>Date:</b> ${event.date}</p>
      <p class="text-gray-600 text-sm"><b>Location:</b> ${event.location}</p>
      <p class="text-gray-700 mt-2">${event.description}</p>
    </div>
  `;

  eventsContainer.appendChild(card);
});
