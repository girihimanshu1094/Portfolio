import { skillCategories } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="bg-mainBg">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I am learning and using while building web development projects.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-lg border border-white/10 bg-cardBg p-5 transition hover:-translate-y-1 hover:border-accent/70"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-accent/10 p-3 text-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-primaryText">{category.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-white/10 px-3 py-1 text-sm text-mutedText">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
