import { Skeleton } from "@mui/material";

//Criando HOC loader global para o componente
const TextGlobalLoader = (WrappedComponent) => {
  const HOC = ({ loading, loadingSizes = [], ...props }) => {
    const [width = "100%", height = "20px"] = loadingSizes; // Valores padrões
    return loading ? (
      <Skeleton animation="wave" width={width} height={height}></Skeleton>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  // Definindo displayName do HOC (é obrigatorio para o react devtools e esLint)
  HOC.displayName = `TextGlobalLoader(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default TextGlobalLoader;
