import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="border-b border-white/10 bg-mainBg">
      <div className="section-container grid min-h-[calc(100vh-72px)] items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-code text-sm font-medium text-accent">Hello, welcome to my portfolio</p>
          <h1 className="text-4xl font-extrabold leading-tight text-primaryText sm:text-5xl">
            Hi, I'm Himanshu Giri
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-gray-300 sm:text-2xl">
            MCA Fresher & Aspiring Software Developer
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-mutedText">
            I enjoy building web applications, solving programming problems and learning new technologies. I am
            currently looking for opportunities where I can apply my skills and grow as a software developer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/girihimanshu1094" aria-label="GitHub" className="text-mutedText transition hover:text-accent">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/girihimanshu1094" aria-label="LinkedIn" className="text-mutedText transition hover:text-accent">
              <FaLinkedin size={24} />
            </a>
            <a href="girihimanshu1094@gmail.com" aria-label="Email" className="text-mutedText transition hover:text-accent">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-cardBg shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
            <span className="ml-3 font-code text-xs text-mutedText">developer.js</span>
          </div>
          <pre className="overflow-x-auto p-5 font-code text-sm leading-7 text-gray-300 sm:text-base">
            <code>
              <span className="text-mutedText">1</span> <span className="text-sky-300">const</span> developer = {"{"}
              {"\n"}
              <span className="text-mutedText">2</span>   name: <span className="text-emerald-300">"Himanshu Giri"</span>,
              {"\n"}
              <span className="text-mutedText">3</span>   degree: <span className="text-emerald-300">"MCA"</span>,
              {"\n"}
              <span className="text-mutedText">4</span>   role: <span className="text-emerald-300">"Software Developer"</span>,
              {"\n"}
              <span className="text-mutedText">5</span>   skills: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"Node.js"</span>]
              {"\n"}
              <span className="text-mutedText">6</span> {"};"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
