import { IconButton, InputAdornment } from "@mui/material";

function IconEndAdornmentComponent({ formHandler, icon }) {
  return (
    <InputAdornment position="end">
      <IconButton
        {...(icon.buttonProps ? icon.buttonProps : {})} // HINT 1
        onClick={icon.submit ? formHandler : icon.buttonProps?.onClick} //HINT 2
      >
        <icon.Component />
      </IconButton>
    </InputAdornment>
  );
}

export default IconEndAdornmentComponent;

/* 1 - {...(icon.buttonProps ? icon.buttonProps : {})}: PASSA PROPS DO OBJETO DENTRO DO <IconButton/>.
O spread operator (...) espalha as propriedades do objeto icon.buttonProps dentro do <IconButton/>. Isso
permite personalizar as propriedades do <IconButton/>. Se o icon.buttonProps nao existir, ele retorna um objeto vazio.*/

/* 2 - onClick={icon.submit ? formHandler : icon.buttonProps?.onClick}: DEFININDO O COMPORTAMENTO DO CLIQUE.
Se icon.submit for true → O botão chamará formHandler?.submit(). */
