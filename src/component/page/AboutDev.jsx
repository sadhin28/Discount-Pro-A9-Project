import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutDev = () => {
    return (
        <div className="container mx-auto px-4 py-8">
           
            <div className="bg-base-100 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-3xl text-[#90bc19] font-bold text-center mb-6">About the Developer</h2>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <p className="mt-2">
                        <strong>Name:</strong> Taosif Bin Sadhin
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:taosifsadhin113@gmail.com" className="text-[#192fbc] hover:underline ml-1">
                            taosifsadhin113@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong>
                        <a href="tel:+8801707986054" className="text-[#192fbc] hover:underline ml-1">
                            +8801707986054
                        </a>
                    </p>
                    <p>
                        <strong>Location:</strong> Barishal, Bangladesh
                    </p>
                    <p>
                        <strong>Portfolio:</strong>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A66C2] hover:underline ml-1"
                        >
                            Portfolio Website
                        </a>
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Social Links</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-[#0A66C2] text-2xl hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://github.com/sadhin28" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black text-2xl hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Skills</h3>
                    <ul className="list-disc list-inside mt-2">
                       
                        <li>Web Development (HTML5, CSS, JavaScript, MySQL)</li>
                        <li>Frameworks: TailwindCSS, DaisyUI, Bootstrap, Material UI</li>
                        <li>Other Tools: Firebase, Git/GitHub, Pixso, Figma</li>
                        <li>SQA: Manual, Automation, API Testing</li>
                        <li>Operating Systems: Windows, Ubuntu, MacOS</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>BSc in Computer Science and Engineering</strong>,
                            City University 
                        </li>
                        <li>
                            <strong>HSC in Science</strong>, Gouranadi Govt College & University (GPA: 4.08)
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Projects</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>
                            <strong>Dragon News:</strong> News platform using HTML, CSS, JavaScript, React, React Router, and Firebase Auth
                        </li>
                        <li>
                            <strong>Peddy:</strong> Pet adoption platform with dynamic categories (Tailwind, React)
                        </li>
                        <li>
                            <strong>GadgetHeaven:</strong> using HTML, CSS, JavaScript, and React
                        </li>
                        <li>
                            <strong>Smart Ticketing:</strong> Full responsive ticket booking system
                        </li>
                        <li>Other projects include Fitness Tracking App, BDStore, and more</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Web Development (Programming Hero)</li>
                       
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutDev;