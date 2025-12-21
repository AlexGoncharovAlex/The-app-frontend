import style from './Header.module.css';
import arrow_to from '../png/arrow_to.png';
import qpick from '../png/qpick.png';
import basket from '../png/basket.png';
import burger_menu from '../png/burger.png';

function Header() {
  return (
    <>
      <section>
        <div className={style.section_header}>
          <div className={style.top_header}>
            {/* <div className={style.arrow_to}>
              <img src={arrow_to} alt="header arrow" />
            </div> */}
            <div className={style.qpick}>
              <img src={qpick} alt="logo" />
            </div>
            <h1 className={style.name_page}> </h1>
            <div className={style.basket_menu}>
              <div className={style.frame_basket}>
                <img src={basket} alt="basket" />
                <div className={style.orange_cirkle}>
                  <span>1</span>
                </div>
                {/* <p>1</p> */}
                {/* <span>1</span> */}
              </div>
              <div className={style.frame_menu}>
                <img src={burger_menu} alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;
