import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Enable spinner
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/contact-mail`,
        formData
      );
  
      if (response.data.status === "success") {
        setLoading(false);
        toast.success(response.data.message); 
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(response.data.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while sending the message."
      );
    } finally {
      setLoading(false); // Disable spinner in all cases
    }
  };
  

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Please fill out the form below or
            reach us through the contact information on the right.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Your Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Our Office
                  </h4>
                  <p className="text-gray-600">
                    1234 Street Name, City, Country
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@company.com</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Follow Us:
                </h4>
                <div className="flex space-x-6 mt-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
