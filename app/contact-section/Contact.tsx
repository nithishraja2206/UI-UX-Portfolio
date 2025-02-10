"use client";
import { monaSans } from "../fonts/monaSans";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); // Clear previous errors
    setStatus("loading");

    const data = { from_name: name, email, subject, message };
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicAPIKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API!;

    emailjs
      .send(serviceID, templateID, data, publicAPIKey)
      .then(() => {
        setStatus("sent");
        setTimeout(() => {
          setStatus("idle");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setError("Failed to send email. Please try again.");
        setStatus("idle");
      });
  };

  return (
    <section className="container mx-auto py-16 px-6 lg:px-32" id="contact">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Side */}
        <div>
          <h2
            className={`${monaSans.className} mb-3 text-center text-[clamp(70px,14vw,155.04px)] font-bold uppercase leading-[1] text-[#e4ded7] md:text-start`}
          >
            Get In <br /> Touch
          </h2>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-xl font-semibold">
              Let's talk about everything!
            </h3>
            <p className="text-gray-500">
              Don't like forms? Send me an email. 👋
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-[#212531] p-3 focus:ring-2 focus:ring-blue-400"
              disabled={status !== "idle"}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-[#212531] p-3 focus:ring-2 focus:ring-blue-400"
              disabled={status !== "idle"}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl bg-[#212531] p-3 focus:ring-2 focus:ring-blue-400"
            disabled={status !== "idle"}
          />

          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-40 w-full resize-none rounded-xl bg-[#212531] p-3 focus:ring-2 focus:ring-blue-400"
            disabled={status !== "idle"}
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#e4ded7] py-3 text-black transition"
            disabled={status !== "idle"}
          >
            {status === "loading"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send Message"}
          </button>

          {/* Error Message (Red Text) */}
          {error && (
            <p className="mt-1 text-center text-sm text-red-500">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
