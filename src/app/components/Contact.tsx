'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', formData);
    // You may want to send the form data to your backend or perform other actions
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-800 text-slate-100 py-32">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Contact Us</h2>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
