import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-mainBg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-code text-lg font-semibold text-accent">
          &lt;HG /&gt;
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-mutedText transition hover:text-accent"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-white/10 p-2 text-primaryText transition hover:border-accent hover:text-accent md:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-secondBg px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="rounded-md px-2 py-2 text-sm font-medium text-mutedText transition hover:bg-cardBg hover:text-accent"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
