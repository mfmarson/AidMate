import styles from "./modules/Contact.module.css"; 

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.feedback}>We love hearing your feedback!</h1>
      <h2>Contact Us:</h2>
      <p className={styles.email}>megan.marson22@gmail.com</p>
    </div>
  );
};

export default Contact;
