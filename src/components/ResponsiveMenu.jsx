import { NavLinks } from "../constants";
import { HiMiniArrowDownTray } from "react-icons/hi2";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between  bg-gray-900 text-white px-8 pb-6 pt-16 transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}>
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map(({ id,link, title }) => (
              <li key={id}>
                <a href={link} className="mb-5 inline-block">
                  {title}
                </a>
              </li>
            ))}
            <button
              type="button"
              className="flex items-center gap-1 px-4 py-3 font-semibold border rounded  dark:border-white dark:text-white">
              Resume <HiMiniArrowDownTray />
            </button>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1></h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
