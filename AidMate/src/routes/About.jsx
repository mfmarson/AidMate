/* eslint-disable react/no-unescaped-entities */
import styles from "./modules/About.module.css"; // Ensure this path is correct

const About = () => {
  return (
    <div className={styles.container}>
      <img
        src="./src/assets/Baymax.avif"
        alt="Baymax"
        className={styles.image}
      ></img>
      <p className={styles.aboutMeUi}>
        Introducing AidMate, a first aid application for both web and mobile
        devices, designed to provide quick and efficient first aid instructions
        for people just like you. AidMate was inspired by Baymax, Disney's
        lovable, inflatable, "personal healthcare companion" robot, created to
        offer healthcare to those in need.
        <br></br>
        <br></br>
        Tadashi, Baymax's creator, understood that the core of effective help
        lies in simple, clear instructions. That is exactly what AidMate offers
        easy-to-follow guidance to assist others in need. While we may not have
        awesome robots (yet!), we are proud to present AidMate as "Your First
        Aid Companion."
        <br></br>
        <br></br>
        Our team dreams big, and who knows, maybe one day we'll create a
        real-life Baymax. For now, we're excited to bring you this first step in
        making first aid accessible and straightforward for everyone.
      </p>
    </div>
  );
};

export default About;
