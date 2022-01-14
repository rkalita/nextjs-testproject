import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import Form from '../components/Form';

const Index = () => {
  return (
    <>
      <MainContainer keywords={'main page'}>
        <div className="head">
          <h1>Главная страница</h1>
        </div>
        <div className="reg-form">
          <Form />
        </div>
      </MainContainer>
      <style jsx>
        {`
          .reg-form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default Index;
