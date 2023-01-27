import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CAMPES-SPEEDY FOOD HAPPY SOUL</h1>
      <p className={styles.desc}>
        Get food sold across restaurants and eateries in PES in one place. Place an order with one click. Explore everything from Pizza's and Pasta's to Samosa's and Kachori's.
      </p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;