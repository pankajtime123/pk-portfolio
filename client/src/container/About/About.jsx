import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { COLLECTIONS, DOCUMENTS } from "../../constants/firebase";
import { getData } from "../../firebase/functions";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    getData(COLLECTIONS.about, DOCUMENTS.aboutItems).then((data) => {
      console.log("khadsfk", data);
      setAbouts(data);
    });

    // client.fetch(query).then((data) => {
    //   setAbouts(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts?.map((about, index) => (
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__profile-item"
            key={about?.title + index}
          >
            <img src={about?.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
