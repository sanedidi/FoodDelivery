import React from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Cart = () => {
  const { items, isEmpty, emptyCart, updateItemQuantity, removeItem } =
    useCart();


  let umumiySumma = 0;

  return (
    <>
      <Header />
      <div className='container'>
        {isEmpty ? (
          <img
            className='gif'
            src='https://schoolville.com/assets/img/empty-cart-illustration.gif'
            alt=''
          />
        ) : (
          <>
            <button onClick={() => emptyCart()}>emptyCart</button>
            <div className='parent'>
              {items?.map((el) => {
                const narxSoni = el?.quantity * el?.price;
                umumiySumma += narxSoni;
                return (
                  <div key={el?.id} className='cart'>
                    <img width={'200px'} src={el?.img} alt='' />
                    <h3>{el?.name}</h3>
                    <b>{narxSoni} сум</b>
                    <br />
                    <button
                      onClick={() =>
                        updateItemQuantity(el?.id, el?.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <h4>{el?.quantity}</h4>
                    <button
                      onClick={() =>
                        updateItemQuantity(el?.id, el?.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <h2 onClick={() => removeItem(el?.id)}>🧹🧺</h2>
                  </div>
                );
              })}
            </div>
            <div className='btns'>
              <h1>Umumiy Summa: {umumiySumma} so'm</h1>

              {/* <button onClick={() => postTest()}>Zakaz berish</button> */}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
