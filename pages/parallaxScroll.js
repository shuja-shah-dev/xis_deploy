import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/home.module.css";

const ParallaxScroll = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <>
      <div>
        <div className={styles.background} />

        <Parallax pages={3}>
    
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <p className={`text-[4rem] font-bold `}>
              About Us
            </p>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <p
              className={`styles.scrollText w-[40%] text-center items-center text-xl`}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              iusto labore, temporibus quia et vitae quod nihil rerum fugiat
              quisquam vel dolorem earum id! Nobis ipsa tempora dolorum atque
              deserun
            </p>
          </ParallaxLayer>

          <ParallaxLayer
             offset={2}
             speed={1}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            
            <div className={`${styles.card} ${styles.sticky}`}>
              <div data-v-ac85f32a="" className="text-center md:text-left">
                <h4
                  data-v-ac85f32a=""
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-2xl font-bold text-gray-500 text-center md:text-left  mb-4  aos-init aos-animate"
                >
                  Vision &amp; Mission
                </h4>{" "}
                <h3
                  data-v-ac85f32a=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="lh-160 text-3xl text-[#01c9ea] mb-2  text-primary aos-init aos-animate"
                >
                  Conquer Cancer through AI
                </h3>
                <h3
                  data-v-ac85f32a=""
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="lh-160 text-2xl mb-0  font-bold aos-init aos-animate"
                >
                  We develop AI that detects early-stage
                  
                  <br data-v-ac85f32a="" className="hidden-sm-down text-2xl " />
                  cancer and optimizes cancer treatment.
                </h3>
              </div>
            </div>
          </ParallaxLayer>
   
        </Parallax>
      
      </div>
    </>
  );
};

export default ParallaxScroll;
