import Router from "./shared/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "sweetalert2/dist/sweetalert2.min.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
