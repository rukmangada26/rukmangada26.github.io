"use client";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight";
import Link from "@/components/Link";
import styles from "./Hero.module.css";

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    contact!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.hero}>
      <p className={styles.text}>
        <Highlight>Hi, my name is</Highlight>
      </p>
      <h2 className={styles.name}>Rukmangada. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2>
        <h3 className={styles.subText}>I love challenging myself every day
            {/*<a href="https://git.io/typing-svg"><img*/}
            {/*    src="https://readme-typing-svg.herokuapp.com?font=Open+Sans&size=40&pause=1000&color=F7F7F7&center=false&vCenter=true&random=false&width=435&lines=Cloud+Engineer;Full+Stack+Developer;ML+Engineer;Back+End+Developer"*/}
            {/*    alt="Typing SVG"/></a>*/}
        </h3>
        <p className={styles.description}>
            I bring over 5 years of experience specializing in Data Engineering and Data Analytics. I am currently pursuing my MS from {" "}&nbsp;
            <Link
                href="https://jindal.utdallas.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Highlight>University of Texas at Dallas </Highlight>
        </Link>
           pursuing a Masters in Business Analytics and Artificial Intelligence.
      </p>
      <Button className={styles.callToAction} onClick={scrollToContact}>
        Get In Touch
      </Button>
    </div>
  );
};

export default Hero;
