import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
    return (
        <footer className="border-t border-gray-200 py-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4">
                        <div className="flex items-center gap-4 md:gap-6">
                            <Link href="/" className="cursor-pointer hover:!text-primary-300" scroll={false}>
                                <div className="items-center gap-3">
                                    <div className="text-xl font-bold">
                                        RENT
                                        <span className="text-secondary-500 font-light hover:!text-primary-300">IFUL</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <nav className="mb-4">
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/terms">Terms</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4 mb-4">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-primary-600">
                            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                        </a>
                        <a
                            href="#"
                            aria-label="Linkedin"
                            className="hover:text-primary-600"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="Youtube" className="hover:text-primary-600">
                            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
                    <span>© RENTiful. All rights reserved.</span>
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                    <Link href="/cookies">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
