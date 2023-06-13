import Banner from "../components/mainPage/banner/templates/Banner";
import CardItem from "../components/mainPage/gridCard/templates/CardItem";
import { GridCardContainer } from "../styles/gridCardStyled/GridCardStyled";

const MainPage = () => {
  const dummyArray = new Array(12).fill('dummy') //차후 백엔드에서 받아오기
  return (
  <>
    <Banner />
    <GridCardContainer>
      {dummyArray?.map((card, i) => (
        <CardItem key={i}/>
      ))}
    </GridCardContainer>
  </>
  )
};

export default MainPage;
