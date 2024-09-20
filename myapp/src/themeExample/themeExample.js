import React,{useState} from "react";
import { ThemeProvider,createTheme,CssBaseline,Button } from "@mui/material";

function ThemeApp(){
    const [darkMode,setDarkMode]= useState(false);


    const theme = createTheme({
        palette:{
            mode:darkMode ? "dark" : "light",
        },
    });
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{padding:20}}>
                <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
                    Toggle {darkMode ? "Light" : "Dark"} Mode
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default  ThemeApp;