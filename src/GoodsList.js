import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from './store/goodsSlice';
import Selected from './selected/Selected';

function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  return (
    <div>
      {goods.map((item) => (
        <Selected
          articul={item.articul}
          img_logo={item.img_logo}
          heart={item.heart}
          img_goods={item.img_air_pods_big}
          title={item.title}
          cost={item.cost}
          currency={item.currency}
          discount={item.discount}
          afterDiscount={item.afterDiscount}
        />
      ))}
    </div>
  );
}
export default GoodsList;
