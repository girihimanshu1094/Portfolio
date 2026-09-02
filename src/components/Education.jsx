const educationList = [
  {
    degree: "Master of Computer Applications",
    college: "ABES Engineering College",
    year: "2025 - Present",
    details: ["CGPA: 9.65"]
  },
  {
    degree: "Bachelor of Computer Applications",
    college: "College Name",
    year: "2022-25",
    details: ["Score: 78.19%"]
  }
];

function Education() {
  return (
    <section id="education" className="bg-mainBg">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and coursework details.</p>

        <div className="mt-8 space-y-5">
          {educationList.map((item) => (
            <div key={item.degree} className="rounded-lg border border-white/10 bg-cardBg p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primaryText">{item.degree}</h3>
                  <p className="mt-1 text-sm text-mutedText">{item.college}</p>
                </div>
                <span className="w-fit rounded-md border border-accent/30 px-3 py-1 text-sm text-accent">{item.year}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-mutedText">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
