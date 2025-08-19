import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import enterweb from "../assets/images/project/Enterainment-web.png";
import cartweb from "../assets/images/project/ListWithCart-web.png";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";

const projects = [
    { image: crowdweb , description: "첫 번째 프로젝트" },
    { image: enterweb, description: "두 번째 프로젝트" },
    { image: cartweb, description: "세 번째 프로젝트" },
    { image: sunnysweb, description: "네 번째 프로젝트" },
  ];

export const Project = () => {

    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
     
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
        <>
          <div className="text-lg font-semibold text-center">📦Project</div>
          <div className="flex flex-col">
            
        {
            projects.map((project, i:number) => {
                return(       
                <div
                    key={i}
                    className="flex w-5/6 m-auto h-64 overflow-hidden rounded-2xl shadow-lg"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
            >
                {/* 이미지 영역 */}
                <motion.div
                    animate={{ width: hovered ? "50%" : "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full"
                >
                    <img
                    src={project.image} 
                    alt="example"
                    className="w-full h-full object-top object-cover"
                    />
                </motion.div>

                {/* 설명 영역 */}
                <motion.div
                    animate={{ width: hovered ? "50%" : "0%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden flex items-center justify-center bg-white"
                >
                    <motion.p
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: hovered ? 0.2 : 0 }}
                    className="p-6 text-gray-700"
                    >
                   핵심 기능 / 역할:
                    - 프로젝트 카드 hover 시 이미지 축소 및 설명 표시 애니메이션 구현
                    - 반응형 디자인 적용 및 TailwindCSS로 레이아웃 구성
                    - React 컴포넌트 재사용성을 고려한 구조 설계

                    </motion.p>
                </motion.div>
            </div>
        ) })
        }
      
          </div>    
    </>
    );
};