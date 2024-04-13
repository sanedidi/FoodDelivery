import React from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import Header from '../components/Header/Header';

const Cart = () => {
  const { items, isEmpty, emptyCart, updateItemQuantity, removeItem } =
    useCart();

  // const postTest = () => {
  //   axios
  //     .post(
  //       `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50Txsyp
  //       NSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
  //         `<b>Details:</b>
  //     <b>The operation was completed successfully!</b>
  //     <b>our couriers will contact you soon!</b>
  //     <b> Call Center: +998 99 855 73 85 </b>
  //     <b>ISM: ${localStorage.getItem('ism')}</b>
      
  // ${items
  //   .map((item) => {
  //     return `
  // <b>${item.name}</b>
  // ${item.quantity} x ${item.price}  so'm = ${item.quantity} 
  //     `;
  //   })
  //   .join('')}        
  // <b>Total:</b> ${umumiySumma} so'm`
  //       )}&parse_mode=html`
  //     )
  //     .then(() => {
  //       emptyCart();
  //       window.location.reload();
  //     });
  // };

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
    </>
  );
};

export default Cart;
