/* eslint-disable react/no-unescaped-entities */
import styles from "../modules/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutAidMate}>About Us</h1>
      <p className={styles.aboutMeUi}>
        The inspiration for AidMate originated from a personal experience
        several years ago. During a pool party with friends and their children,
        a distressing incident occurred when their eldest daughter, around 5 or
        6 years old, began choking on a cheese puff. In that moment of panic, I
        realized how unprepared I was to handle such an emergency, lacking both
        the knowledge and resources to provide immediate help. Fortunately, her
        father swiftly intervened and averted the crisis. This incident stayed
        with me, and when presented with the opportunity to develop an
        application from scratch, AidMate was the natural choice.
        <br></br>
        <br></br>
        AidMate is built on the principle that effective assistance hinges on
        clear, straightforward instructions. Our platform provides
        easy-to-follow guidance to help individuals confidently respond in
        emergency situations. We are proud to introduce AidMate as "Your First
        Aid Companion," dedicated to making first aid accessible and simple for
        everyone.
        <br></br>
        <br></br>
        Our team is driven by ambitious goals, and we envision a future where we
        can develop even more advanced tools to support emergency response. For
        now, we are thrilled to offer this initial step toward empowering
        individuals with the knowledge and confidence to act decisively in
        critical moments.
      </p>
    </div>
  );
};

export default About;
