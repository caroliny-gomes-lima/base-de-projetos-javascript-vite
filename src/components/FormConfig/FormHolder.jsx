/*Esse HOC funciona como um "contêiner" para o formulário, 
Ele encapsula o formulário dentro de um form tag do HTML. 
O formulario são os componentes filhos, no caso, os inputs*/

//import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function WithFormHolder(WrappedComponent) {
  return function HOC({ onSubmit, ...props }) {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{ width: "100%" }}
        >
          <WrappedComponent {...props} {...methods} />
        </form>
      </FormProvider>
    );
  };
}

export default WithFormHolder;
