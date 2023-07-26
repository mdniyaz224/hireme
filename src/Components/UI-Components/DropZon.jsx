import { useMemo } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#0458B7",
  borderStyle: "dashed",
  backgroundColor: "#EFEFEF",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function DropZon(props) {
  const { t } = useTranslation();
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <label
        htmlFor=""
        style={{ color: "rgba(0, 0, 0, 0.6)", marginBottom: "10px" }}
      >
        {t("Upload Student")}
      </label>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: "50px", color: "#0458B7" }} />
        <p style={{ color: "#1F1F1F" }}> {t("Drag and Drop here")}</p>
        <p style={{ color: "#0458B7", marginTop: "-10px" }}>{t("Browse File")} </p>
      </div>
    </div>
  );
}

<DropZon />;
