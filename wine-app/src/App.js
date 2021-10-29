import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AppBar from "./components/AppBar/AppBar";
import theme from "./theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ToastContainer />
          <AppBar />
          {`Pick A Wine`}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
