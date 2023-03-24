//contact.jsx
import React, { useState } from "react";

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div
      className="screen flex flex-col 
      items-center justify-center"
    >
      <div className="mb-3 pt-0">
        <h3 className="text-center text-gradient font-medium text-5xl">Contact Me</h3>
      </div>
      <form
        className="bg-gray-1 shadow-md w-9/12 rounded h-96 px-8 pt-7 pb-9 mb-4"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-700 font-medium text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;