import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Thank you! Your message has been prepared successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-secondBg">
      <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Feel free to connect with me for internships, placement opportunities or software developer roles.
          </p>

          <div className="mt-7 space-y-4">
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-mutedText transition hover:text-accent">
              <FaEnvelope className="text-accent" />
              girihimanshu1094@gmail.com
            </a>
            <a href="https://github.com/girihimanshu1094" className="flex items-center gap-3 text-mutedText transition hover:text-accent">
              <FaGithub className="text-accent" />
              github.com/girihimanshu1094
            </a>
            <a href="https://www.linkedin.com/in/girihimanshu1094/" className="flex items-center gap-3 text-mutedText transition hover:text-accent">
              <FaLinkedin className="text-accent" />
              linkedin.com/in/girihimanshu1094
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-cardBg p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-white/10 bg-secondBg px-4 py-3 text-sm text-primaryText outline-none transition placeholder:text-mutedText focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-white/10 bg-secondBg px-4 py-3 text-sm text-primaryText outline-none transition placeholder:text-mutedText focus:border-accent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-2 w-full resize-none rounded-md border border-white/10 bg-secondBg px-4 py-3 text-sm text-primaryText outline-none transition placeholder:text-mutedText focus:border-accent"
              placeholder="Write your message"
            ></textarea>
          </div>

          {error && <p className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
          {success && <p className="mt-4 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{success}</p>}

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
