import { motion } from "framer-motion";

export const Divider = () => {
  return (
    <motion.div
      className="w-full flex justify-center py-12"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-3/4 h-[2px] bg-highlight relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 w-6 h-6 rounded-full bg-primary transform -translate-y-1/2"
          animate={{ left: ["0%", "95%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};
