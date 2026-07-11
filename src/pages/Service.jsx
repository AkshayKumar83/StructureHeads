import {
  Building2,
  Factory,
  Building,
  DraftingCompass,
  Hammer,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Factory size={42} />,
    title: "Pre-Engineered Buildings",
    desc: "Customized PEB solutions for warehouses, factories, industrial sheds and commercial buildings.",
  },
  {
    icon: <Building size={42} />,
    title: "High Rise Structures",
    desc: "Modern structural design solutions for commercial towers, residential apartments and offices.",
  },
  {
    icon: <DraftingCompass size={42} />,
    title: "Structural Design",
    desc: "Safe, economical and optimized RCC & Steel structural design solutions.",
  },
  {
    icon: <Hammer size={42} />,
    title: "Steel Detailing",
    desc: "Tekla detailing, fabrication drawings, shop drawings and GA drawings.",
  },
  {
    icon: <Building2 size={42} />,
    title: "Industrial Structures",
    desc: "Engineering solutions for industrial plants, process buildings and heavy structures.",
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Engineering Consultancy",
    desc: "Complete consultancy from planning and analysis to execution and project support.",
  },
];

const process = [
  "Requirement",
  "Planning",
  "Structural Analysis",
  "Design",
  "Detailing",
  "Project Delivery",
];

const Service = () => {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Our Services
          </p>

          <h2 className="italic text-5xl font-bold text-blue-950 mt-3">
            Engineering Solutions
            <br />
            For Modern Construction
          </h2>

          <div className="w-24 h-1 bg-blue-900 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-8">
            We provide innovative structural engineering services for
            industrial, commercial and residential construction projects
            with a focus on safety, quality and cost efficiency.
          </p>

        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="text-blue-900 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {service.desc}
              </p>

              <button className="mt-8 flex items-center gap-2 text-blue-900 font-semibold hover:gap-4 transition-all">

                Read More

                <ArrowRight size={18} />

              </button>

            </div>

          ))}

        </div>

        {/* Why Choose */}

        <div className="mt-28">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
              Why Choose Structure Heads
            </p>

            <h2 className="italic text-5xl font-bold text-blue-950 mt-3">
              Excellence In Every Structure
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Experienced Engineers",
              "IS Code Compliance",
              "Latest Engineering Software",
              "Cost Effective Solutions",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:bg-blue-900 hover:text-white transition"
              >

                <BadgeCheck
                  size={42}
                  className="mx-auto mb-5"
                />

                <h3 className="text-xl font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* Process */}

        <div className="mt-28">

          <div className="text-center">

            <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
              Our Process
            </p>

            <h2 className="italic text-5xl font-bold text-blue-950 mt-3">
              How We Work
            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5">

                  {index + 1}

                </div>

                <h3 className="font-semibold text-blue-950">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-28 bg-blue-900 rounded-2xl p-14 text-center text-white">

          <h2 className="italic text-5xl font-bold">
            Need Structural Engineering Services?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-200">
            Whether you're planning a warehouse,
            industrial building, commercial complex or
            residential project, our engineering experts are
            ready to deliver safe and innovative structural solutions.
          </p>

          <button className="mt-10 bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition">

            Request Free Consultation

          </button>

        </div>

      </div>

    </section>
  );
};

export default Service;