import React from "react";
import { Link } from "react-router-dom";
import useProductsProps from "./useProductsProps";
import s from "./Products.module.scss";
import burgerSvg from "../../assets/svg/burger.svg";
import burgerSvg2 from "../../assets/svg/burger2.svg";
import burgerSvg3 from "../../assets/svg/burger3.svg";

const Products = () => {
  const { products } = useProductsProps();
  const news = products?.filter((el) => el?.category === "Новинки");
  const lavash = products?.filter((el) => el?.category === "Лаваш");
  const trindwich = products?.filter((el) => el?.category === "Триндвич");

  return (
    <section className={s.products}>
      <div className="container">
        <div className={s.products__wrapper}>
          <div className={s.products__type}>
            <img src={burgerSvg} alt="" />
            <h2>Makcи BOX</h2>
          </div>
          <div className={s.products__cards}>
            {news?.map((el) => (
              <Link
                to={`/basket/${el?.id}`}
                className={s.products__card}
                key={el?.id}
              >
                <div className={s.products__card_top}>
                  <img src={el?.img} alt="" />
                </div>
                <div className={s.products__btm}>
                  <div className={s.products__card_info}>
                    <h2>{el?.name}</h2>
                    <p>{el?.desc}</p>
                  </div>
                  <div className={s.products__card_act}>
                    <b>
                      {el?.price} <span>сум </span>
                    </b>
                    <button>Добавить</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={s.products__type}>
            <img src={burgerSvg2} alt="" />
            <h2>Бургеры</h2>
          </div>
          <div className={s.products__cards}>
            {lavash?.map((el) => (
              <Link
                to={`/basket/${el?.id}`}
                className={s.products__card}
                key={el?.id}
              >
                <div className={s.products__card_top}>
                  <img src={el?.img} alt="" />
                </div>
                <div className={s.products__btm}>
                  <div className={s.products__card_info}>
                    <h2>{el?.name}</h2>
                    <p>{el?.desc}</p>
                  </div>
                  <div className={s.products__card_act}>
                    <b>
                      {el?.price} <span>сум </span>
                    </b>
                    <button>Добавить</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={s.products__type}>
            <img src={burgerSvg3} alt="" />
            <h2>Хот-Дог</h2>
          </div>
          <div className={s.products__cards}>
            {trindwich?.map((el) => (
              <Link
                to={`/basket/${el?.id}`}
                className={s.products__card}
                key={el?.id}
              >
                <div className={s.products__card_top}>
                  <img src={el?.img} alt="" />
                </div>
                <div className={s.products__btm}>
                  <div className={s.products__card_info}>
                    <h2>{el?.name}</h2>
                    <p>{el?.desc}</p>
                  </div>
                  <div className={s.products__card_act}>
                    <b>
                      {el?.price} <span>сум </span>
                    </b>
                    <button>Добавить</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
