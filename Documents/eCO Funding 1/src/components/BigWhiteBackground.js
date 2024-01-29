import { Button } from "@mui/material";
import styles from "./BigWhiteBackground.module.css";

const BigWhiteBackground = () => {
  return (
    <section className={styles.bigWhiteBackground}>
      <div className={styles.parentSubscriptionArea}>
        <div className={styles.joinOurCommunityMessage}>
          <div className={styles.subscribeSection}>
            <div className={styles.userEmailInputWrapper}>
              <div className={styles.userEmailInput}>
                <h1 className={styles.team}>Team</h1>
                <div className={styles.meetUsNow}>
                  <div className={styles.conheaNossaEquipe}>
                    Conheça nossa equipe.
                  </div>
                  <div className={styles.subscribeButton}>
                    <h1 className={styles.conhea}>conheça</h1>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.footerSectionIcon}
              loading="eager"
              alt=""
              src="/5-2@2x.png"
            />
          </div>
          <footer className={styles.subscribeSection1}>
            <div className={styles.team1}>
              <img
                className={styles.fullWhite2}
                loading="eager"
                alt=""
                src="/full-white-2@2x.png"
              />
              <b className={styles.inscrevaSeNaNossa}>
                Inscreva-se na nossa newsletter e acompanhe o nosso trabalho.
              </b>
              <div className={styles.inputoutlined}>
                <div className={styles.borderLeft} />
                <div className={styles.borderRight}>
                  <div className={styles.input}>
                    <div className={styles.email}>Email</div>
                    <Button
                      className={styles.buttoncontainedTextAndIco}
                      endIcon={
                        <img width="20px" height="20px" src="/icon.svg" />
                      }
                      variant="contained"
                      sx={{
                        color: "#000",
                        fontSize: "14",
                        background: "#fff",
                        borderRadius: "4px",
                        "&:hover": { background: "#fff" },
                        width: 128,
                        height: 58,
                      }}
                    >
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles.checkboxdefaultCheckboxAnd}>
                <div className={styles.defaultCheckboxAndLabel}>
                  <input className={styles.checkbox} type="checkbox" />
                </div>
                <div className={styles.label}>
                  Li e concordo com os termos de uso e política de privacidade.
                </div>
              </div>
            </div>
            <div className={styles.ficouComDvidaFalecommossParent}>
              <div className={styles.ficouComDvida}>
                FIcou com dúvida? falecom@moss.earth
              </div>
              <div className={styles.faaParteDa}>
                Faça parte da nossa comunidade nas redes sociais:
              </div>
              <div className={styles.footersubscribesec}>
                <img
                  className={styles.subscribeplatfauthIcon}
                  alt=""
                  src="/subscribeplatfauth@2x.png"
                />
                <img
                  className={styles.subscribeplatfauthIcon1}
                  alt=""
                  src="/subscribeplatfauth@2x.png"
                />
                <img
                  className={styles.subscribeplatfauthIcon2}
                  alt=""
                  src="/subscribeplatfauth@2x.png"
                />
              </div>
              <div className={styles.button}>
                <img className={styles.icon} alt="" src="/icon-1.svg" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default BigWhiteBackground;
