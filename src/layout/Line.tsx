import { motion } from "framer-motion";

export const Line = ({ delay = 0 }) => {
  return (

    <div
      className="text-center text-white bg-[#31302f]"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}>
      <motion.div

        animate={{ x: ["100%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
            delay,
          },
        }}
        style={{ display: "inline-block", paddingRight: "100%" }}
      >
        <span style={{ fontSize: "10px" }}>
          🤔 Curiosity 🔥 Problem-solving  ☕ Collaboration
        </span>
      </motion.div>
    </div>
  )
}