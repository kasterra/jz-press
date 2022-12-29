import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ResultScreen from "./pages/ResultScreen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResultScreen />
    </ThemeProvider>
  );
}

export default App;
