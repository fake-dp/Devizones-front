import { LoginButtonWrapper } from "../../../styles/headerStyled/HeaderStyled";

type LoginButtonProps = {
  openModal: () => void;
};

const LoginButton = ({ openModal }: LoginButtonProps) => {
  return (
    <LoginButtonWrapper>
      <button onClick={openModal}>로그인</button>
    </LoginButtonWrapper>
  );
};

export default LoginButton;
