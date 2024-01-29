import { Button } from "@mui/material";
import styles from "./Button.module.css";

const ButtonComponent = () => {
  return (
    <div className={styles.button}>
      <div className={styles.recentSearches}>
        <div className={styles.flightMainContainer}>
          <h3 className={styles.descubraManeirasDe}>
            Descubra maneiras de cumprir suas metas ESG e contribuir para a
            realização de iniciativas socioambientais certificadas.
          </h3>
        </div>
        <textarea
          className={styles.flightMainContainer1}
          placeholder="Regulada pela CVM - Comissão de Valores Mobiliários."
          rows={11}
          cols={31}
        />
      </div>
      <div className={styles.prepareMenu}>
        <div className={styles.tripMenus}>
          <div className={styles.hotel}>
            <img className={styles.icon} alt="" src="/2-1@2x.png" />
          </div>
          <div className={styles.flightMainContainer2}>
            <h3 className={styles.comeceCompensandoAContainer}>
              <p className={styles.comeceCompensandoA}>
                Comece compensando a pegada de carbono das suas atividades
                administrativas.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </h3>
            <ButtonComponent
              className={styles.image}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#000",
                borderRadius: "50px",
                "&:hover": { background: "#000" },
                width: 524,
                height: 79,
              }}
            >
              Compensar pegada de carbono
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
