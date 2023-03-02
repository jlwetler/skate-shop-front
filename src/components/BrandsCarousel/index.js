import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { brandsList } from "../../images/brands";
import { BrandsBox } from "./styles";

export default function BrandsCarousel() {
  return (
    <BrandsBox>
      <AiOutlineLeftCircle size={40} />
      <div>
        {brandsList.map(({ name, image }) => (
          <img key={name} src={image} alt={name} />
        ))}
      </div>

      <AiOutlineRightCircle size={40} />
    </BrandsBox>
  );
}
