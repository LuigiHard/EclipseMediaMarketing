import { useMemo } from "react";
import styles from "./RecCard.module.css";

const RecCard = ({ propBackgroundColor }) => {
  const holidayDetailsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.recCard1}>
      <h1 className={styles.footerSection}>-</h1>
      <div className={styles.holidayDetails} style={holidayDetailsStyle}>
        <div className={styles.textFormTitle}>
          <h1 className={styles.neutralizarEmissoesDe}>
            Neutralizar Emissoes de C02
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
