import "./Education.css";

export default function Education() {
  const education = [
    {
      degree: "BSCS",
      years: "2015–2019",
      university: "University of South Asia, Lahore",
      details: "Computer Science • Projects, DSA, Web Development • Final Year Project"
    },
    {
      degree: "FSc. Pre-Engineering",
      years: "2013–2015",
      university: "Punjab Group Of Colleges, Lahore",
      details: "Pre-Engineering • Mathematics, Physics, Chemistry"
    }
  ];

  return (
    <section id="education" className="edu">
      <div className="edu__container">
        <header className="edu__header">
          <h2 className="edu__title">Education</h2>
          {/* <div className="edu__line" /> */}
           <hr className="neon-line"></hr>
        </header>

        <div className="edu__list">
          {education.map((item, idx) => (
            <article className="edu__item" key={idx}>
              <div className="edu__left">
                <div className="edu__bullet" aria-hidden="true">
                  <span className="edu__arrow">›</span>
                </div>

                <div className="edu__leftText">
                  <p className="edu__degree">{item.degree}</p>
                  <p className="edu__years">{item.years}</p>
                </div>
              </div>

              <div className="edu__right">
                <p className="edu__uni">{item.university}</p>
                <p className="edu__details">{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
