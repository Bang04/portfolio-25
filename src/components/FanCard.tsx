"use client"
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, useRef } from "react"

type SlideProps = {
    images: string[];
}
export const FanCard = ({ images }: SlideProps) => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setTablet] = useState(false);
    const [isWeb, seWeb] = useState(false);

    const [isVisible, setIsVisible] = useState([true, false, false]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div className="flex md:w-3/5">
            <AnimatePresence initial={false}>
                <div ref={ref} className="flex justify-center w-full">
                    {images && images.map((src, idx) => {

                        let rotate = 0;
                        let xOffset = 0;
                        const count = images.length;
                        if (count === 2) {
                            rotate = idx === 0 ? -10 : 10;
                            xOffset = idx === 0 ? -10 : 10;
                        } else if (count === 3) {
                            rotate = idx === 0 ? -15 : idx === 1 ? 0 : 15;
                            xOffset = idx === 0 ? -10 : idx === 1 ? 0 : 10;
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
                                className="min-w-40 h-80 object-cover object-top rounded-xl"
                            />
                        )
                    })}
                </div>
            </AnimatePresence>
        </div>
    )
}


