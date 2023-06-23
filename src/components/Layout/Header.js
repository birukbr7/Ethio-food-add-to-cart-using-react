import { Fragment } from "react";
import classes from "./Header.module.css";

import mealsImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ethio Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
