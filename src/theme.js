// src/theme.js
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2196f3",   // azul brillante
            contrastText: "#fff"
        },
        secondary: {
            main: "#1a1a1a",   // fondo oscuro navbar/footer
            contrastText: "#fff"
        },
        background: {
            default: "#f5f5f5",
            paper: "#fff"
        }
    },
    shape: {
        borderRadius: 8
    },
    shadows: [
        "none",
        "0 2px 4px rgba(0,0,0,0.1)",
        "0 4px 8px rgba(0,0,0,0.15)",
        "0 8px 16px rgba(0,0,0,0.2)",
        // ...
    ],
    typography: {
        h3: { fontWeight: 700, lineHeight: 1.3 },
        h4: { fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 600 },
    },
});

export default theme;
