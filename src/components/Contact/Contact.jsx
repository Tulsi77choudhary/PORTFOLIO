import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false); // Reset error state before trying again

    try {
      await emailjs.sendForm(
        'service_xu4706n',
        'template_b1i18cx',
        formRef.current,
        'xxNaY_M3UkYIPnb__'
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError(true);
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 text-gray-300 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-md">
              <ContactDetail
                icon={<FaEnvelope />}
                title="Email"
                text="choudharytulsi421@gmail.com"
              />
              <ContactDetail
                icon={<FaPhone />}
                title="Phone"
                text="+91 7049298434"
              />
              <ContactDetail
                icon={<FaMapMarkerAlt />}
                title="Location"
                text="Bhopal, India"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-md"
            >
              <InputField
                id="name"
                label="Your Name"
                type="text"
                name="name"
                required
              />
              <InputField
                id="email"
                label="Your Email"
                type="email"
                name="email"
                required
              />
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <div className="animate-spin w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full mx-auto"></div>
                ) : (
                  'Send Message'
                )}
              </button>
              {success && (
                <p className="text-green-400 text-center mt-2">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center mt-2">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon, title, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-600/50 rounded-full flex items-center justify-center text-white text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  </div>
);

const InputField = ({ id, label, type, name, required }) => (
  <div>
    <label htmlFor={id} className="block text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Contact;