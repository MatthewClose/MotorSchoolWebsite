// import React from "react";
// import "./Icons.css";
// import { iconsData } from "../../data/iconsData";
// import { motion } from "framer-motion";
// const Icons = () => {
//   const transition = { type: "spring", duration: 2 };
//   return (
//     <div className="Icons" id="icons">
//       <div className="icons-header">
//         <span>Why Should You Choose </span>
//         <span className="stroke-red">Billy Hughes</span>
//         <span>?</span>
//       </div>

//       <div className="icon-categories">
//         {iconsData.map((icons) => (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             transition={{ ...transition, duration: 2 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="category"
//           >
//             <img src={icons.image} alt="" />

//             <span>{icons.heading}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Icons;
