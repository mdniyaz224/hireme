import {
  AddIcon,
  InsertDriveFileIcon,
  CalendarTodayIcon,
} from "../Icons/index";
import {
  MUIBox,
  MUIButton,
  MUITypography,
} from "../Components/MUI-Component/index";
import InstitudTabs from "../Components/UI-Components/InstitudTabs";
import { NavLink, useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { useTranslation } from 'react-i18next';
const Institutes = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  function handleDownload() {
    // Generate the file content
    const fileContent = "This is the content of the file.";

    // Create a Blob object from the file content
    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });

    // Use the file-saver library to save the file
    saveAs(blob, "filename.txt");
  }
  return (
    <>
      <MUIBox className="institu-main-box">
        <MUIBox className="institu-submain-box">
          <MUITypography variant="h6">{t('Institutes')}</MUITypography>
        
          <MUIBox className="institus_head_tabs">
            <MUIBox className="institues-buttons" spacing={5}>
              <MUIButton
                sx={{ marginRight: "15px" }}
                variant="contained"
                startIcon={<InsertDriveFileIcon />}
                className="btn-height"
                onClick={handleDownload}
              >
                
                {t('Sample File')}
              </MUIButton>

              <MUIButton
                variant="contained"
                startIcon={<CalendarTodayIcon />}
                sx={{ marginRight: "15px" }}
                className="btn-height topspace"
              >
                {/* Assign & Schedule Test */}
                {t('Assign & Schedule Test')}
              </MUIButton>
              <MUIButton
                variant="contained"
                startIcon={<AddIcon />}
                className="btn-height topspace"
                onClick={() => navigate("/add")}
              >
                {/* Add Institutes */}
                {t('Add Institutes')}
              </MUIButton>
            </MUIBox>
            <InstitudTabs />
          </MUIBox>
        </MUIBox>
      </MUIBox>
    </>
  );
};

export default Institutes;
