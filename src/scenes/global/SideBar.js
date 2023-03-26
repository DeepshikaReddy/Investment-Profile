
import {useState} from "react";
import {Box,IconButton,Typography,useTheme} from '@mui/material';
import { ProSidebarProvider,Menu,MenuItem } from "react-pro-sidebar"; //Sidebar component in react for the Page
// import 'react-pro-sidebar/dist/css/styles.css';

import { Link } from "react-router-dom"; //Links when we click on the nVigation items
import { token_mode } from "../../theme";
import { findAllByDisplayValue } from "@testing-library/react";
import { ArrowDropDownCircle } from "@mui/icons-material";
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
    const {isCollapsed, setisCollapsed}= useState(findAllByDisplayValue); // is sidebar collapsed or not.
    const {selected,setSelected}=useState("Dashboard"); //Which page is selected


    //sx is used to set inline text and & targets the child element with class pro-sidebar-inner and test properties.
    return (<Box
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
<ProSidebarProvider collapsed={isCollapsed}>
{/* Menu for Sidebar*/}
<Menu iconShape="square"> 
{/*Icon for Menu */}
<MenuItem onclick = { () => setisCollapsed(!isCollapsed) }
    icon = {isCollapsed ? <ArrowDropDownCircle/> : undefined}
    style={{margin: "10px 0 20px 0",color: colors.grey[100]}}
 >

{/*Menu Title*/}
{!isCollapsed && (
    <Box 
    display="flex"  justifyContent="space-between" alignItems="center" ml="17px" >
        <Typography variant="h3" color={colors.grey[100]}>Portfolio Managment Toolkit</Typography>
        <IconButton onclick = { ()=>setisCollapsed(!isCollapsed)} >
         <ArrowDropDownCircle/>   
        </IconButton>
    </Box>
)}
</MenuItem>

{/* Portfolio Manager Details and Image */}
{!isCollapsed && (
<Box mb="28px">

<Box display="flex" justifyContent="center" alignItems="center">
<img alt="portfolio_manager" width="100px" height="100px" src={`../../assets/port_manager4.jpg`} style={{cursor: "pointer", borderRadius: "50%"}}/>   
</Box> 
<Box>
<Typography>
</Typography> 
<Typography>
</Typography>   
</Box>  
</Box>
)
}
</Menu>

</ProSidebarProvider>
</Box>
);

};

export default SideBar;