import {
  MUIBox,
  MUIContainer,
  MUIGrid,
} from "../Components/MUI-Component/index";
import img from "../assets/common_left.png";
import "./PublicLayout.css"
const PublicLayout = ({ children }) => {
  return (
    <MUIBox className="public-layout">
      <MUIGrid container className="public-layout-container">
        <MUIGrid item md={5} sm={12} className="public-left-side">
          <MUIContainer>
            <MUIBox className="public-layout-image">
              <img src={img} />
            </MUIBox>
          </MUIContainer>
        </MUIGrid>
        <MUIGrid item md={7} sm={12} className="public-right-side">
          {children}
        </MUIGrid>
      </MUIGrid>
    </MUIBox>
  );
};

export default PublicLayout;
