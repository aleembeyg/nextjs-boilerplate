import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      // Name of the component ⚛️      
      MuiButtonBase: {
        defaultProps: {
          // The default props to change
          disableRipple: false, // No more ripple, on the whole application 💣!
        },
      },
    },
  });