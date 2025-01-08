const team = [
  {
    name: "Apostle Thomas Appiah kubi",
    title: "Software Engineer",
    description:
      "Grace is a full-stack developer with a passion for building scalable web applications. She enjoys working on innovative projects that solve real-world problems.",
    image: "./img/businessman.webp",
    socialLinks: {
      facebook: "https://facebook.com/grace.johnson",
      twitter: "https://twitter.com/grace_johnson",
      instagram: "https://instagram.com/grace.johnson",
    },
  },
  {
    name: "Amadou Diallo",
    title: "UI/UX Designer",
    description:
      "Amadou specializes in creating intuitive and visually appealing designs. He is an expert in user-centered design principles and loves collaborating with developers.",
    image: "./img/businessman.webp",
    socialLinks: {
      facebook: "https://facebook.com/amadou.diallo",
      twitter: "https://twitter.com/amadou_diallo",
      instagram: "https://instagram.com/amadou.diallo",
    },
  },
  {
    name: "Francis Osei",
    title: "Project Manager",
    description:
      "Francis has over a decade of experience in managing large-scale projects. He ensures seamless coordination and timely delivery of projects.",
    image: "./img/businessman.webp",
    socialLinks: {
      facebook: "https://facebook.com/francis.osei",
      twitter: "https://twitter.com/francis_osei",
      instagram: "https://instagram.com/francis.osei",
    },
  },
  {
    name: "Anita Mensah",
    title: "Marketing Specialist",
    description:
      "Anita is a data-driven marketer who creates impactful campaigns to drive business growth. She is skilled in digital marketing and social media strategy.",
    image: "./img/businessman.webp",
    socialLinks: {
      facebook: "https://facebook.com/anita.mensah",
      twitter: "https://twitter.com/anita_mensah",
      instagram: "https://instagram.com/anita.mensah",
    },
  },
];

const teamContainer = document.getElementById("team-container");

team.forEach((member) => {
  //   const memberCard = document.createElement("div");
  //   memberCard.className =
  // "flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto";

  const memberCard = `
  <div class="flex items-center bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
    <!-- Image -->
    <img
      src="${member.image}"
      alt="${member.name}"
      class="w-24 h-24 rounded-full shadow-lg mr-6"
    />
    
    <!-- Content -->
    <div class="flex flex-col">
      <!-- Name -->
      <h2 class="text-xl font-bold text-gray-800">${member.name}</h2>

      <!-- Title -->
      <p class="text-sm text-primary40 italic">${member.title}</p>

      <!-- Description -->
      <p class="mt-2 text-gray-600 text-sm">
        ${member.description}
      </p>

      <!-- Social Icons -->
      <div class="mt-4 flex space-x-4">
        <a href="${member.socialLinks.facebook}" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 hover:text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.792.142v3.24h-1.917c-1.505 0-1.796.716-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a href="${member.socialLinks.twitter}" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 hover:text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.833.656-2.828.775a4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.922 4.922 0 00-8.388 4.482c-4.088-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 00-.664 2.475 4.921 4.921 0 002.19 4.1 4.902 4.902 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.901 4.901 0 01-2.224.084 4.924 4.924 0 004.604 3.417A9.866 9.866 0 010 21.542a13.936 13.936 0 007.548 2.212c9.051 0 14.004-7.496 14.004-13.986 0-.213-.004-.425-.013-.637A10.025 10.025 0 0024 4.557z" />
          </svg>
        </a>
        <a href="${member.socialLinks.instagram}" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600 hover:text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.976.976 1.254 2.243 1.316 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.316 3.608-.976.976-2.243 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.316-.976-.976-1.254-2.243-1.316-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608.976-.976 2.243-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.053.072 5.775.13 4.548.405 3.565 1.388c-.983.983-1.259 2.21-1.317 3.488C2.014 5.668 2 6.077 2 12s.014 6.332.072 7.611c.058 1.278.334 2.505 1.317 3.488.983.983 2.21 1.259 3.488 1.317C8.332 23.986 8.741 24 12 24s3.668-.014 4.947-.072c1.278-.058 2.505-.334 3.488-1.317.983-.983 1.259-2.21 1.317-3.488.058-1.278.072-1.687.072-7.611s-.014-6.332-.072-7.611c-.058-1.278-.334-2.505-1.317-3.488-.983-.983-2.21-1.259-3.488-1.317C15.668.014 15.259 0 12 0zM12 5.838A6.162 6.162 0 015.838 12 6.162 6.162 0 0112 18.162 6.162 6.162 0 0118.162 12 6.162 6.162 0 0112 5.838zm0 10.324A4.162 4.162 0 007.838 12 4.162 4.162 0 0012 7.838 4.162 4.162 0 0016.162 12 4.162 4.162 0 0012 16.162zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
`;

  //   teamContainer.appendChild(memberCard);
  teamContainer.innerHTML += memberCard;
});
