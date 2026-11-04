import { useState, useMemo } from 'react';
import { PROJECTS } from '../data';
import Head from '../components/Head';
import ProjectCard from '../components/ProjectCard';
function Projects(){
  const [st,setSt]=useState("");const [cat,setCat]=useState("");const [yr,setYr]=useState("");
  const uniq=(i:0|1|2|3)=>[...new Set(PROJECTS.map(p=>p[i]))].sort();
  const list=useMemo(()=>PROJECTS.filter(p=>(!st||p[1]===st)&&(!cat||p[2]===cat)&&(!yr||String(p[3])===yr)),[st,cat,yr]);
  const Sel=({l,v,set,opts}:{l:string;v:string;set:(v:string)=>void;opts:(string|number)[]})=><label>{l}<select value={v} onChange={e=>set(e.target.value)}><option value="">All</option>{opts.map(o=><option key={o}>{o}</option>)}</select></label>;
  return(<section className="sec"><div className="wrap">
    <Head t="Projects" d="Completed and ongoing work across Nigeria."/>
    <div className="filters"><Sel l="State" v={st} set={setSt} opts={uniq(1)}/><Sel l="Service category" v={cat} set={setCat} opts={uniq(2)}/><Sel l="Year" v={yr} set={setYr} opts={uniq(3)}/></div>
    {list.length?<div className="grid g3">{list.map(p=><ProjectCard key={p[0]} p={p}/>)}</div>:<p className="mute">No projects match these filters. Clear a filter to see more.</p>}
  </div></section>);
}

export default Projects;
