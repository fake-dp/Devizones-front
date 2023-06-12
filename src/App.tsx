import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import GlobalStyle from "./styles/globalStyeld/globalStyled";
import { useRecoilState } from 'recoil';
import { themeState } from "./recoil/themeState";
import { lightTheme, darkTheme } from "./styles/globalStyeld/theme";

const App = () => {

  const [ theme ] = useRecoilState(themeState)
  const appliedTheme = theme === 'light'? lightTheme: darkTheme;
  
  return (
    <ThemeProvider theme ={appliedTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
