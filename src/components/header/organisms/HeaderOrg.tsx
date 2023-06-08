import LoginButton from "../atoms/LoginButton";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import { Link } from "react-router-dom";
import * as S from "../../../styles/headerStyled/HeaderStyled";

const HeaderOrg = () => {
  return (
    <S.HeaderContainer>
      <Link to="/">
        {" "}
        <Logo />
      </Link>

      <S.HeaderRigth>
        <Link to="/search">
          {" "}
          <SearchBar />
        </Link>
        <LoginButton />
      </S.HeaderRigth>
    </S.HeaderContainer>
  );
};

export default HeaderOrg;
