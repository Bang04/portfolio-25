import { motion } from "framer-motion";
import cat from "../assets/images/cutecat.png";
import stiker from "../assets/images/sticker.png";
export const Home = () => {
    return (
        <div className="font-sans bg-white text-gray-900 min-w-xs w-full h-full">
            <div className="">
                <motion.div
                    animate={{ backgroundColor: "##fcb04c", borderRadius: "15%" }}
                    transition={{ duration: 2 }}
                    className="flex justify-center w-full h-70 md:h-110  overflow-hidden rounded-r-full bg-[#fcb04c]" >


                    {/* <motion.div
                    initial={{ opacity: 1, x:-100,  y: -100 }}   // 시작 상태 (투명하고 아래쪽)
                    animate={{ opacity: 1, x:20, y: 230 }}    // 애니메이션 완료 상태 (불투명하고 원위치)
                    transition={{ duration: 2 }}
                    
                    className="absolute top-0  left-20 transform rotate-6 z-20 "
                        // 애니메이션 시간 (0.5초)
                >   <div className=" flex flex-row-reverse ">
                        <img className="w-20 " src={cat} />
                    </div>
                </motion.div> */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }} // 처음에는 작고 투명
                            animate={{ scale: 1, opacity: 1 }} // 나타날 때 크기 1, 완전히 불투명
                            transition={{ type: "spring", stiffness: 500, damping: 30 }} // 스프링 효과로 탄력있게
                            className="flex"
                        // style={{position: "absolute", top:164, left:100,  width: 300, height: 300 }}
                        >
                            <img className="w-full" src={stiker} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: [0, -40, 0, -20, 0, 0, -30, 0, -10, 0] }}  // 위로 점프하고 다시 내려오는 y값
                            transition={{
                                delay: 1,        // 고양이 미끄러진 후 3초 기다림
                                duration: 1.5,   // 전체 애니메이션 시간
                                ease: "easeInOut"
                            }}
                            className="absolute inset-y-auto  top-35 md:top-70">
                            <div className=" text-white font-bold text-4xl md:text-7xl ">
                                <p>Hey! I'm  <span className="text-6xl md:text-8xl ">[EunKyeong],</span></p>
                                <p>a frontend developer.</p>
                            </div>
                        </motion.div>
                   
                </motion.div>
        </div>
    </div>
    );
};