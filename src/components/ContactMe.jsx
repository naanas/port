import React, { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const serviceId = import.meta.env.VITE_SERVICE;
const templateId = import.meta.env.VITE_TEMPLATE;
const apiKey = import.meta.env.VITE_API;

const InputField = ({ type, name, placeholder, value, onChange }) => (
  <div className="mb-6 relative">
    <input
      type={type}
      name={name}
      id={name}
      className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 placeholder-transparent focus:border-tealDesert focus:outline-none transition-colors duration-300 font-body text-darkDesert"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
    <label
      htmlFor={name}
      className="absolute left-0 -top-3.5 text-xs font-mono text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-tealDesert"
    >
      {placeholder}
    </label>
  </div>
);

export default function ContactMe() {
  const contactSpring = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: { tension: 280, friction: 60 }
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = useCallback((e) => setName(e.target.value), []);
  const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const handleMessageChange = useCallback((e) => setMessage(e.target.value), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }
    setError("");

    if (!serviceId || !templateId || !apiKey) {
      setError("Configuration error: Email service is not properly set up.");
      toast.error("Failed to send: Configuration missing.");
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
      (result) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
        toast.success("Your message has been sent successfully!");
      },
      (error) => {
        setIsSubmitting(false);
        setError("Oops! Something went wrong. If this persists, email me at missatrox44@gmail.com directly.");
        toast.error("Oops! Something went wrong. Please try again later.");
      }
    ).catch(generalError => {
      setIsSubmitting(false);
      setError("An unexpected error occurred. Please check your internet connection.");
      toast.error("An unexpected error occurred.");
    });
  };

  return (
    <animated.section
      id="contact-me"
      className="flex flex-col items-center justify-center bg-white py-24 px-6 lg:px-20 min-h-screen relative overflow-hidden"
      style={contactSpring}
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-goldDesert/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-tealDesert/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row gap-16 relative z-10">

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-sm font-mono tracking-widest text-tealDesert uppercase mb-4 font-bold">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-darkDesert mb-6 leading-tight">
            Let's work <br />
            <span className="italic font-light text-goldDesert">together.</span>
          </h1>
          <p className="text-gray-600 font-body text-lg leading-relaxed max-w-md">
            I'm currently available for freelance projects and full-time opportunities. Let's build something beautiful and performant together.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:missatrox44@gmail.com" className="text-xl font-heading font-bold text-darkDesert hover:text-tealDesert transition-colors">missatrox44@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-body text-darkDesert">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-tealDesert/10 rounded-full flex items-center justify-center mx-auto mb-6 text-tealDesert">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold font-heading text-darkDesert mb-2">Message Sent!</h3>
                <p className="text-gray-500 font-body">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button onClick={() => setSuccess(false)} className="mt-8 text-sm font-mono text-tealDesert uppercase tracking-wider hover:text-darkDesert transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="mb-8 relative mt-2">
                  <textarea
                    name="message"
                    id="message"
                    className="peer w-full border-b-2 border-gray-200 bg-transparent py-3 placeholder-transparent focus:border-tealDesert focus:outline-none transition-colors duration-300 font-body text-darkDesert h-32 resize-none"
                    placeholder="Your Message"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-xs font-mono text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-tealDesert"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden bg-darkDesert text-white py-4 px-8 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mx-auto lg:mx-0 w-full lg:w-max"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-tealDesert/20 z-0"></div>
                </button>
                {error && <p className="mt-6 text-red-500 text-sm text-center font-body bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </animated.section>
  );
}
