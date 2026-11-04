import type { Project } from '../data';

function ProjectCard({p}:{p:Project}){
  return(<article className="card">{p[5]?<img className="ph" src={p[5]} alt={p[0]} style={{objectFit:"cover",width:"100%",display:"block"}}/>:<div className="ph" role="img" aria-label="Project photo placeholder">Project photo</div>}
    <h3>{p[0]}</h3><span className="tag on">{p[4]}</span><span className="tag">{p[1]}</span><span className="tag">{p[2]}</span><span className="tag">{p[3]}</span></article>);
}

export default ProjectCard;
