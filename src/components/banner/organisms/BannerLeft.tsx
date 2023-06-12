import ShowBtn from "../atoms/ShowBtn";
import { BannerLeftContanier } from "../../../styles/bannerStyled/BannerStyeld";

const BannerLeft = () => {
  return (
    <BannerLeftContanier>
      <h2>For the <span>better code</span></h2>
      <ShowBtn />
    </BannerLeftContanier>
  )
};

export default BannerLeft;