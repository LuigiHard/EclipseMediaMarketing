import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import FrameComponent from "../components/FrameComponent";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import FooterForm from "../components/FooterForm";
import BigWhiteBackground from "../components/BigWhiteBackground";
import styles from "./Homepage.module.css";


const Homepage = () => {
  return (
    
    <div className={styles.homepage}>
      <HeroSection />
      <section className={styles.homeContents}>
        <Button />
        <FrameComponent />
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <FooterForm />
      <section className={styles.cVMApprovedPlatform}>
        <div className={styles.parentSubscriptionArea}>
          <img
            className={styles.cVMApproved}
            loading="eager"
            alt=""
            src="/10-1@2x.png"
          />
          <div className={styles.innerSubscribeFrame}>
            <b className={styles.plataformaAutorizadaPela}>
              Plataforma autorizada pela CVM conforme o Ato Declaratório CVM nº
              19.142, de 5/10/2021Plataforma autorizada pela CVM conforme o Ato
              Declaratório CVM nº 19.142, de 5/10/2021.
            </b>
            <div className={styles.asSociedadesEmpresrias}>
              As sociedades empresárias de pequeno porte e as ofertas
              apresentadas nesta plataforma estão automaticamente dispensadas de
              registro pela Comissão de Valores Mobiliários - CVM. A CVM não
              analisa previamente as ofertas. As ofertas realizadas não implicam
              por parte da CVM a garantia da veracidade das informações
              prestadas, de adequação à legislação vigente ou julgamento sobre a
              qualidade da sociedade empresária de pequeno porte. Antes de
              aceitar uma oferta leia com atenção as informações essenciais da
              oferta, em especial a seção de alertas sobre riscos.
            </div>
          </div>
        </div>
      </section>
      <BigWhiteBackground />
    </div>
    
  );
};

export default Homepage;
