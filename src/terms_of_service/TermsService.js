import style from './TermsService.module.css';
import basket from '../png/basket.png';
import arrow_to from '../png/arrow_to.png';
import burger_menu from '../png/burger.png';

function TermsService() {
  return (
    <section className={style.section_terms_service}>
      {/* <div className={style.section_header}> */}
      <div className={style.top_header}>
        <div className={style.qpick}>
          {/* <img src={qpick} alt="logo" /> */}
          <img src={arrow_to} alt="png picture" />
          {/* <p>Корзина</p> */}
        </div>
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
      </div>
      {/* </div> */}
      {/* ----------------------------------- */}
      {/* ----------------------------------- */}
      {/* ----------------------------------- */}
      <div className={style.service_conditions}>
        <h2>Условия сервиса</h2>
        <p>
          Задача организации, в особенности же курс на социально-ориентированный
          национальный проект требует от нас системного анализа модели развития!
          Таким образом, постоянное информационно-техническое обеспечение нашей
          деятельности требует от нас анализа системы масштабного изменения ряда
          параметров! С другой стороны социально-экономическое развитие напрямую
          зависит от всесторонне сбалансированных нововведений?
        </p>
      </div>
      <div className={style.return_conditions}>
        <h2>Условия возврата</h2>
        <p>
          Задача организации, в особенности же курс на социально-ориентированный
          национальный проект требует от нас системного анализа модели развития!
          Таким образом, постоянное информационно-техническое обеспечение нашей
          деятельности требует от нас анализа системы масштабного изменения ряда
          параметров! С другой стороны социально-экономическое развитие напрямую
          зависит от всесторонне сбалансированных нововведений?
        </p>
      </div>
      <button className={style.button_to_main}>На главную</button>
    </section>
  );
}
export default TermsService;
