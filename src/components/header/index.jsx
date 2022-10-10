import { Navigation } from "../navigation";
import { ButtonPrimary } from "../buttons/button-primary";
import style from "./index.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <img src="/logo.svg" alt="logo" className={style.image} />
      <div className={style.button}>
        <ButtonPrimary text={"Join Now"} />
      </div>
    </header>
  );
};
