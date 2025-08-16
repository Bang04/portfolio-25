import { motion } from "framer-motion";
import cat from "../assets/images/cutecat.png";
export const Home = () => {
    return (


   <div className="font-sans bg-white text-gray-900">
        <div className="w-full h-140">
            <motion.div
              animate={{ backgroundColor: "##fcb04c", borderRadius: "15%" }}
                transition={{ duration: 2 }}
                 className="flex w-full h-100 overflow-hidden rounded-r-full bg-[#fcb04c]" >


                <motion.div
                    initial={{ opacity: 1, x:-100,  y: -100 }}   // 시작 상태 (투명하고 아래쪽)
                    animate={{ opacity: 1, x:20, y: 230 }}    // 애니메이션 완료 상태 (불투명하고 원위치)
                    transition={{ duration: 2 }}
                    
                    className="absolute top-0  left-20 transform rotate-6 z-20 "
                        // 애니메이션 시간 (0.5초)
                >   <div className=" flex flex-row-reverse ">
                        <img className="w-20 " src={cat} />
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: [0, -40, 0, -20, 0, 0, -30, 0, -10, 0] }}  // 위로 점프하고 다시 내려오는 y값
                    transition={{
                        delay: 3,        // 고양이 미끄러진 후 3초 기다림
                        duration: 1.5,   // 전체 애니메이션 시간
                        ease: "easeInOut"
                    }}
                    className="absolute left-50 text-white rounded text-7xl font-bold  z-10 "
                >
                    <p><div className="text-8xl">Hey!</div> I'm <b className="text-5xl">[EunKyeong]</b>,</p>
                    <p>a frontend developer.</p>
                </motion.div>
            </motion.div>
        </div>
    </div>
       
    );
};