import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            SPEEDY FOOD HAPPY SOUL
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
          100 Feet Ring Road,
            <br /> BSK III Stage,
            <br />Bangalore-560085
          </p>
          <p className={styles.text}>
          +91 XXXXXXXXXX,
            <br /> +91 XXXXXXXXXX
          </p>
          <p className={styles.text}>
          For Order
            <br />080-XX-XXXXXX
            <br />place_order@campes.com
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY
            <br /> 9:00 – 3:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;