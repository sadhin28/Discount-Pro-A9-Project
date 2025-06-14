import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import Qr from '../../assets/qr.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='text-white bg-[#312c4e]  border-t'>
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Company Info */}
                <div>
                    <h1 className="flex gap-2  items-center-center text-lg font-semibold mb-4">DISCOUNT <motion.div
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            style={{ color: "#19BC9B", fontWeight: "bold" }}
                        >

                            PRO 🔥

                        </motion.div></h1>
                    <p className="mt-2 text-sm">
                        Your go-to platform for the best coupons, offers, and cashback.
                    </p>
                    <div className="flex space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>

                {/* Help & Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            
                            <a href="#" className="hover:underline">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Missing Cashback Claims
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Earning Programs */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Earning Programs</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:underline">
                                Shopping Assistant
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Share & Earn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Refer & Earn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <div className="flex items-center space-x-3">
                        <img
                            src={Qr}
                            alt="QR Code"
                            className="w-20"
                        />
                        <a href="#" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="w-32"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get in Touch for More Offers</h3>
                    <div className="text-xl flex gap-3">
                        <a href="https://www.facebook.com/taosifsadhin/" target="_blank"><FaFacebook /></a>
                        <a href="https://www.instagram.com/taosifsadhin/" target="_blank" rel="noopener noreferrer">    <FaInstagram /></a>
                        <a href="https://x.com/sadhincse" target="_blank" rel="noopener noreferrer">         <FaTwitter /></a>
                        <a href="https://" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    </div>
                    <p className='text-sm mt-2'>Stay connected with us to discover the latest discounts, exclusive deals, and exciting offers tailored just for you!</p>
                </div>

                {/* Hiring Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">We Are Hiring!</h3>
                    <p className="text-sm">
                        Join our team of deal-driven superheroes and save the world of
                        savings. Ready to seize the deal?
                    </p>
                    <a
                        href="#"
                        className="mt-2 inline-block text-red-500 hover:underline font-medium text-sm"
                    >
                        See All Jobs
                    </a>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Discount PRO</h3>
                    <p className="text-sm mb-4">
                        Get the best deals & offers in your email.
                    </p>
                    <div className="flex md:flex-col lg:flex-row lg:flex">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button className="hover:bg-[#19BC9B] px-4 py-2 lg:rounded-r-md bg-[#2b9078]">
                            Subscribe
                        </button>
                    </div>
                </div>



            </div>

            {/* Copyright Section */}
            <p className="text-center   text-xs py-10"> Copyright © {new Date().getFullYear()} Discount PRO. All rights reserved || Created By Sadhin</p>
            
        </footer>
    );
};

export default Footer;