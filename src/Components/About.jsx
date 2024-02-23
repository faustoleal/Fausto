import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGitAlt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>About me</h1>
      <p>
        I am a dedicated, creative and passionate front-end developer. I am
        always looking for new challenges, knowledge and experiences.
      </p>
      <p>
        Why should you hire me? Because I am innovative, minimalist and
        perfectionist, I am looking for high standards and newest technologies
        in my projects. I'm improving all day and learning new stuff to be a
        better developer.
      </p>
      <p>
        Also i have goods soft skills like teamwork, problem solving,
        adaptability, creative, communication, self-learning and self-awareness
      </p>
      <h3>Tech Stack</h3>
      <div className="stacks">
        <FontAwesomeIcon
          icon={faHtml5}
          className="tech"
          style={{ color: "#FF5733" }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          className="tech"
          style={{ color: "#264de4" }}
        />
        <FontAwesomeIcon
          icon={faJs}
          className="tech"
          style={{ color: "#f0db4f" }}
        />
        <FontAwesomeIcon
          icon={faReact}
          className="tech"
          style={{ color: "61DBFB" }}
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          className="tech"
          style={{ color: "#563d7c" }}
        />
        <FontAwesomeIcon
          icon={faGitAlt}
          className="tech"
          style={{ color: "F1502F" }}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          className="tech"
          style={{ color: "3C873A" }}
        />
      </div>
    </section>
  );
};

export default About;
