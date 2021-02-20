import MyInput from './MyInput';
import MyButton from './MyButton';

const Form = ({ titleForm }) => {
  return (
    <form>
      <h2 className="form">{titleForm}</h2>

      <MyInput name="Имя" placeholder="Введите имя" />
      <MyInput name="Email" placeholder="Введите email" />
      <MyInput name="Пароль" placeholder="Введите password" />

      <span>Возраст: </span>
      <input type="range" min="18" max="35" />
      <br />
      <MyButton btn="Отправить" />
    </form>
  );
};

export default Form;
