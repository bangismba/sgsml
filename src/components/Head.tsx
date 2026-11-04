
const Head=({t,d}:{t:string;d?:string})=><div className="head"><h1 style={{fontSize:"clamp(2rem,6vw,3.2rem)"}}>{t}</h1>{d&&<p className="lead">{d}</p>}</div>;

export default Head;
