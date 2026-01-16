import style from './Selected.module.css';

import black_heart from '../png/black_heart.png';
import heart_white from '../png/heart_white.png';
import { key_for_png } from '../data/Key_for_png';
import { useState } from 'react';

function Selected(props) {
  const [heartChange, setHeartChange] = useState(false);
  console.log(heartChange);

  console.log(props);
  return (
    <section className={style.section_select}>
      <div className={style.select_goods_card}>
        <div>
          <img src={key_for_png[props.img_logo]} alt="" />
          <div
            className={style.divHeart}
            onClick={() => setHeartChange((prev) => !prev)}
          >
            {heartChange ? (
              <img src={black_heart} alt="" />
            ) : (
              <img src={heart_white} alt="" />
            )}
          </div>
        </div>
        <img
          className={style.select_goods_png}
          src={key_for_png[props.img_goods]}
          alt=""
        />
        {/* ---------------------------------- */}
        {/* ---------------------------------- */}
        {/* ---------------------------------- */}
        <div className={style.select_goods_info}>
          <div className={style.select_goods_about}>
            <span>{props.title}</span>
          </div>
          <p>
            {props.afterDiscount}
            <span>ua</span>
          </p>
          <div className={style.select_price_and_discount}>
            <p>
              {props.cost}
              <span>{props.currency}</span>
            </p>
            <p>
              {props.discount}
              <span>%</span>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
export default Selected;
