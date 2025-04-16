const team = [
  {
    name: "Apostle Thomas KUSI-APPIAH",
    title: "",
    image: "./img/woman1.jpg",
    socialLinks: {
      facebook: "https://facebook.com/grace.johnson",
      twitter: "https://twitter.com/grace_johnson",
      instagram: "https://instagram.com/grace.johnson",
    },
  },
  {
    name: "MR KWABENA NKANSAH SIMPEH",
    title: "DIRECTOR - RESEARCH AND TRAINING/REGISTRAR",
    image: "./img/kwabena.jpg",
    socialLinks: {
      facebook: "https://facebook.com/amadou.diallo",
      twitter: "https://twitter.com/amadou_diallo",
      instagram: "https://instagram.com/amadou.diallo",
    },
  },
  {
    name: "APOSTLE B. M GIBSON",
    title: "DIRECTOR - MEDIA &COMMUNICATION",
    image: "./img/gibson.jpg",
    socialLinks: {
      facebook: "https://facebook.com/francis.osei",
      twitter: "https://twitter.com/francis_osei",
      instagram: "https://instagram.com/francis.osei",
    },
  },
  {
    name: "EMELIA NAA HAMMOND",
    title: "DIRECTOR - INTERNATIONAL RELATIONS",
    image: "./img/emilia.jpg",
    socialLinks: {
      facebook: "https://facebook.com/anita.mensah",
      twitter: "https://twitter.com/anita_mensah",
      instagram: "https://instagram.com/anita.mensah",
    },
  },
];

const teamContainer = document.getElementById("team-container");

team.forEach((member) => {
  const memberCard = `
  

     <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <img src=${member.image} alt=${member.name} class="mx-auto mb-4 w-32 h-32 object-contain" />
        <h3 class="text-blue-700 font-semibold text-lg">${member.name}</h3>
        <p class="text-sm text-gray-500">${member.title}</p>
      </div>
  `;

  teamContainer.innerHTML += memberCard;
});

// <div class="bg-white rounded-lg shadow-md p-6 text-center">
//   <img
//     src="${member.image}"
//     alt="${member.name}"
//     class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
//   />
//   <h3 class="text-lg font-semibold">${member.name}</h3>
//   <p class="text-blue-600 text-sm font-medium mb-2">${member.title}</p>
//   <p class="text-sm text-gray-600 mb-4">${member.description}</p>
//   <div class="flex justify-center space-x-4">
//     <a
//       href="${member.socialLinks.facebook}"
//       target="_blank"
//       class="text-blue-600 hover:text-blue-800"
//     >
//       <i class="fab fa-facebook-f"></i>
//     </a>
//     <a
//       href="${member.socialLinks.twitter}"
//       target="_blank"
//       class="text-blue-400 hover:text-blue-600"
//     >
//       <i class="fab fa-twitter"></i>
//     </a>
//     <a
//       href="${member.socialLinks.instagram}"
//       target="_blank"
//       class="text-pink-500 hover:text-pink-700"
//     >
//       <i class="fab fa-instagram"></i>
//     </a>
//   </div>
// </div>;
