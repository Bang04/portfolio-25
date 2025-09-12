"use client"
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react"

type SlideProps = {
    images: string[];
}

export const FanCard = ({ images }: SlideProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className="flex md:w-3/5">
            <AnimatePresence initial={false}>
                <div ref={ref} className="flex justify-center items-center w-full">
                    {images && images.map((src, idx) => {
                        let rotate = 0;
                        let xOffset = 0;
                        const count = images.length;
                        if (count === 2) {
                            rotate = idx === 0 ? -10 : 10;
                            xOffset = idx === 0 ? -10 : 10;
                        } else if (count === 3) {
                            rotate = idx === 0 ? -15 : idx === 1 ? 0 : 15;
                           xOffset = idx === 0 ? 20 : idx === 1 ? 0 : -20;
                            
                        }
                        return (
                            <motion.img
                                key={src + idx}
                                src={src}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1, rotate, x: xOffset }
                                        : { opacity: 0, scale: 0 }
                                }
                                transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="max-w-60 min-w-20 h-80 object-cover object-top rounded-xl"
                            />
                        )
                    })}
                </div>
            </AnimatePresence>
        </div>
    )
}


