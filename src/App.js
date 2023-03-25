
import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material"
import TopBar from "./scenes/global/TopBar"

function App() {
  const [theme,colorMode] = useMode();

  return (
    //Provide value to all the Component values.
    //ThemeProvider is used to apply styling for entire application.
    //CssBaseline for applying consistent look across all pages.
    <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <div className="app1">
    <main className="content">
    <TopBar/>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
