import styles from "./footer.module.css";
import img_lang from "../images/Lang.png";
import img_vk from "../images/img_vk .png";
import img_insta from "../images/insta.png";
import img_teleg from "../images/img_teleg.png";
import img_whatsapp from "../images/img_whatsapp.png";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.qpick}>QPICK</span>

        <div className={styles.links}>
          <div className={styles.l_block}>
            <ul>
              <li>Избранное</li>
              <li>Корзина</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className={styles.r_block}>
            {" "}
            <span> Условия сервиса</span>
            <div className={styles.langs}>
              <div>
                <img src={img_lang} alt="lang" />
              </div>

              <div className={styles.group_lang}>
                <span>Каз</span>
                <span>Рус</span>
                <span>Eng</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <img src={img_vk} alt="kink vk" />
          <img src={img_insta} alt="kink Instagram" />
          <img src={img_teleg} alt="kink Telegram" />
          <img src={img_whatsapp} alt="kink whatsapp" />
        </div>
      </div>
    </>
  );
}
export default Footer;
