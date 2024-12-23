// menu
const navBar = document.getElementById("navbar");

let navigation = `    <nav class="w-[80%] mx-auto border-b">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="index.html">Home</a></li>
              <li>
                <a>About</a>
                <ul class="p-2">
                  <li><a href="aboutUs.html">About us</a></li>
                  <li><a href="Governance.html">Governance</a></li>
                </ul>
              </li>
              <li><a>Blog</a></li>
            </ul>
          </div>
          <a class="sm:ml-auto mr-auto" href="index.html"
            ><img src="./icon/etern.jpg" alt="icon" width="50px"
          /></a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="index.html">Home</a></li>
            <li>
              <details>
                <summary>About</summary>
                <ul class="p-2">
                  <li><a href="aboutUs.html">About us</a></li>
                  <li><a href="Governance.html">Governance</a></li>
                </ul>
              </details>
            </li>
            <li><a>Blog</a></li>
          </ul>
        </div>
        <!-- <div class="navbar-end">
          <a class="btn">Register</a>
        </div> -->
      </div>
    </nav>`;
navBar.innerHTML = navigation;

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

// animation
const notes = document.querySelectorAll(".ani-boxes > div");
document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < notes.length; i++) {
    const ani = notes[i].dataset.ani; // Get the animation type from the dataset
    notes[i].classList.add("animated", "infinite", ani);

    // Remove the animation classes after 3 seconds
    window.setTimeout(
      function (note, animation) {
        note.classList.remove("animated", "infinite", animation);
      },
      1000,
      notes[i],
      ani
    );
  }
});
