import style from './Contact.module.css';
import basket from '../png/basket.png';
import arrow_to from '../png/arrow_to.png';
import burger_menu from '../png/burger.png';

function Contact() {
  return (
    <section className={style.contact_section}>
      {/* <div className={style.top_header}>
        <div className={style.qpick}> */}
      {/* <img src={qpick} alt="logo" /> */}
      {/* <img src={arrow_to} alt="png picture" /> */}
      {/* <p>Корзина</p> */}
      {/* </div>
        <h1 className={style.name_page}> </h1>
        <div className={style.basket_menu}>
          <div className={style.frame_basket}>
            <img src={basket} alt="basket" />
            <div className={style.orange_cirkle}>
              <span>1</span>
            </div>
          </div>

          <div className={style.frame_menu}>
            <img src={burger_menu} alt="menu" />
          </div>
        </div>
      </div> */}
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <div className={style.block_address}>
        <h2>Наш офис</h2>
        <div className={style.address_on_cart}></div>
        <div className={style.accommodation}>
          <p>Аксай-3а, 62ф, Алматы, Казахстан</p>
          <p>3 этаж 35 кабинет </p>
        </div>
      </div>
      <div className={style.social_contact}>
        <div>
          <a href=""></a>
        </div>
        <div>
          <a href=""></a>
        </div>
        <div>
          <a href=""></a>
        </div>
        <div>
          <a href=""></a>
        </div>
      </div>
      <p className={style.telefon_to_call}> +7 777 777 77 77 </p>
      <button className={style.button_to_main}>На главную</button>
    </section>
  );
}
export default Contact;
