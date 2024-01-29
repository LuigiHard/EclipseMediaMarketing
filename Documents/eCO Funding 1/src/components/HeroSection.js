import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <img
            className={styles.fullWhite1}
            loading="eager"
            alt=""
            src="/full-white-1@2x.png"
          />
          <div className={styles.navigationRight}>
            <nav className={styles.navigationMenu}>
              <div className={styles.investir}>INVESTIR</div>
              <div className={styles.plataforma}>PLATAFORMA</div>
              <div className={styles.captar}>CAPTAR</div>
              <div className={styles.blog}>BLOG</div>
            </nav>
            <div className={styles.accountSection}>
              <div className={styles.cadastreSe}>CADASTRE-SE</div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.searchSection}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/1-6@2x.png" />
          <div className={styles.searchContainer}>
            <h1 className={styles.invistaNoFuturo}>Invista no futuro</h1>
            <h3 className={styles.ecoIsOn}>eCo is on a journey.</h3>
            <h3 className={styles.aEco}>
              A eCO é a principal plataforma de investimentos sustentáveis do
              Brasil. Visamos conectar projetistas e investidores ESG na
              fomentação de um futuro que podemos confiar.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
