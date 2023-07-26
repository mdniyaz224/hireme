import { MUIBox, MUITypography } from "../Components/MUI-Component";

const Question_bank = () => {
  return (
    <>
      <MUIBox sx={{ textAlign: "left", color: "red", marginLeft: "16%" }}>
        <MUIBox sx={{ background: "white", height: "70px" }}>
          <MUITypography
            varient="h1"
            sx={{ fontSize: "40px", marginLeft: "20px" }}
          >
            {/* coming soon */}
          </MUITypography>
        </MUIBox>
      </MUIBox>
    </>
  );
};

export default Question_bank;
