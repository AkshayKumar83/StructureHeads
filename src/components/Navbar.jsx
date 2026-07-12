// import { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Menu,
//   X,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import NavbarLogo from "../assets/NavbarLogo.jpeg";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Projects", path: "/projects" },
//   { name: "Contact", path: "/contact" },
// ];

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ================= Top Bar ================= */}

//       <div className="bg-blue-900 text-white">
//          <div className="max-w-7xl mx-auto px-5 h-12 flex items-center justify-between">

//           <div className="flex items-center gap-6">

//             <a
//               href="https://maps.google.com"
//               target="_blank"
//               rel="noreferrer"
//               className="italic text-[17px] hidden md:flex items-center gap-2 hover:text-yellow-400"
//             >
//               <MapPin size={15} />
//               Ghaziabad, Uttar Pradesh(201001)
//             </a>

//             <a
//               href="tel:+919220819222"
//               className="flex items-center gap-2 hover:text-yellow-400"
//             >
//               <Phone size={15} />
//               +91 9220819222
//             </a>


//           </div>

//           <a
//             href="mailto:gaurav@structureheads.com"
//             className="italic text-[17px] hidden md:flex items-center gap-2 hover:text-yellow-400"
//           >
//             <Mail size={20} />
//             contact@structureheads.com
//           </a>

//         </div>
//       </div>

//       {/* ================= Main Navbar ================= */}

//       <header className="sticky top-0 z-50 bg-white shadow-md">

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="h-20 flex items-center justify-between">

//             {/* Logo */}

//             <NavLink
//               to="/"
//               className="flex items-center gap-5"
//             >
//              <img
//                 src={NavbarLogo}
//                 alt="Structure Heads"
//                 className="w-18 h-18 object-contain"
//                 />

// <div>
//   <h2 className="italic text-5xl font-bold text-blue-950">
//     Structure Heads
//   </h2>

//   <div className="h-[5px] w-full bg-blue-950 my-1 rounded-full"></div>

//   <p className="italic text-blue-950 text-sm">
//     Pre-Engineered Building / High Rise Structures / Design & Detailing Consultancy
//   </p>
// </div>

//             </NavLink>

//             {/* Desktop Menu */}

//             <nav className=" italic hidden lg:flex items-center gap-10">

//               {navLinks.map((item) => (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `font-medium transition ${
//                       isActive
//                         ? "text-blue-700"
//                         : "text-gray-700 hover:text-blue-700"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}

//             </nav>

            

//             {/* Mobile */}

//             <button
//               onClick={() => setOpen(!open)}
//               className="lg:hidden"
//             >
//               {open ? <X size={30} /> : <Menu size={30} />}
//             </button>

//           </div>

//         </div>

//         {/* Mobile Menu */}

//         {open && (

//           <div className="lg:hidden bg-white shadow-md">

//             <div className="flex flex-col">

//               {navLinks.map((item) => (

//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     `px-6 py-4 border-b ${
//                       isActive
//                         ? "text-blue-700 font-semibold"
//                         : "text-gray-700"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>

//               ))}

             

//             </div>

//           </div>

//         )}

//       </header>
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavbarLogo from "../assets/Navbarlogo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =================== Top Bar =================== */}

      <div className="bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto h-10 md:h-12 px-4 flex items-center justify-between">

          {/* Left */}

          <div className="flex items-center gap-4 md:gap-6">

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 italic text-[15px] hover:text-yellow-400"
            >
              <MapPin size={15} />
              Ghaziabad, Uttar Pradesh (201001)
            </a>

            <a
              href="tel:+919220819222"
              className="flex items-center gap-2 text-sm md:text-[16px] hover:text-yellow-400"
            >
              <Phone size={15} />
              +91 9220819222
            </a>

          </div>

          {/* Right */}

          <a
            href="mailto:gaurav@structureheads.com"
            className="hidden md:flex items-center gap-2 italic text-[15px] hover:text-yellow-400"
          >
            <Mail size={15} />
            contact@structureheads.com
          </a>

        </div>

      </div>

      {/* =================== Main Navbar =================== */}

      <header className="sticky top-0 z-50 bg-white shadow-md">

        <div className="max-w-7xl mx-auto px-4">

          <div className="h-16 md:h-20 flex items-center justify-between">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-3 flex-1"
            >

              <img
                src={NavbarLogo}
                alt="Structure Heads"
                className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
              />

              <div className="min-w-0">

                <h2
                  className="italic font-bold text-blue-950
                  text-2xl
                  md:text-4xl
                  lg:text-5xl
                  leading-none"
                >
                  Structure Heads
                </h2>

                <div className="h-[2px] md:h-[4px] bg-blue-950 rounded-full my-1"></div>

                {/* Desktop Tagline */}

                <p className="hidden md:block italic text-blue-950 text-xs lg:text-sm leading-tight">
                  Pre-Engineered Buildings / High Rise Structures /
                  Design & Detailing Consultancy
                </p>

                {/* Mobile Tagline */}

                <p className="block md:hidden italic text-blue-950 text-[10px] leading-tight">
                  Structural Design & Consultancy
                </p>

              </div>

            </NavLink>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10 italic ml-10">

              {navLinks.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    } transition font-medium text-lg`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

            </nav>

            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden ml-3"
            >
              {open ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>

        </div>

        {/* ================= Mobile Menu ================= */}

        {open && (

          <div className="lg:hidden bg-white border-t shadow-lg">

            <div className="flex flex-col">

              {navLinks.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-4 border-b text-lg italic ${
                      isActive
                        ? "text-blue-700 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

              ))}

            </div>

          </div>

        )}

      </header>
    </>
  );
}

export default Navbar;