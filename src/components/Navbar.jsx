import { useState } from "react";

export default function Navbar({ onPageChange }) {
  const [currentNav, setCurrentNav] = useState("introNav");
  const handleNavClick = (page, nav) => {
    onPageChange(page);
    setCurrentNav(nav);
  };

  return (
    <nav className="bg-white shadow-md">
      <div
        className="max-w-screen-xl flex items-center justify-between mx-auto px-52 p-4"
        style={{ width: "1200px" }}
      >
        <a
          href="#"
          className="flex items-center"
          onClick={() => handleNavClick("introPage", "introNav")}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Logo
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                onClick={() => handleNavClick("aboutPage", "aboutNav")}
                className={
                  currentNav === "aboutNav"
                    ? "text-black border-b-2 border-black"
                    : "block py-2 pl-3 pr-4 text-black border-b-2 border-black hover:border-black hover:border-b-2 transition duration-300 ease-in-out md:border-0 md:p-0 dark:hover:border-black dark:hover:text-black md:dark:hover:text-black md:dark:hover:border-black"
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick("projectsPage", "projectsNav")}
                className={
                  currentNav === "projectsNav"
                    ? "text-black border-b-2 border-black"
                    : "block py-2 pl-3 pr-4 text-black border-b-2 border-black hover:border-black hover:border-b-2 transition duration-300 ease-in-out md:border-0 md:p-0 dark:hover:border-black dark:hover:text-black md:dark:hover:text-black md:dark:hover:border-black"
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavClick("contactPage", "contactNav")}
                className={
                  currentNav === "contactNav"
                    ? "text-black border-b-2 border-black"
                    : "block py-2 pl-3 pr-4 text-black border-b-2 border-black hover:border-black hover:border-b-2 transition duration-300 ease-in-out md:border-0 md:p-0 dark:hover:border-black dark:hover:text-black md:dark:hover:text-black md:dark:hover:border-black"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
