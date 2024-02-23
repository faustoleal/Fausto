import { useState } from "react";
import Project from "./Project";

const projectsInfo = [
  {
    background_img:
      "https://github.com/faustoleal/tasty-app/raw/main/img/tasty-desktop.png",
    title: "Tasty App",
    text: "Pagina web realiza con la API de Tasty",
    project_url: "https://faustoleal.github.io/tasty-app/",
    id: 0,
  },
  {
    background_img:
      "https://github.com/faustoleal/toDo-react/raw/main/img/toDo-desktop.png",
    title: "ToDo App",
    text: "Desafio de devChallenges",
    project_url: "https://faustoleal.github.io/toDo-react/",
    id: 1,
  },
  {
    background_img:
      "https://github.com/faustoleal/windbnb-react/raw/main/img/windbnb-desktop.png",
    title: "Windbnb",
    text: "Copia de Airbnb con React",
    project_url: "https://faustoleal.github.io/windbnb-react/",
    id: 2,
  },
  {
    background_img:
      "https://github.com/faustoleal/faustoleal.github.io/raw/gh-pages/aero/img/aero-desktop.png",
    title: "Aero",
    text: "Landing page de una escuela de vuelo",
    project_url: "https://faustoleal.github.io/aero/",
    id: 3,
  },
  {
    background_img:
      "https://github.com/faustoleal/api-clima/raw/gh-pages/api-clima/img/weather-desktop.png",
    title: "Weather APP",
    text: "Pagina del clima usando el API de OpenWeatherMap y el mapa del API de Windy",
    project_url: "https://faustoleal.github.io/api-clima/api-clima/",
    id: 4,
  },
  {
    background_img:
      "https://github.com/faustoleal/proyecto-bootstrap/raw/gh-pages/bootstrap/img/bootstrap-desktop.png",
    title: "Proyecto con Bootstrap",
    text: "Copia de Web Template de W3Schools con Bootstrap",
    project_url:
      "https://faustoleal.github.io/proyecto-bootstrap/bootstrap/bootstrap.html",
    id: 5,
  },
];

const Projects = () => {
  const [project, setProject] = useState(projectsInfo);

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {project.map((el) => (
          <Project key={el.id} data={el} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
