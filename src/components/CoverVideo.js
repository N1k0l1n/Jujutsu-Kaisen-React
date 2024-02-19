import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/bg.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 48em) {
    object-position: center 10%;
  }

  @media (max-width: 30em) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  text-align: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -0.5rem;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, //2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.4"
          >
            J
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.36"
          >
            J
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.24"
          >
            K
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.16"
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.12"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.12"
          >
            s
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.08"
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.04"
          >
            n
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Shine with Elegance
        </motion.h2>
      </Title>
      <Video src={MainVideo} type="video/mp4" autoPlay  loop />
    </VideoContainer>
  );
};

export default CoverVideo;