import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import components from "./overrides";

const theme = createTheme({
  palette,
  typography,
  components,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;
