import * as React from "react";
import "../App.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material/";
import logo from "../assets/logo.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LocalStorageService from "../Services/LocalStorage";
// import TopModal from "../Components/UI-Components/TopModal";
import {
  DashboardIcon,
  SnowshoeingIcon,
  HelpOutlineIcon,
  FeedIcon,
  AddHome,
  NotificationsIcon,
  KeyboardArrowDownIcon,
} from "../Icons/index";
import { MUIBox, MUIButton, MUITypography } from "../Components/MUI-Component";
import Modal from "@mui/material/Modal";
import LanguageSwitcher from "../Components/UI-Components/LanguageSwitcher";

import { useTranslation } from "react-i18next";
const drawerWidth = 240;

function Sidebar(props) {
  const { t } = useTranslation();
  const style = {
    position: "fixed",
    top: "15%",
    right: "-4%",
    transform: "translate(-50%, -50%)",
    width: 150,
    height: "143",
    borderRadius: "10px",
    bgcolor: "background.paper",
    border: "none ",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Closeme = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    // setDeleteId(i);
  };
  const logout = () => {
    LocalStorageService.clearToken();
    setOpen(false);
    navigate("/");
  };
  const drawer = (
    <div>
      <Toolbar />
      <NavLink
        to="/dashboard"
        className="liststyle "
        button
        selected={activeItem === "Item 6"}
        onClick={() => handleItemClick("Item 6")}
        style={{
          backgroundColor: activeItem === "Item 6" ? "#fff" : "transparent",
          color: activeItem === "Item 6" ? "#fff" : "#000",
          borderRadius: "0px 30px 30px 0px",
        }}
      >
        <img src={logo} alt="" className="hire-me-logo" />
      </NavLink>
      <Divider />

      <List sx={{ marginTop: "25px" }}>
        <ListItem onClick={() => navigate("/Dashboard")}>
          <ListItemButton
            className="liststyle "
            button
            selected={activeItem === "Item 1"}
            onClick={() => handleItemClick("Item 1")}
            style={{
              backgroundColor: activeItem === "Item 1" ? "#fff" : "transparent",
              color: activeItem === "Item 1" ? "#fff" : "#000",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <DashboardIcon
              style={{
                color: activeItem === "Item 1" ? "#0458B7" : "#fff",
              }}
            />
            <ListItemText
              // primary="Dashboard"

              sx={{ paddingLeft: "10px" }}
              style={{
                color: activeItem === "Item 1" ? "#000" : "#fff",
              }}
            >
              {t("Dashboard")}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/institutes")}>
          <ListItemButton
            className="liststyle"
            button
            selected={activeItem === "Item 2"}
            onClick={() => handleItemClick("Item 2")}
            style={{
              backgroundColor: activeItem === "Item 2" ? "#fff" : "transparent",
              color: activeItem === "Item 2" ? "#fff" : "#000",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <AddHome
              style={{
                color: activeItem === "Item 2" ? "#0458B7" : "#fff",
              }}
            />
            <ListItemText
              // primary="Institutes"
              sx={{ paddingLeft: "10px" }}
              style={{
                color: activeItem === "Item 2" ? "#000" : "#fff",
              }}
            >
              {t("Institutes")}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/Walk_in")}>
          <ListItemButton
            className="liststyle"
            button
            selected={activeItem === "Item 3"}
            onClick={() => handleItemClick("Item 3")}
            style={{
              backgroundColor: activeItem === "Item 3" ? "#fff" : "transparent",
              color: activeItem === "Item 3" ? "#fff" : "#000",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <SnowshoeingIcon
              style={{
                color: activeItem === "Item 3" ? "#0458B7" : "#fff",
              }}
            />
            <ListItemText
              sx={{ paddingLeft: "10px" }}
              style={{
                color: activeItem === "Item 3" ? "#000" : "#fff",
              }}
            >
              {t("Walk in")}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/Question_bank")}>
          <ListItemButton
            className="liststyle"
            button
            selected={activeItem === "Item 4"}
            onClick={() => handleItemClick("Item 4")}
            style={{
              backgroundColor: activeItem === "Item 4" ? "#fff" : "transparent",
              color: activeItem === "Item 4" ? "#000" : "#fff",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <HelpOutlineIcon
              style={{
                color: activeItem === "Item 4" ? "#0458B7" : "#fff",
              }}
            />
            <ListItemText
              // primary="Question Bank"
              sx={{ paddingLeft: "10px" }}
              style={{
                color: activeItem === "Item 4" ? "#000" : "#fff",
              }}
            >
              {t("Question Bank")}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/Result")}>
          <ListItemButton
            className="liststyle"
            button
            selected={activeItem === "Item 5"}
            onClick={() => handleItemClick("Item 5")}
            style={{
              backgroundColor: activeItem === "Item 5" ? "#fff" : "transparent",
              color: activeItem === "Item 5" ? "#000" : "#fff",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <FeedIcon
              style={{
                color: activeItem === "Item 5" ? "#0458B7" : "#fff",
              }}
            />
            <ListItemText
              // primary="Results"
              sx={{ paddingLeft: "10px" }}
              style={{
                color: activeItem === "Item 5" ? "#000" : "#fff",
              }}
            >
              {t("Results")}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box sx={{marginRight:'40px'}}>
                <LanguageSwitcher sx={{width:'150px'}}/>
              </Box>
              <Badge
                badgeContent={4}
                color="primary"
                className="budgenotification"
              >
                <NotificationsIcon color="action" />
              </Badge>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ mr: "7px" }}
              />
              <MUIButton onClick={handleOpen}>
                <MUITypography variant="body1" className="admin">
                  <span>{t("admin")}</span>
                  {/* <span>Admin</span> */}
                </MUITypography>
                <KeyboardArrowDownIcon
                  sx={{ color: "black", fontSize: "30px" }}
                />
              </MUIButton>
            </Box>
            {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            textAlign: "center",
          }}
        >
          {/* <MUITypography varient="h4" sx={{ color: "red", marginTop: "" }}>
            404| page not found
            sdgfhghjkjlkjlk;l
          </MUITypography> */}

          <Toolbar />
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="logoutdrop">
          <MUIBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Button sx={{ color: "black" }}>{t("PROFILE")} </Button>
              <Button onClick={logout} sx={{ color: "black" }}>
                {t("LOGOUT")}
              </Button>
              
            </Box>
          </MUIBox>
        </Box>
      </Modal>
    </>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
