import React from 'react';
import { useParams } from 'react-router-dom'; // Импорт хука для получения параметров из URL
import Header from '../components/Header/Header'; // Импорт компонента Header
import { useCart } from 'react-use-cart'; // Импорт хука для работы с корзиной
import useProductsProps from '../components/Products/useProductsProps';

const Basket = () => {
  const { getItem, removeItem, addItem } = useCart(); // Использование хука для работы с корзиной
  const {products} = useProductsProps()
  const { id } = useParams(); // Получение параметра ID из URL
  // Поиск продукта по ID
  const findBasket = products?.find((el) => {
    return el?.id == id;
  });
  return (
    <>
      <Header /> {/* Вывод компонента Header */}
      <div className='basket_wrapper'>
        {/* Отображение изображения, названия продукта и кнопки покупки/отмены */}
        <img src={findBasket?.img} alt='' />
        <h1>{findBasket?.name}</h1>
        {/* Условный рендеринг кнопки в зависимости от наличия продукта в корзине */}
        {!getItem(findBasket?.id) ? (
          <button onClick={() => addItem(findBasket)}>BUY</button>
        ) : (
          <button
            className='cancelBtn'
            onClick={() => removeItem(findBasket?.id)}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  );
};

export default Basket;
