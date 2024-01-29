import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.popDestinationsMain}>
          <div className={styles.image}>
            <div className={styles.paragraph}>
              <div className={styles.paragraphChild} />
              <h1 className={styles.comoFunciona}>COMO FUNCIONA?</h1>
              <div className={styles.form}>
                <div className={styles.modeloFullService}>
                  Modelo full service na gestão de créditos de carbono. Desde a
                  geração de créditos de carbono, até a redução de gastos na
                  compra de créditos de carbono, gestão de emissões e uso de
                  ferramentas integradas de cálculo das emissões de CO2
                </div>
              </div>
              <div className={styles.cardsContainer}>
                <div className={styles.col1}>
                  <div className={styles.card}>
                    <img
                      className={styles.textIcon}
                      loading="eager"
                      alt=""
                      src="/1-7@2x.png"
                    />
                    <b className={styles.neutralizarEmissesDe}>
                      Neutralizar Emissões de CO2
                    </b>
                    <div className={styles.negociarComprarE}>
                      Negociar, comprar e registrar créditos de carbono. Maior
                      diversidade e rastreabilidade de projetos certificados.
                    </div>
                  </div>
                </div>
                <div className={styles.col2}>
                  <div className={styles.card1}>
                    <img
                      className={styles.icon}
                      loading="eager"
                      alt=""
                      src="/2-2@2x.png"
                    />
                    <b className={styles.cadastrarProjetoAmbiental}>
                      Cadastrar Projeto Ambiental
                    </b>
                    <div className={styles.projetosQueReduzam}>
                      Projetos que reduzam as emissões de CO2 e impactos
                      ambientais e sociais podem participar
                    </div>
                  </div>
                </div>
                <div className={styles.col3}>
                  <div className={styles.card2}>
                    <img
                      className={styles.icon1}
                      loading="eager"
                      alt=""
                      src="/3-1@2x.png"
                    />
                    <b className={styles.gestoDeEmisses}>
                      Gestão de Emissões de CO2 e Créditos
                    </b>
                    <div className={styles.ferramentaDeClculo}>
                      Ferramenta de cálculo e gestão de emissões. Estoque e
                      registro de neutralizações de carbono.
                    </div>
                  </div>
                </div>
                <div className={styles.col4}>
                  <div className={styles.card3}>
                    <img
                      className={styles.icon2}
                      loading="eager"
                      alt=""
                      src="/4-1@2x.png"
                    />
                    <b className={styles.calculadorasEFerramentas}>
                      Calculadoras e Ferramentas de Integração
                    </b>
                    <div className={styles.apisECalculadoras}>
                      APIs e calculadoras online para otimizar compensações e
                      engajar stakeholders
                    </div>
                  </div>
                </div>
                <div className={styles.col5}>
                  <div className={styles.card4}>
                    <img
                      className={styles.icon3}
                      loading="eager"
                      alt=""
                      src="/5-1@2x.png"
                    />
                    <b className={styles.apoiarASua}>
                      Apoiar a sua Cadeia de Fornecedores
                    </b>
                    <div className={styles.vamosDesenvolverJuntos}>
                      Vamos desenvolver juntos, projetos de redução e/ou captura
                      de carbono na sua Cadeia de Fornecedores ou outros
                      setores.
                    </div>
                  </div>
                </div>
                <div className={styles.col6}>
                  <div className={styles.card5}>
                    <img
                      className={styles.icon4}
                      loading="eager"
                      alt=""
                      src="/6-1@2x.png"
                    />
                    <b className={styles.seloDeNeutralizao}>
                      Selo de Neutralização de Carbono
                    </b>
                    <div className={styles.certificarAAo}>
                      Certificar a ação de neutralização de carbono e obter o
                      Selo e Certificado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
