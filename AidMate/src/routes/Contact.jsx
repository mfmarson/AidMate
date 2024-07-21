import styles from "./modules/Contact.module.css"; // Ensure this path is correct

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us:</h2>
      <p className={styles.email}>megan.marson22@gmail.com</p>
    </div>
  );
};

export default Contact;
