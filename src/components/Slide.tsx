import { useEffect, useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";

type SlideProps = {
    images: string[];
}
export const Slide = ({ images }: SlideProps) => {

    //page → 현재 보여주는 이미지 인덱스
    //direction → 이동 방향 (+1 오른쪽, -1 왼쪽)
    // const [[page, direction], setPage] = useState([0, 0]);
    const [page, setPage] = useState(0);
    const imageIndex = wrap(0, images.length, page); //무한 루프처럼 보이게
    const [index, setIndex] = useState(0);

    const [direction, setDirection] = useState<"left" | "right">("right");

    // const paginate = (newDirection: number) => { //페이지와 방향 업데이트
    //     setPage([page + newDirection, newDirection]);
    // };
    // const variants = {
    //     enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    //     center: { zIndex: 1, x: 0, opacity: 1 },
    //     exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
    // };

    // 자동으로 넘어가게 하고 싶으면 useEffect 사용

    const prevSlide = () => {
        setDirection("left");
        setPage((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setDirection("right");
        setPage((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        console.log("images : " + images);
    }, [page]);

    return (
         <div className="relative w-full max-w-2xl mx-auto overflow-hidden overflow-scroll rounded-2xl shadow-lg">
      <div className="relative h-64 sm:h-80 md:h-96">
                <img src={images[page]} 
                className={`w-full object-top object-cover transform transition-transform hover:scale-105  overscroll-contain
             
             ${page === index ? "translate-x-0 opacity-100" : ""}
           
            `} />
            { images.length > 1 ? 
                <>
                <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full hover:bg-black/70"
                    >
                        ◀
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1  rounded-full hover:bg-black/70"
                    >
                        ▶
                    </button>
                </>
            
                :
                ""
            }
               
            </div>
            {/* <div className="next" onClick={() => paginate(1)}>다음</div>
            <AnimatePresence>

                {images && images?.map((src) => (
                    <motion.img
                        key={page}          // 페이지마다 key 바뀌면 AnimatePresence가 exit+enter 처리
                        src={src}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={direction}   // variants 함수에 direction 전달
                       className="w-xl h-full object-cover  object-top  rounded-xl"
                    />
                ))
                }
            </AnimatePresence>
            <div className="prev" onClick={() => paginate(-1)}>이전</div> */}

        </div>
    )
}