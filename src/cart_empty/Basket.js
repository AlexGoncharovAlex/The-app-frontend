import style from './Basket.module.css';
import qpick from '../png/qpick.png';
import basket from '../png/basket.png';
import burger from '../png/burger.png';
import bigBasket from '../png/bigBasket.png';
import MenuMobile from '../menuMobile/MenuMobile.js';
import { useRef, useState, useEffect } from 'react';
// import Header from '../header/Header.js';
function Basket() {
  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    // <section>
    <div className={style.section}>
      {/* <div className={style.top_white}> */}
      {/* <div className={style.menuWrapper} ref={menuRef}>
          <div className={style.block_top_nav}>
            <img src={qpick} alt=" png picture" />
            <img src={basket} alt="png picture" />
            <img
              onClick={() => setIsOpen((prev) => !prev)}
              src={burger}
              alt="png picture"
            />
          </div>
          <div className={`${style.menu_mob} ${isOpen ? style.open : ''}`}>
            <MenuMobile />
          </div>
        </div> */}
      {/* <Header /> */}
      {/* </div> */}
      <div className={style.middle_frame}>
        <img src={bigBasket} alt="png picture" />
        <h2>Корзина пуста</h2>
        <p>Но это никогда не поздно исправить :)</p>
        <button>В каталог товаров</button>
      </div>
    </div>
    // </section>
  );
}
export default Basket;
