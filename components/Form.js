import { useForm } from '../hooks/useForm';
import validate from '../utils/FormValidationRules';
import Field from './Field';

export default function Form() {
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  return (
    <>
      <form>
        <Field
          label="Name"
          errors={errors}
          value={values.name || ''}
          type="text"
          name="name"
          onChange={handleChange}
        />
        <Field
          label="Email Address"
          errors={errors}
          value={values.email || ''}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Field
          label="Password"
          errors={errors}
          value={values.password || ''}
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      <style jsx>
        {`
          form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 300px;
            padding: 10px;
            border: solid 2px teal;
          }
          button {
            margin-top: 15px;
            padding: 5px;
            outline: none;
            border: solid 1px black;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
