const Project = ({ data }) => {
  return (
    <article className="project">
      <div className="img-box">
        <img src={data.background_img} />
      </div>
      <aside className="project-details">
        <h3>{data.title}</h3>
        <h4>{data.text}</h4>
        <a href={data.project_url}>View</a>
      </aside>
    </article>
  );
};

export default Project;
