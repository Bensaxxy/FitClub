import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerHeight <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*best ad section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "158" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading*/}
        <div className="hero-text ">
          <div>
            <span className="stroke-text ">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body </span>
          </div>
          <div>
            <span>
              {" "}
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>EVENT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay={4} preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay={4} preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* hero button*/}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right section*/}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images*/}
        <img className="hero-image" src={hero_image} />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          className="hero-image-back"
          src={hero_image_back}
        />

        <motion.div
          initial={{ right: "55rem" }}
          whileInView={{ right: "38rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
