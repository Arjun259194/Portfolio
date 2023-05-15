import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(window.innerWidth > 768);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const toggleTheme = () => {
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <header className="w-full flex md:justify-center justify-end relative pt-5">
      <nav className="">
        <ul
          className={`${
            menuOpen ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-full"
          } overflow-hidden transition-all duration-200 ease-linear md:flex md:space-x-8 md:relative md:m-0 font-semibold absolute z-20 bg-white dark:bg-neutral-900 border-2 border-black dark:border-gray-100 shadow-comic-light dark:shadow-comic-dark rounded-md top-0 right-0 m-12 capitalize text-gray-900 dark:text-gray-100`}>
          <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <a href="/">Home</a>
          </li>
          <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <a href="/about">about</a>
          </li>
          <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <a href="/blog">blog</a>
          </li>
          <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <a href="/project">project</a>
          </li>
          <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <a href="/contact">contact</a>
          </li>
          {/* <li className="px-4 py-1 hover:bg-blue-700 md:hover:bg-transparent hover:text-white md:hover:text-gray-900 dark:md:hover:text-gray-100  text-lg">
            <button onClick={toggleTheme}>Theme Switch</button>
          </li> */}
        </ul>
        <button onClick={toggleMenu} className="mx-2 p-2 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
