//import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function WithFormHolder(WrappedComponent, formOptions = {}) {
  return function HOC({ onSubmit, ...props }) {
    const methods = useForm(formOptions);
    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <WrappedComponent {...props} {...methods} />
        </form>
      </FormProvider>
    );
  };
}

export default WithFormHolder;
