import styled from "styled-components";

// 헤더 레이아웃
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderRigth = styled.div`
  display: flex;
  align-items: center;
`;

// 헤더 로그인 버튼
export const LoginButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    height: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #f8f9fa;
    border: 1px solid #192a56;
    color: #192a56;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    &:hover {
      background: #192a56;
      color: #f8f9fa;
    }
  }
`;

// 헤더 서치 아이콘 css
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  > svg {
    font-size: 1.3rem;
    color: #192a56;
    padding: 0.5rem;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    &:hover {
      border-radius: 50%;
      background-color: #192a56;
      color: #f8f9fa;
    }
  }
`;
