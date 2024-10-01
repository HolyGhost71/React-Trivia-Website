import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const logo =
  "https://cdn.openart.ai/published/Pw6nkGqw5jFhq4uzybRb/JKut-nts_uWV3_1024.webp";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#ff00ff",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar></SearchBar>
  </Stack>
);

export default NavBar;
