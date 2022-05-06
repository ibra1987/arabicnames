const Button = ({ text, clickHandler, styles }) => {
  return (
    <button onClick={clickHandler} className={styles}>
      {text}
    </button>
  );
};

export default Button;
