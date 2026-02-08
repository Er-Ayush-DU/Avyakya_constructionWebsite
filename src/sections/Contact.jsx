import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_r9wn55b",
                "template_gklrhgb",
                formRef.current,
                "M3Bzt491x5fB2kSLX"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    formRef.current.reset();
                },
                () => {
                    alert("Failed to send message. Try again.");
                }
            );
    };

    return (
        <div id="contact" className="bg-gray-100 w-full">
            <div className="lg:w-[80%] w-[90%] m-auto py-[80px] flex lg:flex-row flex-col gap-[60px]">

                {/* Left Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="lg:w-[60%] w-full flex flex-col gap-6"
                >
                    <motion.h1
                        variants={slideUpVariants}
                        className="uppercase text-yellow-500 text-xl tracking-widest"
                    >
                        Contact Us
                    </motion.h1>

                    <motion.h1
                        variants={slideUpVariants}
                        className="text-5xl font-bold text-black uppercase"
                    >
                        Reach Us For Any Query
                    </motion.h1>

                    <div className="w-[140px] h-[5px] bg-yellow-500"></div>

                    <p className="text-2xl italic text-gray-600 mt-[50px]">
                        We are the leader with 25 years of experience in the construction market!
                    </p>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideUpVariants}
                    className="lg:w-[40%] w-full"
                >
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomInVariants}
                        className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4 w-full"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter Full Name"
                            required
                            className="px-6 py-3 border-2 border-black rounded-lg"
                        />

                        <input
                            type="email"
                            name="user_email"
                            placeholder="Enter Email"
                            required
                            className="px-6 py-3 border-2 border-black rounded-lg"
                        />

                        <input
                            type="tel"
                            name="user_phone"
                            placeholder="Enter Mobile Number"
                            required
                            className="px-6 py-3 border-2 border-black rounded-lg"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="px-6 py-3 border-2 border-black rounded-lg"
                        />

                        <motion.button
                            variants={zoomInVariants}
                            type="submit"
                            className="bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-4 rounded-lg transition"
                        >
                            SUBMIT
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
