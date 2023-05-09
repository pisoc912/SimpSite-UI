import { Switch } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header({ darkMode, setDarkMode }) {
    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">My App</Typography>
            </Toolbar>
            <Switch checked={darkMode} onChange={handleDarkModeChange} />
        </AppBar>
    );
}
export default Header;