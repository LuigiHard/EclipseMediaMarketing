import styles from "./PopularStays.module.css";

const PopularStays = () => {
  return (
    <div className={styles.popularStays}>
      <div className={styles.hotelCards}>
        <div className={styles.hotelCard1}>
          <div className={styles.hotelCard}>
            <div className={styles.stayDetails}>
              <div className={styles.stayDetailsRows}>
                <h1 className={styles.aEconomiaRegenerativa}>
                  A economia regenerativa é um movimento de todos
                </h1>
                <div className={styles.valorizarFinanceiramenteO}>
                  Valorizar financeiramente o meio ambiente, considerando sua
                  relação com as pessoas, é uma forma de prevenir uma crise
                  socioambiental e conter a degradação desses recursos.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hotelCard2}>
          <div className={styles.hotelCard3}>
            <div className={styles.invistanofuturo}>
              <p className={styles.invistanofuturo1}>#Invistanofuturo</p>
            </div>
            <b className={styles.corporateesg}>#CorporateESG</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStays;
