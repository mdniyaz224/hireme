import { MUIBox, MUITypography } from "../Components/MUI-Component";
import { useTranslation } from "react-i18next";
const Result = () => {
  const { t } = useTranslation();
  return (
    <>
      <MUIBox sx={{ textAlign: "left",  color: "red",marginLeft:'16%' }}>
        <MUIBox sx={{background:'white',height:'70px'}}>
        <MUITypography varient="h1" sx={{fontSize:'40px',marginLeft:'20px'}}>{t("Coming soon")}</MUITypography>
        </MUIBox>
      </MUIBox>
    </>
  );
};

export default Result;
