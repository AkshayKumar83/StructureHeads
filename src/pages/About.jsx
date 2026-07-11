// import { CheckCircle } from "lucide-react";

// const About = () => {
//   return (
//     <section className="py-24 bg-white">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Image */}

//           <div className="relative">

            // <img
            //   src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900"
            //   alt="Structure Heads"
            //   className="w-full h-[550px] object-cover rounded-2xl shadow-xl"
            // />

//           </div>

//           {/* Right Content */}

//           <div>

//             <p className="text-blue-900 font-semibold tracking-[4px] uppercase mb-3">
//               About Us
//             </p>

//             <h2 className="text-5xl italic font-bold text-blue-950 leading-tight">
//               Building Smarter Structures,
//               <br />
//               Engineering Stronger Futures.
//             </h2>

//             <div className="w-28 h-1 bg-blue-900 rounded-full mt-5 mb-8"></div>

//             <p className="text-gray-700 text-lg leading-9">

//               Structure Heads is a professional structural engineering
//               consultancy delivering innovative, safe and cost-effective
//               solutions for modern construction projects.

//               <br />
//               <br />

//               Our expertise includes Pre-Engineered Buildings (PEB),
//               High Rise Structures, Structural Design, Steel Detailing,
//               Industrial Buildings and Engineering Consultancy.

//             </p>

//             {/* Features */}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

//               <div className="flex items-center gap-3">
//                 <CheckCircle className="text-blue-900" size={22} />
//                 <span className="text-lg">
//                   Pre-Engineered Buildings
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <CheckCircle className="text-blue-900" size={22} />
//                 <span className="text-lg">
//                   High Rise Structures
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <CheckCircle className="text-blue-900" size={22} />
//                 <span className="text-lg">
//                   Structural Design
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <CheckCircle className="text-blue-900" size={22} />
//                 <span className="text-lg">
//                   Steel Detailing
//                 </span>
//               </div>

//             </div>

//             {/* Button */}

//             <button className="mt-12 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
//               Know More
//             </button>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default About;



import {
  CheckCircle,
  Building2,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  "Pre-Engineered Buildings (PEB)",
  "High Rise Structures",
  "Structural Design",
  "Steel Detailing",
  "Industrial Structures",
  "Engineering Consultancy",
];

const whyChoose = [
  {
    icon: <ShieldCheck size={36} className="text-blue-900" />,
    title: "Safe & Reliable Designs",
    desc: "Every structure is designed according to modern engineering standards and safety codes.",
  },
  {
    icon: <Clock3 size={36} className="text-blue-900" />,
    title: "On-Time Delivery",
    desc: "We believe in delivering quality structural solutions within committed timelines.",
  },
  {
    icon: <BadgeDollarSign size={36} className="text-blue-900" />,
    title: "Cost Effective",
    desc: "Optimized structural solutions that reduce steel consumption and project cost.",
  },
  {
    icon: <Building2 size={36} className="text-blue-900" />,
    title: "Modern Engineering",
    desc: "Advanced structural analysis and detailing using industry-leading software.",
  },
];

const stats = [
  {
    number: "100+",
    title: "Projects Completed",
  },
  {
    number: "25+",
    title: "Happy Clients",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Quality Commitment",
  },
];

const About = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Top ================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

                        <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900"
              alt="Structure Heads"
              className="w-full h-[650px] object-cover rounded-2xl shadow-xl mt-5"
            />

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
              About Us
            </p>

            <h2 className="italic text-4xl lg:text-5xl font-bold text-blue-950 mt-3 leading-tight">
              Building Smarter Structures,
              <br />
              Engineering Stronger Futures.
            </h2>

            <div className="w-28 h-1 bg-blue-900 rounded-full mt-5 mb-8"></div>

            <p className="text-gray-700 leading-9 text-lg">

              Structure Heads is a professional structural engineering
              consultancy providing innovative, economical and safe
              engineering solutions for commercial, industrial and
              residential projects.

              <br />
              <br />

              We specialize in Pre-Engineered Buildings (PEB),
              Structural Design, High Rise Structures, Steel Detailing,
              Industrial Buildings and complete Engineering Consultancy.

            </p>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-blue-900"
                    size={22}
                  />

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* <button className="mt-12 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
              Contact Us
            </button> */}

          </div>

        </div>

        {/* ================= Stats ================= */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
            >

              <h3 className="text-5xl italic font-bold text-blue-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        {/* ================= Why Choose ================= */}

        <div className="mt-28">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
              Why Choose Us
            </p>

            <h2 className="italic text-5xl font-bold text-blue-950 mt-3">
              Engineering Excellence
            </h2>

            <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mt-5"></div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {whyChoose.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="flex justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= CTA ================= */}

        <div className="mt-24 bg-blue-900 rounded-2xl text-white p-14">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <h2 className="italic text-4xl font-bold">
                Ready To Start Your Next Project?
              </h2>

              <p className="mt-4 text-lg text-gray-200 max-w-2xl">
                Get in touch with Structure Heads for innovative,
                economical and reliable structural engineering
                consultancy.
              </p>

            </div>

            <button className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition">
              Get Free Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;