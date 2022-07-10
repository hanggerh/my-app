import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed.component";
import Navbar from "./components/global/Navbar.component";
import Rightbar from "./components/Rightbar.component";
import Sidebar from "./components/Sidebar.component";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
