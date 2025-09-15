import { motion } from "framer-motion"

type imageSlideType = {
    images : any[],
    mode : string
}

export const ImageSlide = (props: imageSlideType) => {
   
    const isWeb = props.mode === "web"? true : false;
   
    return (
        <div className="w-screen max-w-full overflow-x-scroll overflow-y-hidden flex snap-x snap-mandatory">
            {props.images.map((image: any, index: number) => (
                <motion.div
                    key={index}
                    className={`${isWeb? "w-full h-full" : "w-[40%] h-auto"} flex-shrink-0 snap-start flex items-center justify-center`}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={image}
                        alt="example"
                        className="w-full  h-full object-cover object-center border-1 border-gray-500 rounded-2xl"
                    />
                </motion.div>
            ))}
        </div>
    )
}