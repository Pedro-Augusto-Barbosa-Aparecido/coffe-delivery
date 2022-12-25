import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PurchasesContextProvider } from "./context/PurchasesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PurchasesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </PurchasesContextProvider>
    </ThemeProvider>
  );
}

export default App;
