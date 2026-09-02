const facts = [
  { label: "Education", value: "MCA" },
  { label: "Focus", value: "Full Stack Development" },
  { label: "Languages", value: "Java, C++, JavaScript" },
  { label: "Frontend", value: "React + Tailwind CSS" },
  { label: "Backend", value: "Node.js + Express" }
];

function About() {
  return (
    <section id="about" className="bg-secondBg">
      <div className="section-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I am an MCA fresher with a strong interest in software development, web technologies and problem solving.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-mutedText sm:text-base">
            <p>
              I like creating practical web applications that are simple to use and easy to maintain. My current focus is
              improving my frontend skills with React and Tailwind CSS while also learning backend development using
              Node.js, Express.js and databases.
            </p>
            <p>
              Along with development, I practice DSA and programming fundamentals because they help me write better
              logic and solve problems with more confidence. I am looking for internships and entry-level roles where I
              can contribute, learn from experienced developers and grow as a software engineer.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-cardBg p-5 shadow-lg shadow-black/10">
          <h3 className="text-lg font-semibold text-primaryText">Quick Facts</h3>
          <div className="mt-5 space-y-4">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                <p className="text-xs uppercase tracking-wide text-accent">{fact.label}</p>
                <p className="mt-1 text-sm font-medium text-gray-200">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
