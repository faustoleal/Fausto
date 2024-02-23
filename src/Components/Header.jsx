import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Header = () => {
  return (
    <header className="header" id="home">
      <p className="title">
        Hi !, My name is <b>Fausto</b>
      </p>
      <p className="subtitle">
        And I'm a <i>Front end Developer</i>
      </p>
      <div className="contact">
        <a href="https://github.com/faustoleal" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="span" />
        </a>
        <a href="https://www.linkedin.com/in/fausto-leal-/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className="span" />
        </a>
      </div>
      <a href="#about" className="read">
        <p>Read more</p>
        <ArrowDownwardIcon className="arrow" />
      </a>
    </header>
  );
};

export default Header;
