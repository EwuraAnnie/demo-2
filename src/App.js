import styles from "./App.module.css";
import Product from "./Product";

function App() {
  return (
    <div className={styles.App}>
     <div className={styles.pos__left}>
       <h3>Simple Grocery Point of Sales System</h3>
       <Product />
     </div>
     <div className={styles.pos__right}>
      <div className={styles.head}>
        <h3>Items</h3>
        <h3>Qty</h3>
        <h3>Total</h3>
      </div>
      <hr/>
      <div className={styles.head}>
        <p>Carbonated Water - Strawberry</p>
        <p>1</p>
        <p>$59.04</p>
      </div>
      <div className={styles.head}>
        <p>Garlic - Primerba, Paste</p>
        <p>1</p>
        <p>$91.63</p>
      </div>
      <div className={styles.head}>
        <p>Chicken Breast Halal</p>
        <p>1</p>
        <p>$71.69</p>
      </div>
      <div className={styles.head}>
        <p>Lid Coffee Cup 8oz Blk</p>
        <p>1</p>
        <p>$98.92</p>
      </div>
      <hr/>
      <div className={styles.pos_total}>
          <h3>Total:</h3> {" "}
          <h3>$321.36</h3>
      </div>
      <hr/>
     </div>
    </div>
  );
}

export default App;
