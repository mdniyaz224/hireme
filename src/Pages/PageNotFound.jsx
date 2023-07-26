import { MUIBox, MUITypography } from "../Components/MUI-Component";

const PageNotFound = () => {
  return (
    <MUIBox sx={{ textAlign: "left", color: "red", marginLeft: "16%" }}>
      <MUIBox sx={{ background: "white", height: "70px" }}>
        <MUITypography
          varient="h1"
          sx={{ fontSize: "30px", marginLeft: "20px", textAlign: "center" }}
        >
          404| page not found
        </MUITypography>
      </MUIBox>
    </MUIBox>
  );
};

export default PageNotFound;
