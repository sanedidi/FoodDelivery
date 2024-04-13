import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/Products/useProductsProps';
import Header from '../components/Header/Header';
import { useCart } from 'react-use-cart';

const Basket = () => {
  const { getItem, removeItem, addItem } = useCart();
  const { id } = useParams();
  const findBasket = products?.find((el) => {
    return el?.id == id;
  });
  return (
    <>
      <Header />
      <div className='basket_wrapper'>
        <img src={findBasket?.img} alt='' />
        <h1>{findBasket?.name}</h1>
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
