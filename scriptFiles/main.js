const links = [
  {
    name: "About",
    submenu: [
      { name: "About us", href: "aboutUs.html" },
      { name: "Governance", href: "Governance.html" },
    ],
  },
  { name: "Program & Admissions", href: "admission.html" },
  { name: "Events & Blogs", href: "blog.html" },
  { name: "FAQs", href: "FAQs.html" },
  { name: "Donation", href: "donation.html" },
  { name: "Contact Us", href: "contactUs.html" },
  { name: "Gallery", href: "gallery.html" },
];

function generateMenu(links, isDropdown = false) {
  return links
    .map((link) => {
      if (link.submenu) {
        if (isDropdown) {
          return `
            <li>
              <a>${link.name}</a>
              <ul class="p-2">
                ${link.submenu
                  .map(
                    (sublink) =>
                      `<li><a href="${sublink.href}">${sublink.name}</a></li>`
                  )
                  .join("")}
              </ul>
            </li>
          `;
        } else {
          return `
            <li>
              <details>
                <summary>${link.name}</summary>
                <ul class="p-2">
                  ${link.submenu
                    .map(
                      (sublink) =>
                        `<li><a href="${sublink.href}">${sublink.name}</a></li>`
                    )
                    .join("")}
                </ul>
              </details>
            </li>
          `;
        }
      } else {
        return `<li><a href="${link.href}">${link.name}</a></li>`;
      }
    })
    .join("");
}
const navBar = document.getElementById("navbar");

let navigation = `
<nav class="w-[80%] mx-auto border-b">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          ${generateMenu(links, true)}
        </ul>
      </div>
      <!-- Logo -->
      <a class="ml-auto sm:mr-auto" href="index.html">
        <img src="./icon/eternicon.jpg" alt="icon" width="60px"/>
      </a>
    </div>

    <!-- Desktop Menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-sm">
        ${generateMenu(links, false)}
      </ul>
    </div>
  </div>
</nav>
`;

navBar.innerHTML = navigation;
