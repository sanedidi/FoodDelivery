import React from 'react';
import { Link } from 'react-router-dom';
import useProductsProps from './useProductsProps';

const Products = () => {
  const {products} = useProductsProps()
  const news = products?.filter((el) => el?.category === 'Новинки');
  const lavash = products?.filter((el) => el?.category === 'Лаваш');
  const trindwich = products?.filter((el) => el?.category === 'Триндвич');

  return (
    <section>
      <div className='container'>
        <br />
        <br />
        <h1>Новинки</h1>
        <div className='wrapper'>
          {news?.map((el) => {
            return (
              <Link to={`/basket/${el?.id}`} className='card' key={el?.id}>
                <img src={el?.img} alt='' />
                <h2>{el?.name}</h2>
                <p>{el?.desc}</p>
                <b>{el?.price} сум</b>
                <button>В Корзину</button>
              </Link>
            );
          })}
        </div>
        <h1>Лаваш</h1>
        <div className='wrapper'>
          {lavash?.map((el) => {
            return (
              <Link to={`/basket/${el?.id}`} className='card' key={el?.id}>
                <img src={el?.img} alt='' />
                <h2>{el?.name}</h2>
                <p>{el?.desc}</p>
                <b>{el?.price} сум</b>
                <button>В Корзину</button>
              </Link>
            );
          })}
        </div>
        <h1>Триндвич</h1>
        <div className='wrapper'>
          {trindwich?.map((el) => {
            return (
              <Link to={`/basket/${el?.id}`} className='card' key={el?.id}>
                <img src={el?.img} alt='' />
                <h2>{el?.name}</h2>
                <p>{el?.desc}</p>
                <b>{el?.price} сум</b>
                <button>В Корзину</button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
