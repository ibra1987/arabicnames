const SearchInput = ({ placeholder, style, changeHandler, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={style}
      onChange={changeHandler}
      value={value}
    />
  );
};

export default SearchInput;
