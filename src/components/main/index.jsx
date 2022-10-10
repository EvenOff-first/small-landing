import style from "./index.module.scss";
import { useState } from "react";
import { ButtonSecondary } from "../buttons/button-secondary";
import { ButtonPrimary } from "../buttons/button-primary";

export const Main = ({ title, text, month, year }) => {
  const [typeActive, setTypeActive] = useState(month);

  return (
    <main className={style.main}>
      <section className={`${style.section} ${style.section__textblock}`}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.block}>
          <p className={style.text}>{text}</p>
          <div className={style.buttons}>
            <button
              onClick={() => {
                setTypeActive(month);
              }}
              className={`${style.button} ${
                typeActive === month ? style.button_active : null
              }`}
            >
              {month}
            </button>
            <button
              onClick={() => {
                setTypeActive(year);
              }}
              className={`${style.button} ${
                typeActive === year ? style.button_active : null
              }`}
            >
              {year}
            </button>
          </div>
        </div>
      </section>
      <section className={`${style.section} ${style.section__cards}`}>
        <div className={`${style.card}`}>
          <div className={style.card__block}>
            <div className={style.card__cost}>
              <span className={`${style.card__cost_first} ${month === typeActive ? style.card__cost_month : null}`}>$12</span>
              <span className={`${style.card__cost_first} ${year === typeActive ? style.card__cost_year : null}`}>$19</span>
              <span className={style.card__cost_second}>/month</span>
            </div>
            <div className={style.card__title}>Starter</div>
            <div className={style.card__text}>
              Unleash the power of automation.
            </div>
            <ul className={style.card__list}>
              <li className={style.card__list__item}>Multi-step Zaps</li>
              <li className={style.card__list__item}>3 Premium Apps</li>
              <li className={style.card__list__item}>2 Users team</li>
            </ul>
          </div>
          <ButtonSecondary text={"Choose plan"} />
        </div>
        <div className={`${style.card}`}>
          <div className={style.card__block}>
            <div className={style.card__cost}>
              <span className={`${style.card__cost_first} ${month === typeActive ? style.card__cost_month : null}`}>$36</span>
              <span className={`${style.card__cost_first} ${year === typeActive ? style.card__cost_year : null}`}>$54</span>
              <span className={style.card__cost_second}>/month</span>
            </div>
            <div className={style.card__title}>Professional</div>
            <div className={style.card__text}>
            Advanced tools to take your work to the next level.
            </div>
            <ul className={style.card__list}>
              <li className={style.card__list__item}>Multi-step Zaps</li>
              <li className={style.card__list__item}>Unlimited Premium Apps</li>
              <li className={style.card__list__item}>50 Users team</li>
              <li className={style.card__list__item}>Shared Workspace</li>
            </ul>
          </div>
          <ButtonSecondary text={"Choose plan"} />
        </div>
        <div className={`${style.card} ${style.card__popular}`}>
          <div className={style.card__block}>
            <div className={style.card__popular__sticker}>MOST POPULAR</div>
            <div className={style.card__cost}>
              <span className={`${style.card__cost_first} ${month === typeActive ? style.card__cost_month : null}`}>$56</span>
              <span className={`${style.card__cost_first} ${year === typeActive ? style.card__cost_year : null}`}>$89</span>
              <span className={style.card__cost_second}>/month</span>
            </div>
            <div className={style.card__title}>Company</div>
            <div className={style.card__text}>
            Automation plus enterprise-grade features.
            </div>
            <ul className={style.card__list}>
              <li className={style.card__list__item}>Multi-step Zap</li>
              <li className={style.card__list__item}>Unlimited Premium Apps</li>
              <li className={style.card__list__item}>Unlimited Users Team</li>
              <li className={style.card__list__item}>Advanced Admin</li>
              <li className={style.card__list__item}>Custom Data Retention</li>
            </ul>
          </div>
          <ButtonPrimary text={"Choose plan"} />
        </div>
      </section>
    </main>
  );
};
