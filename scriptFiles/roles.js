const roles = [
  {
    title: "Assistant Coordinator",
    description:
      "The Assistant Coordinator supports the overall coordination of the institute's activities. They work closely with the coordinator and other team members to assist in planning and organizing training programs, managing logistics, coordinating schedules, and providing administrative support. They may also handle communication with participants, respond to inquiries, and assist in tracking program progress and evaluation.",
  },
  {
    title: "Coordinator",
    description:
      "The Coordinator plays a central role in overseeing the day-to-day operations of the Leadership Training Institute. They are responsible for programme development, implementation, and evaluation. They work closely with team members, trainers, and participants to ensure smooth execution of training programs. The coordinator may be involved in curriculum design, identifying training needs, coordinating resources, managing budgets, and monitoring the overall quality and effectiveness of the institute's training initiatives.",
  },

  {
    title: "Facilitator",
    description:
      "Facilitators play a crucial role in delivering training programmes and workshops. They possess subject matter expertise and facilitate learning experiences by engaging participants in interactive discussions, activities, and exercises. Facilitators create a positive and inclusive learning environment, provide guidance and support, and help participants develop their leadership skills. They may also contribute to curriculum development, adapt training materials, and assess participant progress.",
  },
];

const rolesContainer = document.getElementById("roles");

// Generate the cards
roles.forEach((item) => {
  const valueCard = `
        <div class="relative p-5 bg-gray-200  rounded-lg text-center text-white flex flex-col items-center overflow-hidden">
  <!-- Circle -->
  <div class="absolute -top-8 bg-wht text-blk rounded-full w-24 h-24 flex items-center justify-center font-bold">
    ${item.title}
  </div>
  <!-- Card Content -->
  <p class="mt-12 text-base leading-relaxed text-gray-700">
    ${item.description}
  </p>
</div>`;

  // Append the card to the container
  rolesContainer.innerHTML += valueCard;
});
