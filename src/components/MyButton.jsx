const MyButton = ({ btn }) => {
  const handleClick = () => {
    alert(`You just clicked me: ${btn}`);
  };

  return (
    <button type="submit" onClick={handleClick} className="button">
      {btn}
    </button>
  );
};

export default MyButton;
