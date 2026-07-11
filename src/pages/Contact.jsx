import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-blue-900 font-semibold">
            Contact Us
          </p>

          <h2 className="italic text-5xl font-bold text-blue-950 mt-3">
            Let's Build Something Great Together
          </h2>

          <div className="w-28 h-1 bg-blue-900 mx-auto rounded-full mt-5"></div>

          <p className="italic mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            Have a project in mind? We'd love to hear from you.
            Contact Structure Heads for structural engineering,
            PEB design, detailing and consultancy services.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <MapPin
              className="mx-auto text-blue-900 mb-4"
              size={40}
            />

            <h3 className="text-xl font-bold text-blue-950">
              Office
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              Ghaziabad,
              <br />
              Uttar Pradesh,
              <br />
              India
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <Phone
              className="mx-auto text-blue-900 mb-4"
              size={40}
            />

            <h3 className="text-xl font-bold text-blue-950">
              Phone
            </h3>

            <p className="mt-3 text-gray-600">
              +91 9220819222
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <Mail
              className="mx-auto text-blue-900 mb-4"
              size={40}
            />

            <h3 className="text-xl font-bold text-blue-950">
              Email
            </h3>

            <p className="mt-3 text-gray-600 break-all">
              contact@structureheads.com
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">

            <Clock
              className="mx-auto text-blue-900 mb-4"
              size={40}
            />

            <h3 className="text-xl font-bold text-blue-950">
              Working Hours
            </h3>

            <p className="mt-3 text-gray-600">
              Mon - Sat
              <br />
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>

        {/* Form + Map */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}

          <div className="bg-white shadow-xl rounded-2xl p-10">

            <h3 className="text-3xl italic font-bold text-blue-950 mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-5 py-4 outline-none focus:border-blue-900"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-5 py-4 outline-none focus:border-blue-900"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-5 py-4 outline-none focus:border-blue-900"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg px-5 py-4 outline-none focus:border-blue-900"
              ></textarea>

              <button
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

          {/* Google Map */}

          <div className="rounded-2xl overflow-hidden shadow-xl">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Ghaziabad&output=embed"
              className="w-full h-full min-h-[600px]"
              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 bg-blue-900 rounded-2xl text-white p-14 text-center">

          <h2 className="italic text-4xl font-bold">
            Ready To Discuss Your Project?
          </h2>

          <p className="italic mt-5 text-lg text-gray-200 max-w-3xl mx-auto">
            Whether it's a Pre-Engineered Building,
            High Rise Structure or Steel Detailing project,
            our engineering experts are ready to help.
          </p>

          <button className="mt-10 bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
            Call Now
          </button>

        </div>

      </div>

    </section>
  );
};

export default Contact;