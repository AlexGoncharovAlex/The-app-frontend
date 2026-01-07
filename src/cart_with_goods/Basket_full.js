import style from './Basket_full.module.css';
import arrow_to from '../png/arrow_to.png';
import qpick from '../png/qpick.png';
import basket from '../png/basket.png';
import burger_menu from '../png/burger.png';
import arrowUpDown from '../png/arrowUpDown.png';
import car from '../png/car.png';
import map from '../png/map.png';
import air_pods from '../png/air_pods.png';
import del from '../png/delete.png';
import { useState, useRef, useEffect } from 'react';
import Header from '../header/Header.js';

const options = [
  'Самовывоз из магазина',
  'Курьером',
  'Новая Почта',
  'Укрпочта',
];

function Basket_full() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef(null);
  const city = 'Киев';

  useEffect(() => {
    if (!isOpen) return;

    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  return (
    <section className={style.basket_section}>
      {/* <div className={style.section_header}>
        <div className={style.top_header}>
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
        </div>
      </div> */}
      {/* <Header /> */}
      {/* ---------------------- */}
      <div className={style.cart_goods}>
        <div className={style.cart_goods_up}>
          <img src={air_pods} alt="img air_pods" />
          <div>
            <p className={style.name_goods}>Apple BYZ S852I </p>
            <p className={style.price_goods}>
              1300<span>ua</span>
            </p>
          </div>
          <button className={style.delete_button}></button>
        </div>
        <div className={style.cart_goods_down}>
          <div>
            <button className={style.minus_button}></button>
            <p>2</p>
            <button className={style.plus_button}></button>
          </div>
          <p className={style.price_total}>
            2600 <span>ua</span>
          </p>
        </div>
      </div>
      {/* ---------------------- */}
      <div className={style.cart_delivery}>
        <div>
          <p>Доставка</p>
          <p>
            555 <span>usd</span>
          </p>
        </div>
        <div
          className={style.delivery_map}
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/Новая+Почта+${city}`,
              '_blank'
            )
          }
        ></div>
        <div className={style.wrapper} ref={ref}>
          <button
            className={style.header_button_delivery}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>{selected}</span>
            <img
              src={arrowUpDown}
              alt=""
              className={`${style.arrow} ${isOpen ? style.open : ' '}`}
            />
          </button>
          {isOpen && (
            <ul className={style.dropdown}>
              {options.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelected(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* -------------------------- */}
      <footer className={style.cart_footer}>
        <div>
          <p>ИТОГ:</p>
          <p>
            88888 <span>usd</span>
          </p>
        </div>
        <button>Перейти к оформлению</button>
      </footer>
    </section>
  );
}
export default Basket_full;
