// import React from "react";
// import "./Testimonials.css";
// import leftArrow from "../../assets/leftArrow.png";
// import rightArrow from "../../assets/rightArrow.png";
// import stars from "../../assets/5stars.png";
// import { testimonialsData } from "../../data/testimonialsData";
// import { useState } from "react";
// import { motion } from "framer-motion";
// const Testimonials = () => {
//   const [selected, setSelected] = useState(0);
//   const tLength = testimonialsData.length;
//   const transition = { type: "spring", duration: 1 };
//   return (
//     <div className="testimonials">
//       <div className="bordar">
//         <div className="left-t">
//           <span>Testimonials</span>
//           <span>What our students say</span>

//           <motion.span
//             key={selected}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 100 }}
//             transition={transition}
//           >
//             <div className="stars">
//               <img src={stars} alt="" />
//             </div>

//             {testimonialsData[selected].review}

//             <span>
//               <span style={{ color: "var(--red)" }}>
//                 <br></br>
//                 <br></br>
//                 {testimonialsData[selected].name}
//               </span>{" "}
//               - {testimonialsData[selected].status}
//             </span>
//           </motion.span>

//           <div className="arrows">
//             <img
//               src={leftArrow}
//               alt=""
//               onClick={() => {
//                 selected === 0
//                   ? setSelected(tLength - 1)
//                   : setSelected((prev) => prev - 1);
//               }}
//             />{" "}
//             <img
//               src={rightArrow}
//               alt=""
//               onClick={() => {
//                 selected === tLength - 1
//                   ? setSelected(0)
//                   : setSelected((prev) => prev + 1);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
