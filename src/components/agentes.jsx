import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

import consultoria from "../images/1.png";
import infraestructura from "../images/2.png";
import internet from "../images/3.png";
import software from "../images/5.png";

// Solo 4 ítems para el carrusel
const items = [
    {
        titulo: "Consultoría Integral en TI",
        descripcion:
            "Innovación digital, transformación tecnológica, adopción de estándares internacionales y sincronización de objetivos de negocio con capacidades TI.",
        imagen: consultoria,
    },
    {
        titulo: "Infraestructura Física y Operativa",
        descripcion:
            "Redes eléctricas, plantas eléctricas, sistemas UPS, sistemas de enfriamiento, CCTV y cableado estructurado.",
        imagen: infraestructura,
    },
    {
        titulo: "Conectividad",
        descripcion:
            "Internet empresarial y dedicado, transporte de datos, MPLS, redes satelitales y gestión centralizada de conectividad.",
        imagen: internet,
    },
    {
        titulo: "Inteligencia Artificial y Automatización",
        descripcion:
            "Agentes conversacionales, asistentes virtuales, automatización de procesos con IA e integración con plataformas de negocio.",
        imagen: software,
    },
];

export default function ServiciosCarousel() {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <Box
            sx={{
                display: "flex",
                overflowX: "auto",
                gap: 2,
                py: 4,
                px: 2,
                transition: "all 0.3s ease",
            }}
        >
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "relative",
                        flex: hoverIndex === index ? "0 0 500px" : "0 0 260px", // Se expande en hover
                        height: 300,
                        cursor: "pointer",
                        display: "flex",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    {/* Imagen principal */}
                    <Paper
                        elevation={4}
                        sx={{
                            flex: "0 0 260px",
                            height: "100%",
                            borderRadius: 3,
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#f9f9f9",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    </Paper>

                    {/* Panel lateral dentro del mismo contenedor */}
                    <Box
                        sx={{
                            flex: 1,
                            ml: 2,
                            borderRadius: "12px",
                            background: "#fff",
                            boxShadow:
                                hoverIndex === index ? "0 6px 20px rgba(0,0,0,0.15)" : "none",
                            opacity: hoverIndex === index ? 1 : 0,
                            transform: hoverIndex === index ? "translateX(0)" : "translateX(20px)",
                            transition: "all 0.3s ease",
                            p: hoverIndex === index ? 2 : 0,
                            pointerEvents: hoverIndex === index ? "auto" : "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 1, color: "#37065f" }}
                        >
                            {item.titulo}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", lineHeight: 1.6 }}
                        >
                            {item.descripcion}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
