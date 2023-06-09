import { ThemeIconWrapper } from "../../../styles/headerStyled/HeaderStyled";
import { useRecoilState } from 'recoil';
import { themeState } from "../../../recoil/themeState";
const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeIconWrapper onClick={toggleTheme}>
      '테마 스위칭'
    </ThemeIconWrapper>
  )
};

export default ToggleTheme