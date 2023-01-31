import me from "./me.JPG";
import { languages, databases, frameworks, frontEnd, others } from "./skills";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <h1 className="about__description__title">About Me</h1>
        <p className="about__description__text">Hi, I am Pravesh Niroula.</p>
        <p className="about__description__text">
          I am a full stack web developer. I have been working on web
          development for 2 years.
        </p>
        <p className="about__description__text">
          I have worked on many projects. I have worked on both frontend and
          backend.
        </p>
        <div className="skills-section">
          <h4 className="skills-section__languages__title">Languages</h4>
          <div className="skills-section__skills">
            {
              languages.map((language) => (
                <div
                  className="skills-section__skill__box"
                  key={language.id}
                  title={language.link}
                >
                  {language.icon}
                  <p className="skills-section__skill__title">
                    {language.title}
                  </p>
                </div>
              ))
            }
          </div>
          <div className="skills-section">
            <h4 className="skills-section__databases__title">Databases</h4>
            <div className="skills-section__skills">
              {
                databases.map((database) => (
                  <div
                    className="skills-section__skill__box"
                    key={database.id}
                    title={database.link}
                  >
                    {database.icon}
                    <p className="skills-section__skill__title">
                      {database.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="skills-section">
            <h4 className="skills-section__frameworks__title">Frameworks</h4>
            <div className="skills-section__skills">
              {
                frameworks.map((framework) => (
                  <div
                    className="skills-section__skill__box"
                    key={framework.id}
                    title={framework.link}
                  >
                    {framework.icon}
                    <p className="skills-section__skill__title">
                      {framework.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="skills-section">
            <h4 className="skills-section__front-end__title">Frontend</h4>
            <div className="skills-section__skills">
              {
                frontEnd.map((front) => (
                  <div
                    className="skills-section__skill__box"
                    key={front.id}
                    title={front.link}
                  >
                    {front.icon}
                    <p className="skills-section__skill__title">
                      {front.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="skills-section">
            <h4 className="skills-section__others__title">Others</h4>
            <div className="skills-section__skills">
              {
                others.map((other) => (
                  <div
                    className="skills-section__skill__box"
                    key={other.id}
                    title={other.link}
                  >
                    {other.icon}
                    <p className="skills-section__skill__title">
                      {other.title}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="about__photo__container">
        <div className="about__photo">
          <img className="about__photo__img" src={me} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
