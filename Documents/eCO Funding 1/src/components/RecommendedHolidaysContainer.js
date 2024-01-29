import RecCard from "./RecCard";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <h1 className={styles.entendaAEco}>Entenda a eCO</h1>
      </div>
      <div className={styles.recCardsContainer}>
        <div className={styles.popularStays}>
          <RecCard propBackgroundColor="#d4d4d4" />
          <RecCard propBackgroundColor="#fff" />
          <RecCard propBackgroundColor="#fff" />
        </div>
        <div className={styles.recCard2}>
          <div className={styles.holidayDetails}>
            <div className={styles.cardInfo}>
              <h1 className={styles.oQue}>O que é crédito de carbono?</h1>
              <div className={styles.crditoDeCarbono}>
                Crédito de carbono, também conhecido como Reduções Certificadas
                de Emissões (RCEs) é considerado um certificado que comprova
                redução das emissões de gases de efeito estufa de um projeto.
                Por convenção internacional, cada crédito de carbono que for
                gerado corresponde a uma tonelada de carbono que deixou de ser
                emitida na atmosfera.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
