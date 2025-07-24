import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#1a1a1a",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                color: "#fff",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" fontWeight="bold">
                            BRILLIANTIC S.A.S.
                        </Typography>
                    </Grid>

                    {/* Redes sociales */}
                    <Grid item>
                        <Box display="flex" gap={1}>
                            <IconButton
                                aria-label="facebook"
                                href="https://www.facebook.com/"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        boxShadow: "0 0 10px #3b5998",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                aria-label="instagram"
                                href="https://www.instagram.com/"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        boxShadow: "0 0 10px #e1306c",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>



                            <IconButton
                                aria-label="whatsapp"
                                href="https://wa.me/573106059266"
                                target="_blank"
                                sx={{
                                    color: "#fff",
                                    "&:hover": {
                                        boxShadow: "0 0 10px #25D366",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Typography variant="body2" color="gray" align="center">
                            {`${new Date().getFullYear()} © BRILLIANTIC S.A.S. Todos los derechos reservados.`}
                            <Link to="/DataPolitics" style={{ color: "#fff", textDecoration: "underline" }}>
                                <br />Politica de Tratamiento de Datos
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
