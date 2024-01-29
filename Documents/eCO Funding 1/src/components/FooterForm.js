import styles from "./FooterForm.module.css";

const FooterForm = () => {
  return (
    <section className={styles.footerForm}>
      <div className={styles.footerSection}>
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.text}>
            <h1 className={styles.formTitleSubtext}>
              Empresas e Compradores de Crédito de Carbono:
            </h1>
            <div className={styles.formTitle}>
              <p
                className={styles.maiorDiversidadeDe}
              >{`Maior diversidade de projetos Transparência, rastreabilidade e baixo custo. `}</p>
              <p
                className={styles.maiorDiversidadeDe1}
              >{`Maior diversidade de projetos Transparência, rastreabilidade e baixo custo. `}</p>
              <p className={styles.alcanarCompromissosE}>
                Alcançar compromissos e metas sociais, ambientais e governança
                ESG.
              </p>
            </div>
          </div>
          <div className={styles.text1}>
            <h1 className={styles.formTitleSubtext1}>
              Projetos Socioambientais e Vendedores:
            </h1>
            <div className={styles.formTitle1}>
              <p className={styles.mensurarEDetalhar}>
                Mensurar e detalhar os benefícios ambientais e sociais, conforme
                metodologias reconhecidas e verificação de terceira parte;
              </p>
              <p className={styles.facilitarOAcesso}>
                Facilitar o acesso ao mercado de créditos de carbono
              </p>
            </div>
          </div>
        </div>
        <div className={styles.shareYourTravelsForm1} />
      </div>
      <div className={styles.subscribeFrame}>
        <div className={styles.subscribeSection}>
          <h1 className={styles.projetos}>Projetos</h1>
          <div className={styles.projetosComCrditos}>
            Projetos com créditos de carbono Verificados Cientificamente.
          </div>
          <div className={styles.cVMAuthorization}>
            <h1 className={styles.conhea}>conheça</h1>
          </div>
        </div>
        <div className={styles.eCOfundingPlatform}>
          <div className={styles.relationshipBuilding}>
            <div className={styles.criarUmaNova}>
              Criar uma nova relação de sustentabilidade entre pessoas,
              organizações e a natureza
            </div>
            <div className={styles.nossaMissoComeou}>
              Nossa missão começou em 2020, com a primeira plataforma de
              registro de créditos de carbono brasileira, e hoje com a
              eCOfunding, lançamos a primeira plataforma de negociação de
              créditos de carbono utilizada para conectar de forma transparente,
              simples e efetiva projetos socioambientais e empresas.
            </div>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <div className={styles.ecofundingA}>
            eCOfunding é a primeira plataforma full service em gestão e
            negociação de créditos de carbono, auxiliando empresas a atingirem
            suas metas e compromissos ambientais.
          </div>
        </div>
        <div className={styles.bannerFrameGreen}>
          <img
            className={styles.emptySplitParent}
            loading="eager"
            alt=""
            src="/7@2x.png"
          />
          <img
            className={styles.emptySplitParent1}
            loading="eager"
            alt=""
            src="/8@2x.png"
          />
          <img
            className={styles.emptySplitParent2}
            loading="eager"
            alt=""
            src="/9@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
