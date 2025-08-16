import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import enterweb from "../assets/images/project/Enterainment-web.png";
import cartweb from "../assets/images/project/ListWithCart-web.png";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";


export const Project = ({menuRef}:any) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
        controls.start("visible");
        }
    }, [isInView, controls]);
  

     const transition = {
       
    };
                
    return (
        <div ref={menuRef} >
           <motion.div
                className="md:min-h-150 bg-[#f9eee2]" >
                <div className="text-lg font-semibold text-center">📦Project</div>
                <div className="flex flex-row flex-wrap m-auto min-w-3xs max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                    type: "spring", 
                                    stiffness: 300,
                                    duration: 0.8,
                                   // delay: 1,   
                                    ease: [0.68, -0.55, 0.68, 1.55], // back easing (튕김 느낌)
                                }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className="w-full h-60 overflow-hidden shadow-sm rounded-3xl">
                            <img className="w-full h-full  object-cover  object-top " src={crowdweb} />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                    type: "spring", 
                                    stiffness: 300,
                                    duration: 0.8,
                                    ease: [0.68, -0.55, 0.68, 1.55], // back easing (튕김 느낌)
                                }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={{ scale: 1.1, 
                                        rotate: 3, 
                                        transition: {
                                            duration: 0.1,
                                            type: "tween", // 👈 hover는 별도 트랜지션 줘야 확실하게 작동
                                          }, 
                                        }}
                            className="w-full h-60 overflow-hidden shadow-sm rounded-3xl">
                            <img src={cartweb} />
                        </motion.div>

                        <motion.div  
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                    type: "spring", 
                                    stiffness: 300,
                                    duration: 0.8,
                                    //delay: 2,   
                                    ease: [0.68, -0.55, 0.68, 1.55], // back easing (튕김 느낌)
                                }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className="w-full h-60 overflow-hidden shadow-sm rounded-3xl">
                           <img src={enterweb} />
                       </motion.div>

                         <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                    type: "spring", 
                                    stiffness: 300,
                                    duration: 0.8,
                                    ease: [0.68, -0.55, 0.68, 1.55], // back easing (튕김 느낌)
                                }}
                            viewport={{ once: true, amount: 0.4 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            className="w-full h-60 overflow-hidden shadow-sm rounded-3xl">
                            <img src={sunnysweb} />
                       </motion.div>
                </div>

            </motion.div>
        </div>
    );
};