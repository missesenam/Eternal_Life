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
