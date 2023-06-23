import clasess from "./Card.module.css";

const Card = (props) => {
  return <div className={clasess.card}>{props.children}</div>;
};

export default Card;
