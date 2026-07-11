import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-2">

        {/* Bottom */}

        <div className="italic text-lg text-end">
          <p>Designing the Future, Today</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;