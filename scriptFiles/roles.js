const roles = [
  {
    title: "Assistant Coordinator",
    description:
      "The Assistant Coordinator supports the overall coordination of the institute's activities. They work closely with the coordinator and other team members to assist in planning and organizing training programs, managing logistics, coordinating schedules, and providing administrative support. They may also handle communication with participants, respond to inquiries, and assist in tracking program progress and evaluation.",
  },
  {
    title: "Deputy Coordinator",
    description:
      "The Deputy Coordinator will support the overall coordination and management of the institute's activities. They work closely with the coordinator and other team members to ensure the smooth functioning of various programmes and initiatives.",
  },
  {
    title: "Coordinator",
    description:
      "The Coordinator plays a central role in overseeing the day-to-day operations of the Leadership Training Institute. They are responsible for programme development, implementation, and evaluation. They work closely with team members, trainers, and participants to ensure smooth execution of training programs. The coordinator may be involved in curriculum design, identifying training needs, coordinating resources, managing budgets, and monitoring the overall quality and effectiveness of the institute's training initiatives.",
  },
  {
    title: "Principal Coordinator",
    description:
      "The Principal Coordinator typically holds a senior leadership position within the institute. They have a broader scope of responsibility and authority in shaping the institute's strategic direction, establishing partnerships, and ensuring alignment with organizational goals. The Principal Coordinator may be involved in high-level decision-making, managing key stakeholder relationships, representing the institute at conferences or events, and providing guidance and mentorship to the Coordinator and Assistant Coordinator.",
  },
  {
    title: "Chief Coordinator",
    description:
      "The Chief Coordinator is the highest-ranking position within the Leadership Training Institute. They provide executive leadership, vision, and strategic direction to the institute. The Chief Coordinator sets long-term goals, establishes policies and procedures, and oversees the overall functioning of the institute. They may be involved in building strategic partnerships, securing funding, and fostering collaborations with other organizations in the field of leadership development.",
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
        <div class="relative p-5 bg-primary20 opacity-80 rounded-lg text-center text-white flex flex-col items-center overflow-hidden">
  <!-- Circle -->
  <div class="absolute -top-8 bg-white text-black rounded-full w-24 h-24 flex items-center justify-center font-bold">
    ${item.title}
  </div>
  <!-- Card Content -->
  <p class="mt-12 text-base leading-relaxed">
    ${item.description}
  </p>
</div>`;

  // Append the card to the container
  rolesContainer.innerHTML += valueCard;
});
