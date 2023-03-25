
import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material"

function App() {
  const [theme,colorMode] = useMode();

  return (
    //Provide value to all the Component values.
    //ThemeProvider is used to apply styling for entire application.
    //CssBaseline for applying consistent look across all pages.
    <ColorModeContext.Provider value = {colorMode}>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <div className="app">Hello World!</div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
