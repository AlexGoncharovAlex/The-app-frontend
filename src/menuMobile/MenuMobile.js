import style from './MenuMobile.module.css';
import phone from '../png/selectPhone.png';
import arrowUpDown from '../png/arrowUpDown.png';
import lang from '../png/lang.png';
import conditions from '../png/conditions.png';
import heart from '../png/heart.png';
import call from '../png/call.png';

function MenuMobile() {
  return (
    <section>
      <div className={style.wrapper}>
        <nav>
          <ul className={style.menu}>
            <li className={style.menu_item}>
              <h2>Выбрать бренд телефона</h2>
              <ul className={style.submenu}>
                <li className={style.submenu_item}>
                  {' '}
                  <h2>Apple</h2>
                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">iPhone 12</a>
                    </li>
                    <li>
                      <a href="@">iPhone 12 Max</a>
                    </li>
                  </ul>
                </li>

                <li className={style.submenu_item}>
                  <h2>INOI</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Nokia</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Oppo</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Realme</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Samsung</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Sony</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Vivo</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
                <li className={style.submenu_item}>
                  <h2>Xiaomi</h2>

                  <ul className={style.submenu_2}>
                    <li>
                      <a href="#">Phone 1</a>
                    </li>
                    <li>
                      <a href="#">Phone 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={style.menu_nav_servis1}>
          <a href="/selected">Избранное</a>
        </div>
        <div className={style.menu_nav_servis2}>
          <a href="/terms_of_service">Условия сервиса</a>
        </div>
        <div className={style.menu_nav_servis3}>
          <a href="/contact">Контакты</a>
        </div>
        <div className={style.footer_lang}>
          <ul className={style.footer_lang_list}>
            <li className={style.active}> EN</li>
            <li className={style.active}>UA</li>
            <li className={style.active}>RU</li>
          </ul>
        </div>
      </div>
    </section>
  );
  {
  }
}
export default MenuMobile;
