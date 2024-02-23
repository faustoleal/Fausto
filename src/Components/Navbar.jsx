import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import DownloadIcon from "@mui/icons-material/Download";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">
        <FontAwesomeIcon icon={faHouse} className="span" />
      </a>
      <a href="#about">
        <FontAwesomeIcon icon={faUser} className="span" />
      </a>
      <a href="#projects">
        <FontAwesomeIcon icon={faBriefcase} className="span" />
      </a>
      <a href="https://github.com/faustoleal" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="span" />
      </a>
      <a href="https://www.linkedin.com/in/fausto-leal-/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} className="span" />
      </a>
      <a href="src/cv/cv-itEN.pdf" download="mi-cv">
        <DownloadIcon className="span" />
      </a>
    </nav>
  );
};

export default Navbar;
