const Button = ({ text, clickHandler, styles, type }) => {
  return (
    <button
      onClick={clickHandler}
      className={styles}
      type={type ? type : "submit"}
    >
      {text}
    </button>
  );
};

export default Button;
