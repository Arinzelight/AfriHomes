import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const AfriHomeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage("Please enter your email.");
      emailRef.current.focus();
      return;
    }
    if (!message.trim()) {
      setErrorMessage("Please enter your message.");
      messageRef.current.focus();
      return;
    }

    setIsSubmitting(true);

    sendEmail();
  };

  const sendEmail = () => {
    const serviceId = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID;
    const userId = import.meta.env.VITE_REACT_APP_EMAIL_USER_ID;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_email: email,
          message: message,
          user_phone: phone,
          user_location: location,
        },
        userId
      )
      .then((response) => {
        toast.success("Request sent successfully!");
        console.log("Email sent successfully:", response.status, response.text);
        clearForm();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send email. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const clearForm = () => {
    setEmail("");
    setMessage("");
    setPhone("");
    setLocation("");
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center  p-10 gap-10 mt-8 bg-purple-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col lg:w-1/2 w-full mb-4">
        <h2 className="text-4xl font-bold mb-4">Talk to an AfriHomes Agent</h2>
        <p>
          Interested in a Location? Talk to an AfriHome Agent who specializes in
          the real estate of that location or area to discuss your expectations.
        </p>
      </div>
      <div className="flex flex-col lg:w-1/2 w-full p-4">
        <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block text-xl mb-2" htmlFor="location">
              Location Interest
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              ref={emailRef}
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div>
            <label className="block text-xl mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              ref={messageRef}
              required
            ></textarea>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            className="w-full bg-purple-600 text-white p-2 rounded mt-4 hover:bg-purple-700 transition duration-200"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AfriHomeForm;
