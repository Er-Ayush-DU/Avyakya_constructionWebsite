import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 relative">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">
                        Avyakta <span className="text-yellow-500">Construction & Infra Pvt. Ltd.</span>
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Avyakta Construction & Infra Pvt. Ltd. delivers reliable,
                        high-quality construction and infrastructure solutions with a
                        strong commitment to safety, durability, and excellence.
                    </p>
                </div>

                {/* Office Addresses */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Office Addresses
                    </h3>

                    <p className="text-sm mb-3 flex items-start gap-2">
                        <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                        <span>
                            <strong>Kanpur Office:</strong><br />
                            Barrabaipass, Kanpur – 208001
                        </span>
                    </p>

                    <p className="text-sm flex items-start gap-2">
                        <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                        <span>
                            <strong>Kannauj Office:</strong><br />
                            H67/2, Rampur Aligarh–Kanpur Highway, Kannauj
                        </span>
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact Us
                    </h3>

                    <p className="text-sm mb-2 flex items-center gap-2">
                        <FaEnvelope className="text-yellow-500" />
                        <a
                            href="mailto:avyaktaecons@infa.com"
                            className="hover:text-yellow-500 transition"
                        >
                            avyaktaecons@infa.com
                        </a>
                    </p>

                    <p className="text-sm flex items-center gap-2">
                        <FaPhoneAlt className="text-yellow-500" />
                        <a
                            href="tel:9793241834"
                            className="hover:text-yellow-500 transition"
                        >
                            +91 9793241834
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Avyakta Construction & Infra Pvt. Ltd. All Rights Reserved.
            </div>

            {/* Scroll To Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={18} />
            </button>
        </footer>
    );
};

export default Footer;
