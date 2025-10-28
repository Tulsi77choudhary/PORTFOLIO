import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xu4706n",
        "template_b1i18cx",
        form.current,
        "xxNaY_M3UkYIPnb__"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-[8vw] py-20 text-white bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden"
    >
      <ToastContainer />

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-orange-400/10 blur-3xl -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 font-serif tracking-wide drop-shadow-[0_0_12px_rgba(255,165,0,0.4)]">
          CONTACT
        </h2>
        <div className="w-40 h-1 bg-orange-500 mx-auto mt-3 rounded-full shadow-[0_0_10px_rgba(255,165,0,0.6)]"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base italic max-w-2xl mx-auto">
          I’d love to hear from you — reach out for collaborations, ideas, or
          just to say hi!
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="relative z-10 w-full max-w-lg bg-gray-900/60 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,165,0,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,165,0,0.35)]">
        <h3 className="text-2xl font-semibold text-center text-orange-400 mb-6">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            minLength={10}
            className="w-full p-3 rounded-md bg-gray-800/70 text-white border border-gray-700 focus:outline-none focus:border-orange-500 transition-all duration-300"
          />

          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-3 font-semibold rounded-md transition-all duration-300 ${
              isSent
                ? "bg-gray-600 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 shadow-[0_0_15px_rgba(255,165,0,0.4)]"
            }`}
          >
            {isSent ? "Sent ✅" : "Send Message"}
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-800 mt-12"></div>
    </section>
  );
};

export default Contact;
