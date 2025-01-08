document.addEventListener("DOMContentLoaded", () => {
  const values = [
    {
      title: "Excellence",
      description:
        "Pursuing the highest standards of quality, professionalism, and continuous improvement in all aspects of our work.",
      icon: "🪂",
    },
    {
      title: "Integrity",
      description:
        " Upholding honesty, transparency, and ethical conduct in all interactions and relationships.",
      icon: "🏅",
    },
    {
      title: "Collaboration",
      description:
        "Fostering a culture of teamwork, mutual respect, and inclusivity to achieve shared goals.",
      icon: "🤖",
    },
    {
      title: "Innovation",
      description:
        "Embracing creativity, adaptability, and forward-thinking to drive impactful and cutting-edge leadership practices.",
      icon: "💰",
    },
    {
      title: "Empowerment",
      description:
        "Nurturing the potential and self-belief of individuals, enabling them to lead with confidence and authenticity.",
      icon: "⚔️",
    },
    {
      title: "Service",
      description:
        "Committed to making a positive difference by serving communities with compassion, dedication, and a focus on uplifting others.",
      icon: "🤝",
    },
  ];

  const valuesContainer = document.getElementById("values");

  // Generate the cards
  values.forEach((item) => {
    const valueCard = `
        <div class="relative flex flex-col items-center text-center p-6 rounded-lg shadow text-wht">
  <div class="absolute inset-0 bg-darkpurple opacity-80 rounded-lg pointer-events-none"></div>
  <div class="relative z-10">
    <div class="icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>
</div>

      `;

    // Append the card to the container
    valuesContainer.innerHTML += valueCard;
  });
});
