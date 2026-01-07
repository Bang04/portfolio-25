import { motion } from "framer-motion";
import stiker from "../../assets/images/sticker.png";
export const Home = () => {
    return (
        <div className="font-sans text-gray-900 min-w-xs w-full h-full">
            <>
                 {/* 베경  */}
                <motion.div
                    initial={{ borderRadius: "16%", scale: 0.9 }}
                    animate={{ borderRadius: "50%", scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}

                    className="flex justify-center w-full h-70 md:h-110  overflow-hidden rounded-r-full  bg-amber-200" >
                     {/* 이모지  */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }} // 처음에는 작고 투명
                        animate={{ scale: 1, opacity: 1 }} // 나타날 때 크기 1, 완전히 불투명
                        transition={{ type: "spring", stiffness: 500, damping: 30 }} // 스프링 효과로 탄력있게
                        className="flex"
                    // style={{position: "absolute", top:164, left:100,  width: 300, height: 300 }}
                    >
                        <img className="w-full" src={stiker} />
                    </motion.div>
                    {/* 텍스트 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: [1, 1.05, 1, 1.03, 1],
                            rotate: [0, -1, 1, 0],
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 1.4,
                            ease: "easeInOut",
                        }}
                        className="absolute  top-[25rem] md:top-[28rem]">
                        <div className="font-extrabold tracking-tight leading-tight text-gray-900">
                            <p className="text-3xl md:text-6xl">
                                Hey! I'm{" "}
                                <span className="text-4xl md:text-7xl text-amber-500">
                                    EunKyeong
                                </span>
                                ,
                            </p>
                            <p className="text-2xl md:text-4xl font-semibold mt-2">
                                a frontend developer.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </>
        </div>
    );
};