import { EQUIP } from '../data';
import Head from '../components/Head';
function Equipment(){
  return(<section className="sec"><div className="wrap">
    <Head t="Equipment" d="Heavy-duty vehicles and construction equipment ready for site work."/>
    <div className="grid g3">{EQUIP.map(e=><div className="card" key={e}><div className="ph">Photo of {e.toLowerCase()}</div><h3 style={{margin:0}}>{e}</h3></div>)}</div>
  </div></section>);
}

export default Equipment;
