//   <div>
//     <p className="text-4xl font-black text-primary">15+</p>
//     <p className="text-slate-400 mt-2 text-sm uppercase tracking-wider">
//       Years Experience
//     </p>
//   </div>

//   <div>
//     <p className="text-4xl font-black text-primary">80+</p>
//     <p className="text-slate-400 mt-2 text-sm uppercase tracking-wider">
//       Completed Projects
//     </p>
//   </div>

//   <div>
//     <p className="text-4xl font-black text-primary">25+</p>
//     <p className="text-slate-400 mt-2 text-sm uppercase tracking-wider">
//       Engineering Partners
//     </p>
//   </div>

//   <div>
//     <p className="text-4xl font-black text-primary">100%</p>
//     <p className="text-sm uppercase tracking-wider">
//       Licensed Activity
//     </p>
//   </div>
import { v4 as uuidv4 } from "uuid";
export const certifiedItems = [
  {
    id: uuidv4(),
    title: "15+",
    text: "Years Experience",
  },
  {
    id: uuidv4(),
    title: "80+",
    text: "Completed Projects",
  },
  {
    id: uuidv4(),
    title: "25+",
    text: "Engineering Partners",
  },
  {
    id: uuidv4(),
    title: "100%",
    text: "Licensed Activity",
  },
];
