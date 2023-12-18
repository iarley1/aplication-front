import { Providers } from "./contexts/userContext";
import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <MainRoutes />
      </Providers>
    </>
  );
}

export default App;
