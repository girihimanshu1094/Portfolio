import { FaAward, FaCodeBranch, FaBook, FaCertificate, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Certifications",
    text: "Full Stack Development Course – Physics Wallah (PW Skills)",
    icon: FaCertificate
  },
  {
    title: "Academics",
    text: "Maintained a CGPA of 9.65/10 in the MCA program (up to Semester II).",
    icon: FaBook
  },
  {
    title: "Coding Achievements",
    text: "Solved 250+ DSA problems on LeetCode.",
    icon: FaCodeBranch
  },
  {
    title: "Hackathon",
    text: "Program Coordinator - HackIndia AI & DeepTech Hackathon 2026 ",
    icon: FaTrophy
  }
];

function Achievements() {
  return (
    <section id="achievements" className="bg-secondBg">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">
          Certifications, hackathons, coding achievements and accomplishments.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-lg border border-white/10 bg-cardBg p-5 transition hover:border-accent/70">
                <div className="mb-4 inline-flex rounded-md bg-accent/10 p-3 text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-primaryText">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mutedText">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
