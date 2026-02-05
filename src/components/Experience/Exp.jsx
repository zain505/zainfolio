// ExperienceSection.jsx
import React from "react";
import "./Exp.css";

const __exp = [
  {
    period: "2020 — Present",
    company: "Infotech Group Pvt Ltd",
    title: "Sr. Software Engineer",
    featured: true,
  },
  {
    period: "2019 — 2020",
    company: "Macrise Tech Solution",
    title: "Software Engineer",
  },
];

export default function ExperienceSection() {
  return (
    <section className="expSection" aria-label="My experience">
      <div className="expFrame">
        <div className="expCard">
          <header className="expHeader">
            <h2 className="expTitle">
              My <span>Experience</span>
            </h2>
          </header>

          <div className="expList" role="list">
            {__exp.map((item) => (
              <article
                key={`${item.period}-${item.company}`}
                className={`expRow ${item.featured ? "isFeatured" : ""}`}
                role="listitem"
              >
                <div className="expPeriod">{item.period}</div>

                <div className="expBody">
                  <div className="expCompany">{item.company}</div>
                  <div className="expRole">{item.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
