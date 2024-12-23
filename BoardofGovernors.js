const boardResponsibilities = [
  {
    title: "Governance and Strategic Planning",
    description:
      "The Board of Governors is responsible for defining the organization's mission, vision, and strategic goals. They establish governance policies, procedures, and frameworks to guide the organization's operations, decision-making processes, and long-term planning.",
  },
  {
    title: "Policy Development and Compliance",
    description:
      "The Board develops and approves organizational policies that align with legal requirements, ethical standards, and best practices. They ensure compliance with laws, regulations, and industry-specific guidelines, and oversee risk management practices to protect the organization's assets and reputation.",
  },
  {
    title: "Financial Oversight",
    description:
      "The Board of Governors provides financial oversight by reviewing and approving the organization's budget, financial statements, and major financial decisions. They monitor the organization's financial performance, ensure sound fiscal management, and safeguard the organization's assets.",
  },
  {
    title: "Appointment and Evaluation of Leadership",
    description:
      "The Board hires, evaluates, and may dismiss the organization's top executive, such as the CEO or Executive Director. They ensure that capable leadership is in place, set performance expectations, and provide guidance and support to the executive team.",
  },
  {
    title: "Stakeholder Representation",
    description:
      "The Board acts as a representative body, advocating for the interests of various stakeholders, including donors, beneficiaries, employees, and the community. They make decisions that align with the organization's mission and demonstrate accountability and transparency.",
  },
  {
    title: "Fundraising and Resource Development",
    description:
      "The Board plays a crucial role in fundraising and resource development efforts. They identify and cultivate relationships with potential donors, participate in fundraising activities, and contribute to the organization's sustainability by diversifying funding sources.",
  },
  {
    title: "Monitoring and Evaluation",
    description:
      "The Board of Governors monitors the organization's progress towards its strategic goals and evaluates its overall performance. They establish key performance indicators, review program outcomes, and assess the effectiveness of organizational policies and practices.",
  },
  {
    title: "Board Development and Succession Planning",
    description:
      "The Board ensures its own effectiveness and sustainability by recruiting and selecting new board members with diverse skills, expertise, and backgrounds. They provide orientation and ongoing development opportunities for board members, and plan for orderly succession when board members' terms expire.",
  },
  {
    title: "External Relations and Public Image",
    description:
      "The Board represents the organization externally, acting as ambassadors and advocates. They engage with key stakeholders, build strategic partnerships, and promote the organization's mission and impact.",
  },
  {
    title: "Ethical and Legal Responsibilities",
    description:
      "The Board upholds the highest ethical standards and ensures the organization's activities are conducted in a legal and ethical manner. They maintain confidentiality, avoid conflicts of interest, and act in the best interests of the organization.",
  },
];

const boardContainer = document.getElementById("boardofgov");

// Generate the cards
boardResponsibilities.forEach((board) => {
  const boardCard = `
        <div class="relative flex items-center">
  <span class="before:content-[''] before:absolute before:left-[-20px] before:top-[20%] before:-translate-y-1/2 before:w-3 before:h-3 before:rotate-45 before:bg-pink">
    ${board.title}:${board.description}
  </span>
</div>`;

  // Append the card to the container
  boardContainer.innerHTML += boardCard;
});
