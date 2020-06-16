import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "cloudinary-react";

const spring = {
  type: "spring",
  damping: 200,
  stiffness: 300,
};

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function Portfolio({ toggleLB, photoInfo }) {
  return (
    <div className="container">
      <div className="card-columns">
        <AnimatePresence>
          {photoInfo.map((item, id) => {
            return (
              <motion.div
                key={item.public_id}
                className="card"
                whileHover={{ y: -5, transition: { duration: 0.5 } }}
                layoutTransition={spring}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
              >
                <Image
                  cloudName="dokrpiel5"
                  publicId={item.public_id}
                  width="300"
                  crop="scale"
                  onClick={toggleLB}
                  id={id}
                  className="card-img-top"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Portfolio;
