
"use client"

import { useRef } from "react"

import { motion } from "framer-motion"
import nremsLogin from "../assets/images/nrems/m_login.png";
import nremsMain from "../assets/images/nrems/m_main.png";
import nremsSub1 from "../assets/images/nrems/m_sub1.png";
import nremsSub2 from "../assets/images/nrems/m_sub2.png";


import solMain from "../assets/images/solariver/w_main.png";
import w_pw_day_d from "../assets/images/solariver/w_pw_day_d.png";
import w_pw_day_g from "../assets/images/solariver/w_pw_day_g.png";

const data = [ {mode : "web"}, {nremsLogin, nremsMain, nremsSub1, nremsSub2}]
const data1 = [solMain,w_pw_day_d,w_pw_day_g];

const projects = [
  {
    mode: "mobile",
    images: [
     nremsLogin, nremsMain, nremsSub1, nremsSub2
    ],
  },
  {
    mode: "web",
    images: [
     solMain,
     w_pw_day_d,
     w_pw_day_g
    ],
  },
];

export const ImageSlide = () => {
    const mode = "web";

    return (
       
        <div className="w-screen overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory">
            {data1.map((image: any, index: number) => (
                <motion.div
                    key={index}
                    className="w-70 h-140 flex-shrink-0 snap-start flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={image}
                        alt="example"
                        className="w-full h-full object-cover object-center border-1 border-gray-500 rounded-2xl"
                    />
                </motion.div>
            ))}
        </div>
    )
}

//  <div className="w-screen overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory">
//             {data1.map((image: any, index: number) => (
//                 <motion.div
//                     key={index}
//                     className="w-70 h-140 flex-shrink-0 snap-start flex items-center justify-center"
//                     initial={{ opacity: 0, x: 100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <img
//                         src={image}
//                         alt="example"
//                         className="w-full h-full object-cover object-center border-1 border-gray-500 rounded-2xl"
//                     />
//                 </motion.div>
//             ))}
//         </div>
