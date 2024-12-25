const questions = [
  {
    question: "What is Christian Leaders Institute (CLI)?",
    answer:
      "Christian Leaders Institute is a non-profit educational institution that offers free, high-quality ministry training to individuals who are seeking to become effective Christian leaders, ministers, pastors, and servants in their communities. CLI also offers low-cost degrees, and partners with Christian Leaders Alliance to issue minister credentials. Learn more about CLI here.",
  },
  {
    question: "Is CLI's training really free?",
    answer:
      "Yes, CLI is committed to making high-quality ministry training accessible to everyone. We offer our courses at no cost, so individuals can receive the education they need without financial barriers. Programs like awards, certificates, and diplomas are also completely free with the option to purchase an official credential. Learn more about our free model here. There are low-costs for more personalized programs, such as college-level degrees. Learn more here.",
  },
  {
    question: "What kind of programs does CLI offer?",
    answer:
      "CLI offers a wide range of programs, including: Comprehensive courses covering topics like theology, leadership, evangelism, and pastoral care; Awards; Certificates; Diplomas; Associate and Bachelor’s Degrees. CLI houses two schools – the Christian Development school, which issues awards, certificates, and diplomas, & the Leadership Excellence school which administers college degrees.",
  },
  {
    question: "Are CLI's programs accredited?",
    answer:
      "Christian Leaders Institute holds applicant status with the Association for Biblical Higher Education Commission on Accreditation, 5850 T. G. Lee Blvd., Ste. 130, Orlando, FL 32822, 407.207.0808. Applicant status is a pre-membership status granted to those institutions that meet the ABHE Conditions of Eligibility and that possess such qualities as may provide a basis for achieving candidate status within five years. Learn more about our accreditation journey.",
  },
];

const container = document.getElementById("questions-container"); // Target the container where you want to insert the collapsible elements.

questions.forEach((item) => {
  const collapseDiv = `
    <div class="collapse rounded-none  border-b collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium bg-primary20 text-wht">
        ${item.question}
      </div>
      <div class="collapse-content pt-4">
        <p>${item.answer}</p>
      </div>
    </div>
  `;
  container.innerHTML += collapseDiv;
});
