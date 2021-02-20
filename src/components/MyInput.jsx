const MyInput = ({ name, placeholder }) => {
  return (
    <div>
      <span>{name}: </span>

      <input placeholder={placeholder}></input>
    </div>
  );
};

export default MyInput;
