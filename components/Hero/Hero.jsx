import React from "react";
import styles from "../Hero/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <video
        style={{objectfit:"cover", width:"100%",height:"100%",position:"fixed",zIndex:"-1"
        }}
        src="../../public/video/intro-video.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className={styles.title}> Come have a drink :)</h1>
      <div className="hero-button">
        <button>
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Hero;
