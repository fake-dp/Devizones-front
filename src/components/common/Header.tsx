import { Link } from "react-router-dom";
import { Teststyle } from "../../styles/test";

import { useRecoilState } from "recoil";
import { atomTest } from "../../recoil/atom";
const Header = () => {
  const [test, setTest] = useRecoilState(atomTest);

  return (
    <>
      <Teststyle>스타일 컴포넌트 test & 라우터 {test.test}</Teststyle>
      <Link to="/">메인페이지</Link>
      <Link to="/detail">디테일페이지</Link>
      <Link to="/mypage">마이페이지</Link>
      <Link to="/setting">셋팅</Link>
    </>
  );
};

export default Header;
