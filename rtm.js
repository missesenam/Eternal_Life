const rolesAndResponsibilities = [
  {
    title: "Research Planning and Execution",
    description:
      "Develops research plans and strategies aligned with the institute's goals. Identifies research topics, designs methodologies, collects and analyzes data, and prepares reports or publications.",
  },
  {
    title: "Training Program Development",
    description:
      "Collaborates with subject matter experts to develop training programs. Identifies training needs, designs curriculum, creates materials, and incorporates instructional techniques and technologies.",
  },
  {
    title: "Training Delivery and Facilitation",
    description:
      "Facilitates or delivers training sessions, including workshops, seminars, or webinars. Ensures sessions are engaging, interactive, and meet learning objectives.",
  },
  {
    title: "Research and Training Evaluation",
    description:
      "Designs evaluation mechanisms to assess the effectiveness of research projects and training programs. Collects feedback, measures outcomes, and improves activities based on evaluation data.",
  },
  {
    title: "Collaboration and Partnerships",
    description:
      "Establishes collaborations with external organizations and institutions. Explores joint training initiatives, invites guest speakers, and fosters knowledge exchange.",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensures research and training programs meet quality standards. Develops and monitors quality assurance processes, reviews materials, and maintains high standards of excellence.",
  },
  {
    title: "Stay Current with Research and Training Trends",
    description:
      "Keeps up to date with the latest trends, practices, and innovations in leadership research and training methodologies. Incorporates advancements into research and training practices.",
  },
  {
    title: "Project Management and Coordination",
    description:
      "Oversees the planning, coordination, and execution of research and training projects. Manages timelines, allocates resources, and ensures delivery on schedule and within budget.",
  },
  {
    title: "Team Leadership and Development",
    description:
      "Leads a team of researchers, trainers, or assistants. Provides guidance, support, and mentorship while fostering a collaborative and productive work environment.",
  },
];

const valuesContainer = document.getElementById("rtm");

// Generate the cards
rolesAndResponsibilities.forEach((item) => {
  const valueCard = `
        <div class="bg-gray-300 p-4 rounded-md shadow-md">
  <h4 class="font-semibold text-pink">${item.title}</h4>
  <p class="text-gray-700 text-sm">
    ${item.description}
  </p>
</div>
      `;

  // Append the card to the container
  valuesContainer.innerHTML += valueCard;
});
