import React from "react";
import { motion } from "framer-motion";
const index = () => {
    return (
        <div className="container mt-5 p-5 bg-light">
            <motion.div whileHover={{ scale: 1.2, x: 100 }}>
                Hello World
            </motion.div>
        </div>
    );
};

export default index;
