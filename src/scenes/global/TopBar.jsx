import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, token_mode } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = ()=>{
    const theme = useTheme();
    const colors = token_mode(theme.palette.mode);
    //Pass value from Parent to Child Component.
    const colorMode = useContext(ColorModeContext);


    return 
    //Similar to <div> but can add css directly to it.
    //padding set to 2 ,justifyContent distributes child element evetually on main axis of flx container. 
    (<Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        
    <IconButton sx={{display:"flex"}}></IconButton>
    </Box>)
}

export default TopBar;