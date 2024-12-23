document.addEventListener("DOMContentLoaded", () => {
  const objectives = [
    {
      goal: "Increase the number of leadership training programs offered by 20% within the next two years.",
    },
    {
      goal: "Enhance participant satisfaction by achieving a 90% approval rating in program evaluations.",
    },
    {
      goal: "Expand strategic partnerships with local and international organizations to broaden the institute's reach and impact.",
    },
    {
      goal: "Develop a comprehensive online learning platform to provide accessible leadership training resources globally.",
    },
    {
      goal: "Measure and demonstrate the positive impact of the institute's training programs on participants' leadership effectiveness through post-training assessments and surveys.",
    },
  ];

  const container = document.getElementById("goals-container");

  objectives.forEach((item, index) => {
    const goalElement = document.createElement("div");
    goalElement.classList.add("py-2", "pl-[50px]", "bg-primary10", "relative");

    goalElement.innerHTML = `
    <div class="h-full w-[70px] border-4 border-red-200 bg-primary10 text-white rounded-[50%] absolute top-0 -left-[40px] flex items-center justify-center text-bold text-2xl">
      ${String(index + 1).padStart(2, "0")}
    </div>
    <p class='text-wht'>${item.goal}</p>
  `;

    container.appendChild(goalElement);
  });
});
