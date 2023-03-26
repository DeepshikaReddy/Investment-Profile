
import {useState} from "react";
import {Box,IconButton,Typography,useTheme} from '@mui/material';
import { ProSidebar,Menu,MenuItem } from "react-pro-sidebar"; //Sidebar component in react for the Page
// import 'react-pro-sidebar/dist/css/styles.css';

import { Link } from "react-router-dom"; //Links when we click on the nVigation items
import { token_mode } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlinedIcon";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlinedIcon";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlinedIcon";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
// import CalendarOutlinedIcon from "@mui/icons-material/CalendarOutlinedIcon";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlinedIcon";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlinedIcon";
// import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlinedIcon";
// import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlinedIcon";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlinedIcon";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlinedIcon";

const SideBar = () => {
    const theme= useTheme();
    const colors = token_mode(theme.palette.mode); // has value dark or light.
    const {isCollapsed, setisCollapsed}= useState(false); // is sidebar collapsed or not.
    const {selected,setSelected}=useState("Dashboard"); //Which page is selected


    //sx is used to set inline text and & targets the child element with class pro-sidebar-inner and test properties.
    return <Box
    sx={{
        "& .pro-sidebar-inner":{
            background : `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper":{
            background : "transparent !important"
        },
        "& .pro-inner-item":{
            padding : "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
            color : " #868dfb !important"
        },
        "& .pro-menu-item.active":{
            color : " #6870fa !important"
        }

    }}>
sdnd</Box>
}

export default SideBar;