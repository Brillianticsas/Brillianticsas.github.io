import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Slide,
    useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink } from 'react-router-hash-link';

const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contacto' }
];

// Hook para detectar scroll
function HideOnScroll({ children }) {
    const trigger = useScrollTrigger({
        threshold: 100,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = () => {
    const [, setIsTop] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsTop(scrollPosition <= 50);

            // Detectar sección activa
            const sections = ['inicio', 'services', 'contacto'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyles = {
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        px: { xs: 2, md: 6, lg: 8 },
        py: { xs: 1, md: 1.5 },
    };


    const linkStyles = (isActive) => ({
        textDecoration: 'none',
        color: 'inherit',
        fontWeight: 600,
        fontSize: '0.95rem',
        position: 'relative',
        padding: '8px 16px',
        borderRadius: '25px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: isActive
            ? 'rgba(66, 165, 245, 0.2)'
            : 'transparent',
        border: isActive
            ? '1px solid rgba(66, 165, 245, 0.4)'
            : '1px solid transparent',
        '&:hover': {
            backgroundColor: 'rgba(66, 165, 245, 0.15)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(66, 165, 245, 0.3)',
        }
    });

    const mobileMenuStyles = {
        width: '85%',
        background: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(20px)',
        color: 'white',
        borderRadius: '20px 0 0 20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    };

    const mobileItemStyles = (isActive) => ({
        borderRadius: '12px',
        margin: '8px 16px',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        border: isActive ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transform: 'translateX(8px)',
        }
    });

    return (
        <>
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={navbarStyles}
                >
                    <Toolbar sx={{
                        justifyContent: 'space-between',
                        minHeight: { xs: '64px', md: '72px' }
                    }}>
                        {/* Logo */}
                        <Box
                            component={HashLink}
                            smooth
                            to="/#hero"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                }
                            }}
                        >
                            <img
                                src="/logo_navbar.png"
                                alt="Brilliantic SAS"
                                style={{
                                    height: '80px',
                                    width: 'auto',
                                    maxWidth: '90%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>

                        {/* Desktop Links */}
                        {!isMobile && (
                            <Box sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center'
                            }}>
                                {navItems.map((item) => {
                                    const sectionName = item.href.replace('#', '');
                                    const isActive = activeSection === sectionName;

                                    return (
                                        <Typography
                                            key={item.label}
                                            component={HashLink}
                                            smooth
                                            to={`/${item.href}`}
                                            sx={linkStyles(isActive)}
                                        >
                                            {item.label}
                                        </Typography>
                                    );
                                })}
                            </Box>
                        )}

                        {/* Mobile Menu Button */}
                        {isMobile && (
                            <IconButton
                                onClick={() => setOpenDrawer(true)}
                                color="inherit"
                                sx={{
                                    backgroundColor: 'rgba(66, 165, 245, 0.15)',
                                    borderRadius: '12px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(66, 165, 245, 0.25)',
                                        transform: 'scale(1.05)',
                                    },
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {/* Drawer para móviles */}
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                    sx: mobileMenuStyles,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Menú
                    </Typography>
                    <IconButton
                        onClick={() => setOpenDrawer(false)}
                        sx={{
                            color: 'white',
                            backgroundColor: 'rgba(66, 165, 245, 0.2)',
                            '&:hover': {
                                backgroundColor: 'rgba(66, 165, 245, 0.3)',
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List sx={{ pt: 2 }}>
                    {navItems.map((item) => {
                        const sectionName = item.href.replace('#', '');
                        const isActive = activeSection === sectionName;

                        return (
                            <ListItem
                                button
                                key={item.label}
                                component={HashLink}
                                smooth
                                to={`/${item.href}`}
                                onClick={() => setOpenDrawer(false)}
                                sx={mobileItemStyles(isActive)}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            color: "white",
                                            fontWeight: isActive ? 700 : 500,
                                            fontSize: '1.1rem'
                                        }
                                    }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;