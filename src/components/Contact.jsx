import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import video from '../../public/vedio.mp4';

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
      className="relative py-0.5 px-[8vw] md:px-[6vw] lg:px-[15vw] flex flex-col items-center min-h-screen"
    >
      <ToastContainer />

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={video}
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-5"></div>

      {/* Content */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl sm:text-3xl font-bold text-red-500 font-serif">
          CONTACT
        </h2>
        <div className="w-40 h-0.5 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base font-medium w-full sm:w-3/4 mx-auto italic">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="relative z-10 mt-6 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            minLength={10}
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={isSent}
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              isSent
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
            }`}
          >
            {isSent ? "Sent ✅" : "Send"}
          </button>
        </form>
      </div>

      <div className="w-screen h-[1px] bg-black my-10 -mx-[8vw] md:-mx-[6vw] lg:-mx-[15vw] relative z-10"></div>
    </section>
  );
};

export default Contact;
