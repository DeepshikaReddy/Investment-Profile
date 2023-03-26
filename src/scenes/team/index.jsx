import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { token_mode } from "../../theme";
import {mockDataTeam} from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () =>{
    const theme = useTheme()
    const colors= token_mode(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID number" },
        {
          field: "name",
          headerName: "Full Name",
          flex: 1, // take equal space 
          cellClassName: "name-column--cell", //each cell has class name value
        },
        {
          field: "age",
          headerName: "Age Bracket",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone NumberContact",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email Address",
          flex: 1,
        },
        {
            field:"access",
            headerName:"Permission ",
            flex:1,
            renderCell:({row :{access}})=>{
                return(
                    <Box width="60%" m ="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={
                      access==="admin"
                      ? colors.greenAccent[600]
                      : access === "manager"
                      ? colors.greenAccent[700]
                      : access === "user"
                      ? colors.greenAccent[500]
                      : colors.greenAccent[100]
                    } borderRadius="5px">
                    {access==="manager" && <SecurityOutlinedIcon/>}
                     {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                     {access==="user" && <LockOpenOutlinedIcon/>}
                     <Typography color={colors.grey[100]} sx={{ml:"6px"}} >{access}</Typography>
                    </Box>
                )

            }
        }
    ]

    return(
        <Box m ="20px">
            <Header title="TEAMS" subtitle="Managing Teams"></Header>
            <Box m="50px 0 0 0" height="75vh">
                <DataGrid
                rows = {mockDataTeam}
                columns = {columns}
                />
            </Box>  
        </Box>
    )
}

export default Team;