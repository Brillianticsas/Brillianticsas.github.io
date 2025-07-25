// src/components/Contacto.jsx
import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    IconButton,
    Stack,
    TextField,
    Button,
    Alert
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear el enlace mailto con los datos del formulario
        const mailtoLink = `mailto:demo@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}
        `)}`;

        // Abrir el cliente de correo
        window.location.href = mailtoLink;

        // Mostrar alerta de confirmación
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

        // Limpiar formulario
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <Box sx={{
            width: "100%",
            background: "linear-gradient(135deg, #4d5ca0ff 0%, #1b0c2bff 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            justifyContent: "center",
            px: { xs: 1, sm: 2 },
            py: { xs: 2, sm: 3 }
        }}>
            {showAlert && (
                <Alert severity="success" sx={{
                    mb: 2,
                    maxWidth: 1200,
                    width: "100%",
                    mx: 1
                }}>
                    ¡Se ha abierto tu cliente de correo! Completa y envía el email.
                </Alert>
            )}

            <Box
                id="contacto"
                sx={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                    maxWidth: 1200,
                    width: "100%",
                    p: { xs: 2, sm: 3, md: 4, lg: 5 }
                }}
            >
                {/* Título principal */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                            color: "#333"
                        }}
                    >
                        Contáctanos
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                    >
                        Estamos aquí para ayudarte. ¡Escríbenos!
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 3, md: 4 }}>
                    {/* Información de contacto */}
                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                backgroundColor: "#000",
                                color: "#fff",
                                p: { xs: 3, sm: 4 },
                                borderRadius: 2,
                                height: "350",
                                width: "100",
                                minHeight: { xs: "auto", lg: 350 }
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }}
                            >
                                Información de Contacto
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    opacity: 0.8,
                                    fontSize: { xs: "0.95rem", sm: "1rem" }
                                }}
                            >
                                ¡Escríbenos y comencemos una conversación!
                            </Typography>

                            <Stack spacing={3}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Phone sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                    <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                                        +57 3106059266

                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Email sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                    <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                                        mesadeayuda@brilliantic.com.co
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                    <LocationOn sx={{ fontSize: { xs: 18, sm: 20 }, mt: 0.5 }} />
                                    <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                                        Carrera 2W #25G-10<br />
                                        Local 26<br />
                                        Neiva, Huila,
                                        Colombia
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Mapa */}
                    <Grid item xs={12} lg={4}>
                        <Box
                            sx={{
                                borderRadius: 2,
                                overflow: "hidden",
                                height: { xs: 300, sm: 400, lg: 400 },
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <iframe
                                title="Ubicación"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5687163513426!2d-75.30155592502967!3d2.939489897036796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b75993cbc039b%3A0xce43f062fd1f53cb!2sCONDOMINIO%20MEDITERRANEO!5e0!3m2!1ses-419!2sco!4v1753240200096!5m2!1ses-419!2sco"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </Box>
                    </Grid>

                    {/* Formulario */}
                    <Grid item xs={12} lg={4}>
                        <Box sx={{ p: { xs: 1, sm: 2 }, height: "100%" }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}
                            >
                                Envíanos un mensaje
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mb: 3,
                                    fontSize: { xs: "0.85rem", sm: "0.9rem" }
                                }}
                            >
                                Completa el formulario y nos pondremos en contacto contigo
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        label="Nombre completo"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: { xs: '0.9rem', sm: '1rem' }
                                            }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Correo electrónico"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: { xs: '0.9rem', sm: '1rem' }
                                            }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Asunto"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: { xs: '0.9rem', sm: '1rem' }
                                            }
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Mensaje"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: { xs: '0.9rem', sm: '1rem' }
                                            }
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="medium"
                                        startIcon={<Send />}
                                        fullWidth
                                        sx={{
                                            backgroundColor: "#000",
                                            color: "#fff",
                                            px: 3,
                                            py: { xs: 1.5, sm: 1.8 },
                                            borderRadius: 2,
                                            fontSize: { xs: '0.9rem', sm: '1rem' },
                                            fontWeight: 600,
                                            "&:hover": {
                                                backgroundColor: "#333",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                                            },
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        Enviar mensaje
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;