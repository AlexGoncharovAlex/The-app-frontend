import style from './Home.module.css';
import basket from '../png/basket.png';
import arrow_to from '../png/arrow_to.png';
import burger_menu from '../png/burger.png';
import iphonePro from '../png/iPhonePro.png';
import glass from '../png/glass.png';
import leather from '../png/leather.png';
import plastic from '../png/plastic.png';
import glassLarge from '../png/glassLarge.png';
import logo_lonio from '../png/logo_lonio.png';
import line from '../png/line.png';
import favorite from '../png/favorite.png';
import qpick from '../png/qpick.png';

function Home() {
  return (
    <section className={style.section_home}>
      {/* <div className={style.top_header}>
        <div className={style.qpick}>
          <img src={qpick} alt="logo" /> */}
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
      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      <div className={style.block_baner}>
        <div className={style.baner_article}>
          <h2> Аксессуары для Iphone 13 Pro Max</h2>
        </div>
        <img src={iphonePro} alt="" />
      </div>

      {/* -------------------------------------------- */}
      {/* -------------------------------------------- */}
      <div className={style.horizontal_scroll}>
        <h3>Чехлы</h3>
        <div className={style.carousel}>
          <div className={style.group}>
            <div className={style.card}>
              <a href="#">
                <img src={plastic} alt="" />
              </a>
              <h3>Пластмассовые</h3>
            </div>
            <div className={style.card}>
              <a href="#">
                <img src={glass} alt="png of phone" />
              </a>
              <h3>Стеклянные</h3>
            </div>
            <div className={style.card}>
              <a href="#">
                <img src={leather} alt="" />
              </a>
              <h3>Кожаные</h3>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------ */}
      <div className={style.scroll_wraper}>
        <div className={style.wraper_titles}>
          <h3>Чехлы</h3>
          <h3>Стеклянные</h3>
        </div>
        {/* ----------------------------------------------- */}

        <div className={style.wraper_pages}>
          <p>1</p>
          <p>из</p>
          <p>30</p>
        </div>
      </div>
      {/* ------------------------------------------------- */}
      <div className={style.wraper_pages_carousel}>
        <div className={style.wraper_pages_group}>
          <div className={style.wraper_pages_card}>
            {' '}
            <div className={style.page_card_top}>
              <img src={logo_lonio} alt="" />
              <button>{/* <img src={favorite} alt="" /> */}</button>
            </div>
            <a href="#">
              <img className={style.glassLarge} src={glassLarge} alt="" />
            </a>
            {/* ---------------------------------------------------------- */}
            {/* ---------------------------------------------------------- */}
            <div className={style.page_card_block_price_model}>
              <div className={style.page_card_model}>
                <p className={style}>Apple BYZ S852I </p>
              </div>
              <div className={style.page_card_price}>
                <p>
                  2927 <span>ua</span>
                </p>
                <div className={style.price_befor_sale}>
                  <p>
                    {' '}
                    3527<span>ua</span>
                  </p>
                  <img src={line} alt="" />
                  <p>-32%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.wraper_pages_card}>
            {' '}
            <div className={style.page_card_top}>
              <img src={logo_lonio} alt="" />
              <button>{/* <img src={favorite} alt="" /> */}</button>
            </div>
            <a href="#">
              <img className={style.glassLarge} src={glassLarge} alt="" />
            </a>
            {/* ---------------------------------------------------------- */}
            {/* ---------------------------------------------------------- */}
            <div className={style.page_card_block_price_model}>
              <div className={style.page_card_model}>
                <p className={style}>Apple BYZ S852I </p>
              </div>
              <div className={style.page_card_price}>
                <p>
                  2927 <span>ua</span>
                </p>
                <div className={style.price_befor_sale}>
                  <p>
                    {' '}
                    3527<span>ua</span>
                  </p>
                  <img src={line} alt="" />
                  <p>-32%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
