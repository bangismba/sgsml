import { useState } from 'react';
import { SERVICES, CATS } from '../data';
import Head from '../components/Head';
function Services(){
  const [cat,setCat]=useState("All");
  const list=SERVICES.filter(s=>cat==="All"||s[0]===cat);
  return(<section className="sec"><div className="wrap">
    <Head t="Services" d="Eleven services across six categories."/>
    <div className="chips" role="group" aria-label="Filter by category">
      {["All",...CATS].map(c=><button key={c} onClick={()=>setCat(c)} aria-pressed={cat===c} className={"tag"+(cat===c?" on":"")}>{c}</button>)}
    </div>
    <div className="grid g3">{list.map(s=><div className="card" key={s[1]}><h3>{s[1]}</h3><p>{s[2]}</p><span className="tag" style={{marginTop:"1rem"}}>{s[0]}</span></div>)}</div>
  </div></section>);
}

export default Services;
