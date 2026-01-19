"use client";
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // input handle
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if(!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
      })

      const data = await res.json();

      if(!res.ok) {
        setError(data?.message || 'Failed to send message. Please try again.');
        return;
      };

      setSuccess('Message sent successfully!');
      setFormData({
        name : '',
        email : '',
        message : ''
      })

    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-md">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Get in touch
            </h2>

            <p className="text-gray-600">
              Feel free to reach out. I try to reply as soon as I can.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-gray-800">mardyripon10@gmail.com</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <p className="text-gray-800">+880 1320 585 642</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">Location</p>
                <p className="text-gray-800">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-4">
              <a
                href="https://wa.me/8801320585642?text=Hello%20I%20want%20to%20contact%20you"
                target="_blank"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
              >
                Message me on WhatsApp
              </a>

              <a
                href="mailto:mardyripon10@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20want%20to%20reach%20you."
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            {error && (
              <p className="bg-red-100 p-2 text-red-800 font-medium text-sm rounded-md border border-red-200">
              {error}
            </p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                placeholder="Write your message…"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-3 rounded-lg font-medium hover:bg-black"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {/* success message  */}
            {success && (
              <p className="text-sm text-white font-medium p-1 rounded-md bg-blue-500"> {success} </p>
            )}
          </form>
        </div>
      </section>
      <Copyright />
    </>
  );
}
