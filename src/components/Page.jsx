import MyButton from './MyButton';
import Form from './Form';

const Page = ({ title, date }) => {
  return (
    <>
      <h1>Hello, {title}!</h1>
      <p>Today {date}</p>

      <MyButton btn="Button 1" />
      <MyButton btn="Button 2" />
      <MyButton btn="Button 3" />

      <Form titleForm="Форма" />
    </>
  );
};

export default Page;
