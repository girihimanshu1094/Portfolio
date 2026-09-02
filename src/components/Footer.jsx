import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-mainBg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="text-sm text-gray-300">© 2026 Himanshu Giri</p>
          <p className="mt-1 text-xs text-mutedText">Built with React & Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/girihimanshu1094" aria-label="GitHub" className="text-mutedText transition hover:text-accent">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/girihimanshu1094/" aria-label="LinkedIn" className="text-mutedText transition hover:text-accent">
            <FaLinkedin size={20} />
          </a>
          <a href="girihimanshu1094@gmail.com" aria-label="Email" className="text-mutedText transition hover:text-accent">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
