const blogs = [
  {
    title: "Beautiful Working",
    date: "June 30, 2021",
    category: "Trending",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt.",
    image: "./img/leadership.jpg",
  },
  {
    title: "Creative Spaces",
    date: "July 15, 2021",
    category: "Inspiration",
    description: "Exploring unique ideas and environments for creativity.",
    image: "./img/leadership.jpg",
  },
  {
    title: "Team Collaboration",
    date: "August 10, 2021",
    category: "Work Culture",
    description: "Insights on improving team productivity and collaboration.",
    image: "./img/leadership.jpg",
  },
];

// Select the container
const blogContainer = document.getElementById("blog-container");

// Populate the cards dynamically
blogContainer.innerHTML = blogs
  .map(
    (blog) => `
      <div class="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img class="w-full h-48 object-cover rounded-t-lg" src="${blog.image}" alt="${blog.title}" />
        <div class="p-5">
          <p class="text-sm text-red-500 mb-2">${blog.date} | ${blog.category}</p>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">${blog.title}</h3>
          <p class="text-sm text-gray-600 mb-4">${blog.description}</p>
          <a href="#" class="text-sm font-medium text-red-500 hover:underline">Read More</a>
        </div>
      </div>
    `
  )
  .join("");
