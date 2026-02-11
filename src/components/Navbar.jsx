import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '/logo.jpeg';
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f7f7f7] backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          className="relative text-lg font-extrabold tracking-wide text-indigo-700"
          onClick={() => setOpen(false)}
        >
          <div className="w-30">
            <img src={logo} alt="" className="w-full" />
          </div>
          {/* <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"></span> */}
        </NavLink>

        <ul className="hidden md:flex items-center gap-2 bg-slate-100 p-2 rounded-full">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Career", path: "/career" },
            { name: "Courses", path: "/courses" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-indigo-600 shadow"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-white/70"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/courses"
          className="hidden md:inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get Started
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition"
        >
          <span className="sr-only">Open Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-slate-700 transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-5 bg-slate-700 transition ${open ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-5 bg-slate-700 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200">
          <ul className="flex flex-col gap-2 px-6 py-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Career", path: "/career" },
              { name: "Courses", path: "/courses" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <NavLink
              to="/courses"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow hover:scale-105 transition"
            >
              Get Started
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
