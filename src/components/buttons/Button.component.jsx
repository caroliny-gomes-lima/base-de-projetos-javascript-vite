import React from "react";
import Styles from "./styles/button.styles"; //INICIALIZAÇÃO DO COMPONENTE
import { useHandleClick, useButtonState } from "../FormConfig/useFormButton";
import { useFormContext } from "react-hook-form";

function ButtonComponent({
  label = "",
  loading,
  disabled,
  type,
  onClick,
  disabledUntil = [],
  ...props
}) {
  const { watch } = useFormContext();
  const watchRequiredFields = disabledUntil.some((name) => !watch(name)); //HINT1
  //----------------ATUALIZAÇÃO E DESMONTAGEM DO COMPONENTE-------------
  // HINT 2
  const { loading: loadingButton, disabled: disabledButton } = useButtonState(
    Boolean(loading),
    Boolean(disabled),
    watchRequiredFields
  );

  // Tratamento do clique do botão
  const handleClick = useHandleClick(type, onClick);

  //------------------MONTAGEM DO COMPONENTE------------------------
  return (
    <Styles.StyledButton
      variant="contained"
      $loadingButton={loadingButton}
      type={type}
      onClick={handleClick}
      {...props}
      $disabled={disabledButton || loadingButton || watchRequiredFields}
      disabled={disabledButton || loadingButton || watchRequiredFields}
    >
      {loadingButton ? <Styles.StyledLoading size={25} /> : label}
    </Styles.StyledButton>
  );
}

export default React.memo(ButtonComponent);

/*------------------HINTS---------------------
  1. Verifica se algum campo obrigatório não está preenchido.
  O método some() retorna true se pelo menos um input obrigatório do array 
  não estiver preenchido e o watch() verifica se o input está preenchido.

  2. O estado do componente é atualizado com base nas 
  props "loading", "disabled" e campos obrigatórios e o estado do 
  componente é limpo após a desmontagem do componente.
*/
