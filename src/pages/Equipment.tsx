
import { EQUIP } from '../data';
import Head from '../components/Head';

const EQUIPMENT_IMAGES: Record<string, string> = {
  'Excavators': '/images/equipment/excavators.webp',
  'Bulldozers': '/images/equipment/bulldozers.webp',
  'Dump trucks': '/images/equipment/dump-trucks.webp',
  'Graders': '/images/equipment/graders.webp',
  'Concrete mixers': '/images/equipment/concrete-mixers.webp',
  'Rollers': '/images/equipment/rollers.webp',
};

function Equipment() {
  return (
    <section className="sec">
      <div className="wrap">

        <Head
          t="Equipment"
          d="Heavy-duty vehicles and construction equipment ready for site work."
        />

        <div className="grid g3">
          {EQUIP.map((e) => (
            <div className="card equipment-card" key={e}>

              <div className="equipment-image">
                <img
                  src={EQUIPMENT_IMAGES[e]}
                  alt={`${e} - Sayaya General Supply Merchant Limited`}
                  loading="lazy"
                />
              </div>

              <div className="equipment-info">
                <h3>{e}</h3>
                <span>Construction Equipment</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Equipment;
