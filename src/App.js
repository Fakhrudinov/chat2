import "./App.css";
import { Route, Routes } from "react-router-dom";
import Site from "./pages/Site";
import SiteLayout from "./Layouts/SiteLayout";
import Chat from "./pages/Chat";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const theme = createTheme({
  spacing: [0, 4, 8, 16],
  components: {
    MuiButton: {
      defaultProps: {
        size: "big",
        variant: "contained",
        margin: "dense",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
        size: "small",
      },
    },
    MuiStack: {
      defaultProps: {
        spacing: 1,
      },
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={"/"} element={<SiteLayout />}>
          <Route index element={<Site />} />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route path={"/chat"} element={<Chat />} />
        <Route path={"/chat/:chatId"} element={<Chat />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;