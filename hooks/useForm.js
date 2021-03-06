import { useState, useEffect } from 'react';

export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  console.log(errors);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
