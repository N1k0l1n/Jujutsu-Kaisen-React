import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fire from "../assets/Svgs/fire.json";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5;

  width: 100%;
  color: ${(props) => props.theme.text};

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2, //2
      delay: 3, //2
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <Lottie
          animationData={fire}
          autoplay
          loop
          style={{ width: 60, height: 60 }}
        />

        <Text variants={textVariants} initial="hidden" animate="visible">
          Infinity Exists Everywhere
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
