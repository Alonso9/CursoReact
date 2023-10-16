import React, { useState, useEffect } from 'react';

export const useForm = (initialForm = {}) => {
  // Le pasamos como objeto el State del form para que extraiga los valores dinamicamente
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    console.log('Entro');
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    // console.log('Reset');
  };
  return {
    ...formState, // Paso para mndar el formState destrcturado y evitar volver a destructurar en el componente
    formState,
    onInputChange,
    onResetForm,
  };
};
