import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box,List,ListItem,Typography,useTheme} from "@mui/material"
import Header from "../../components/Header";
import { token_mode } from "../../theme";

const Calendar = () => {
    const theme = useTheme()
    const colors = token_mode(theme.palette.mode)
    //Update the current events in Calendar.
    const [currentEvents,setCurrentEvents]=useState([])
  return <div>
    </div>


}
export default Calendar;