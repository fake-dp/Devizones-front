import styled from "styled-components";

//Show btn 
export const ShowBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 1.5rem;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;
  span {
    color: #fff;
    font-size: 1rem;
  }
  svg {
    fill: #fff;
  }
`;

//banner left
export const BannerLeftContanier = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 20px;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    span {
      font-size: 3rem;
    }
    :after {
      content: '';
      display: block;
      width: 20%;
      height: 6px;
      background: #fff;
      margin: 30px 0 0;
    }
  }
`;

//banner right 
export const BannerRightContainer = styled.div`
  flex: 1;
  p {
    color: #fff;
    font-weight: bold;
    margin: 150px 0 0 25%;
    :after {
      content: '';
      display: block;
      width: 10%;
      height: 6px;
      background: #fff;
      margin: 30px 0 0;
    }
  }
`;

//banner container
export const BannerContainer = styled.div`
  display: flex;
  margin: 20px 100px;
  padding: 80px;
  box-sizing: border-box;
  border-radius: 1rem;
  background: #333;
  height: 300px;
`;

