import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import img2 from "../assets/Images/1.jpg";
import img3 from "../assets/Images/2.jpg";
import img5 from "../assets/Images/3.jpg";
import img7 from "../assets/Images/4.jpg";
import img8 from "../assets/Images/5.jpg";
import img9 from "../assets/Images/6.jpg";
import img10 from "../assets/Images/7.jpg";
import img11 from "../assets/Images/8.jpg";
import img12 from "../assets/Images/9.jpg";
import img13 from "../assets/Images/10.jpg";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Character = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Characters = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        //we have to increase scrolling heght of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      //Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", //locomotive element
          scrub: true,
          // markers: true,
        },
        //we have to increase scrolling heght of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Characters
      </Title>
      <Left>
        <p>
          In Jujutsu Kaisen, all living beings emanate energy called Cursed
          Energy (呪力, Juryoku), which arises from negative emotions that
          naturally flow throughout the body. Ordinary people cannot control
          this flow in their bodies. As a result, they continually lose Cursed
          Energy, resulting in the birth of Curses (呪い, Noroi), a race of
          spiritual beings whose primary desire is to bring harm to humanity.
          These Curses are shown as gruesome monsters, onryō (vengeful spirit),
          yūrei (ghosts), and yōkai.
          <br />
          <br />
          Jujutsu Sorcerers (呪術師, Jujutsushi, lit. "Cursed Technique Masters"
          or "Shamans") are people who control the flow of Cursed Energy in
          their bodies, allowing them to use it as they please and also to
          reduce its release. High-ranking Sorcerers and Curses can refine this
          energy and use it to perform Cursed Techniques (呪術式, Jujutsushiki),
          which tend to be unique to the user or their family. An advanced form
          of Cursed Technique is Domain Expansion (領域展開, Ryōiki Tenkai),
          which the users build a pocket dimension of variable size. Inside the
          Domain, all of their attacks are guaranteed to hit and will grow in
          strength.
          <br />
          Source: <a href="https://en.wikipedia.org/wiki/Jujutsu_Kaisen">Wikipedia</a>
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Character img={img2} title="Gojo" />
        <Character img={img3} title="Toji" />
        <Character img={img5} title="Sakuna" />
        <Character img={img7} title="Kenjaku" />
        <Character img={img8} title="Mahito" />
        <Character img={img9} title="Yuta" />
        <Character img={img10} title="Nanami" />
        <Character img={img11} title="Inumaki" />
        <Character img={img12} title="Mechamaru" />
        <Character img={img13} title="Megumi" />
      </Right>
    </Section>
  );
};

export default Characters;
