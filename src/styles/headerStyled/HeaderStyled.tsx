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

// 깃허브 버튼
export const GithubBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24292e;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2f363d;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #fff;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// 카카오 버튼
export const KakaoBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ffeb3b;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #000000;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #000000;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// 구글 버튼
export const GoogleBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dd4b39;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c53727;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #fff;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// auth모달 css
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContents = styled.div`
  width: 370px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h5 {
    color: #999;
    margin: 10px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const ModalCloseBtn = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-top: 10px;
  &:hover {
    background-color: #999;
    color: white;
  }
`;
