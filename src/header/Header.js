import style from './Header.module.css';
import arrow_to from '../png/arrow_to.png';
import qpick from '../png/qpick.png';
import basket from '../png/basket.png';
import burger_menu from '../png/burger.png';
import MenuMobile from '../menuMobile/MenuMobile.js';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({ title, showBack }) {
  console.log(title, showBack);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const imgRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/empty')
      imgRef.current.style.display = 'none';
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* <section> */}
      <div className={style.section_header}>
        <div className={style.top_header}>
          <div className={style.qpick} onClick={() => navigate(-1)}>
            <img
              className={style.arrow_to}
              ref={imgRef}
              src={arrow_to}
              alt="logo"
            />

            {title ? <p>{title}</p> : <img src={qpick} alt="logo" />}
          </div>
          {/* <h1 className={style.name_page}> </h1> */}
          <div className={style.basket_menu}>
            <div className={style.frame_basket}>
              <a href="/basket">
                <img src={basket} alt="basket" />
                <div className={style.orange_cirkle}>
                  <span>1</span>
                </div>
              </a>
            </div>
            <div className={style.menuWrapper} ref={menuRef}>
              {/* КНОПКА */}
              <div
                className={style.frame_menu}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <img src={burger_menu} alt="menu" />
              </div>

              {/* МЕНЮ */}
              <div className={`${style.menu_mob} ${isOpen ? style.open : ''}`}>
                <MenuMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
export default Header;
