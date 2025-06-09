/*Esse script se trata de um hook personaliazado para 
criação do ciclo de vida do botão do formulario*/
import React from "react";
import { useFormContext } from "react-hook-form";

function useHandleClick(type, onClick) {
  const { reset } = useFormContext();
  return React.useCallback(
    (event) => {
      console.log(event);
      if (type === "clear") {
        reset();
      } else if (onClick) {
        onClick(event);
      }
    },
    [type, reset, onClick]
  );
}

function useButtonState(isLoading, isDisabled, InputsRequired) {
  const isMounted = React.useRef(true);
  const [componentState, setComponentState] = React.useState({
    loading: isLoading,
    disabled: isDisabled,
  });

  /*
  -------------------ATUALIZAÇÃO DO ESTADO-------------------------
  "loading" E "disabled" DO COMPONENTE (APÓS MONTAGEM E DESMONTAGEM)
*/
  // HINT 1
  React.useEffect(() => {
    isMounted.current = true;
    setComponentState((prevState) => {
      // HINT 2
      let newState = { ...prevState };
      if (isMounted.current) {
        switch (true) {
          case isLoading:
            newState.loading = true;
            break;
          case isDisabled:
            newState.disabled = true;
            break;
          case InputsRequired:
            newState.disabled = true;
            break;
          default:
            newState = {
              loading: false,
              disabled: false,
            };
            break;
        }
        return newState;
      }
      //-------APÓS DESMONTAGEM DO COMPONENTE LIMPA O ESTADO-----------
      return () => {
        isMounted.current = false; // HINT 3
        return newState;
      };
    });
  }, [isLoading, isDisabled, InputsRequired]);

  return componentState;
}

export { useHandleClick, useButtonState };

/*------------------HINTS---------------------
  1. Esse hook é utilizado para atualizar o estado do botão de acordo com 
  as  props "loading", "disabled" e campos obrigatórios.

  2. Atualiza com a verificação do switch case o estado do botão quando as props isLoading, 
  isDisabled ou InputsRequired mudarem.

  3. isMounted.current serve para verificar se o componente foi montado ou desmontado.

 
*/
