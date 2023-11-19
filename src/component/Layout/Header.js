import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../Images/logo.svg';
import '../../style/HeaderStyle.css';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    // handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    // menu drawer

    const drawer = (
        <Box onclick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography
                color={"pink"}
                variant='h6'
                component="div"
                sx={{ flexGrow: 1, my:2 }}
            >
               <img src={Logo} alt='logo' height={"70"} width="250" />
            </Typography>
            <Divider/>
            <ul className='mobile-navigation'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>
        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "#212121" }}>
                    <Toolbar>
                        <IconButton color="inherit" 
                        aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: "none" }, }}
                            onClick={handleDrawerToggle}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={"pink"}
                            variant='h6'
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                        <img src={Logo} alt='logo' height={"70"} width="200" />
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: "block" } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/menu"}>Menu</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant='temporary' open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{ display: { xs: 'block', sm: 'none' }, 
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "240px",
                    },
                    }}

                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                <Toolbar />
                </Box>
            </Box >
        </>
    );
};

export default Header