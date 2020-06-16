import React, { useState } from "react";
import "./Lightbox.css";
import { Image, Transformation } from "cloudinary-react";
import { motion } from "framer-motion";

const variants = {
  enter(dir) {
    return {
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 1000,
    opacity: 0,
  },
};

const Lightbox = ({ toggleLB, index, photoInfo }) => {
  const [page, setPage] = useState(Number(index));
  //hook for setting page direction
  const [dir, setDir] = useState(0);

  const imgCount = photoInfo.length - 1;
  let heroImg = photoInfo.filter((image, i) => {
    if (i == page) {
      return image.public_id;
    }
  });
  console.log(heroImg[0].public_id);
  const goToPrev = () => {
    setDir(-1);
    if (page < 1) {
      setPage(imgCount);
    } else {
      setPage(page - 1);
    }
  };

  const goToNext = () => {
    setDir(1);
    if (page >= imgCount) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <div className="Lightbox">
      <div className="closebtn" onClick={toggleLB}>
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <div className="row">
        <div className="col">
          <div onClick={goToPrev}>
            <i class="fas fa-chevron-circle-left fa-3x text-secondary"></i>
          </div>
        </div>
        <motion.div
          className="col-10"
          key={heroImg[0].public_id}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", duration: 0.2, stiffness: 300, damping: 200 },
          }}
          id="heroImage"
        >
          <Image
            cloudName="dokrpiel5"
            publicId={heroImg[0].public_id}
              
            crop="scale"
          >
            <Transformation width="900" crop="scale" />
          </Image>
        </motion.div>
        <div className="col">
          <div onClick={goToNext}>
            {" "}
            <i class="fas fa-chevron-circle-right fa-3x text-secondary"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
