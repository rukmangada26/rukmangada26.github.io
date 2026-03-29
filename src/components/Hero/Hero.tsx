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
        <h3 className={styles.subText}>I turn data into actionable insights.</h3>
        <p className={styles.description}>
            I am an aspiring Data Scientist with 5+ years of experience in Data Engineering, Machine Learning, and Analytics. Currently pursuing my MS in Business Analytics and Artificial Intelligence at {" "}&nbsp;
        <Link
                href="https://jindal.utdallas.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Highlight>University of Texas at Dallas</Highlight>
        </Link>
      </p>
      <Button className={styles.callToAction} onClick={scrollToContact}>
        Get In Touch
      </Button>
    </div>
  );
};

export default Hero;
