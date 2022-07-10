import { Pets, Mail, Notifications } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from "@mui/material"

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>POLAR</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="Search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error"><Mail /></Badge>
                    <Badge badgeContent={2} color="error"><Notifications /></Badge>
                    <Avatar sx={{ width: 30, height: 30 }} />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} />
                    <Typography variant="span">Hangger</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}
export default Navbar