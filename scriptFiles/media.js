const mediaAndCommunicationsResponsibilities = [
  {
    title: "Developing and Implementing Communication Strategies",
    description:
      "Responsible for creating comprehensive strategies that align with the organization's objectives. Tasks include identifying target audiences, crafting messages, and selecting suitable communication channels.",
  },
  {
    title: "Managing Media Relations",
    description:
      "Builds and maintains relationships with media outlets, journalists, and influencers. Acts as the organization's spokesperson, manages inquiries, arranges interviews, and oversees press events.",
  },
  {
    title: "Content Creation and Management",
    description:
      "Creates engaging content for platforms such as press releases, articles, blogs, social media, and websites. Ensures consistency with the organization's brand identity.",
  },
  {
    title: "Crisis Communication",
    description:
      "Handles communication during crises to protect the organization's reputation. Develops crisis plans, delivers timely information to stakeholders, and manages media inquiries effectively.",
  },
  {
    title: "Internal Communication",
    description:
      "Facilitates effective communication within the organization through newsletters, memos, or intranet platforms. Aims to foster a positive and informed organizational culture.",
  },
  {
    title: "Monitoring and Analysis",
    description:
      "Tracks media coverage and public sentiment to evaluate communication strategies. Prepares reports on the effectiveness of efforts and refines strategies based on findings.",
  },
  {
    title: "Brand Management",
    description:
      "Maintains and enhances the organization's brand image. Ensures consistent messaging, monitors public perception, and collaborates on promotional materials aligned with communication goals.",
  },
];

const mediaContainer = document.getElementById("mcm");

// Generate the cards
mediaAndCommunicationsResponsibilities.forEach((item) => {
  const valueCard = `
        <div class="bg-gray-300 p-4 rounded-md shadow-md">
  <h4 class="font-semibold text-pink">${item.title}</h4>
  <p class="text-gray-700 text-sm">
    ${item.description}
  </p>
</div>
      `;

  // Append the card to the container
  mediaContainer.innerHTML += valueCard;
});
