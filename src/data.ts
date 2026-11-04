// [name, state, category, year, status, optional image path in /public]
export type Project=[string,string,string,number,string,string?];
export const PAGES:[string,string][]=[["home","Home"],["about","About"],["services","Services"],["projects","Projects"],["equipment","Equipment"],["contact","Contact"]];
export const SERVICES:[string,string,string][]=[
["Architectural","Architectural Design","Concept, planning and working drawings for buildings."],
["Architectural","Structural & Engineering Design","Structural calculations, bills of quantities and engineering drawings."],
["Building","Residential & Commercial Buildings","Estates, offices, shops and mixed-use developments."],
["Building","Institutional Buildings","Schools, clinics, hostels and government offices."],
["Roads","Road Construction","Urban, rural and access roads built to specification."],
["Roads","Drainage & Culverts","Drains, culverts and erosion control along road corridors."],
["Bridges","Bridge Construction","Culvert bridges and river crossings for communities."],
["Bridges","Bridge Rehabilitation","Repair and strengthening of existing bridges."],
["Project Monitoring","Supervision & Monitoring","Site supervision, progress reports and quality checks."],
["Maintenance","Building Maintenance","Planned repairs, renovation and upkeep of facilities."],
["Maintenance","Road Maintenance","Patching, regrading and routine road upkeep."]];
export const CATS:string[]=["Architectural","Building","Roads","Bridges","Project Monitoring","Maintenance"];
export const PROJECTS: Project[] = [
  ["Community access road", "Kaduna", "Roads", 2024, "Completed",
    "/images/projects/road.png"],

  ["Primary school block", "Niger", "Building", 2023, "Completed",
    "/images/projects/Primary%20school%20block.png"],

  ["River crossing bridge", "Kogi", "Bridges", 2025, "Ongoing",
    "/images/projects/River%20crossing%20bridge.png"],

  ["Township drainage works", "FCT", "Roads", 2025, "Ongoing",
    "/images/projects/Township%20drainage%20works.png"],

  ["Office complex design", "FCT", "Architectural", 2023, "Completed",
    "/images/projects/Office%20complex%20design.png"],

  ["Estate road upkeep", "Kano", "Maintenance", 2024, "Completed",
    "/images/projects/Estate%20road%20upkeep.png"],
];
export const EQUIP:string[]=["Excavators","Bulldozers","Dump trucks","Graders","Concrete mixers","Rollers"];
export const CLIENTS = [
  { name: 'Federal Ministry of Works', logo: '/clients/fmw.png' },
  { name: 'Kaduna State Government', logo: '/clients/kaduna.png' },
  { name: 'Jaiz Bank Plc', logo: '/clients/jaiz.png' },
  { name: 'First Bank Plc', logo: '/clients/firstbank.png' },
  { name: 'NNPC', logo: '/clients/nnpc.png' },
  { name: 'UNDP', logo: '/clients/undp.png' },
];

export const CLIENTS2 = [
  { name: 'Dangote Group', logo: '/clients/dangote.png' },
  { name: 'Julius Berger', logo: '/clients/julius-berger.png' },
  { name: 'Lagos State Government', logo: '/clients/lagos.png' },
  { name: 'FCT Abuja', logo: '/clients/fct.png' },
  { name: 'USAID', logo: '/clients/usaid.png' },
  { name: 'BUA Group', logo: '/clients/bua.png' },
];