import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
    Box,
    Paper,
    Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import seguridad from '../images/seguridad.jpg';
import redes from '../images/redes.jpg';
import internet from '../images/internet.jpg';
import enfriamiento from '../images/enfriamiento.jpg';
const servicios = [
    {
        titulo: 'SEGURIDAD ELÉCTRONICA',
        descripcion:
            'Diseño, instalación y mantenimiento predictivo, preventivo y correctivo de cámaras de seguridad, grabadores, switches entre otros, con base a normas y protocolos de calidad establecidos por los fabricantes. Así mismo contamos con centros de servicio aliados para mantenimiento correctivo de equipos electrónicos.',
        imagen: seguridad,
    },
    {
        titulo: 'REDES ELÉCTRICAS',
        descripcion:
            'Diseño, instalación y mantenimiento predictivo, preventivo y correctivo de plantas eléctricas, UPS, circuitos eléctricos y redes de protección, de baja, media y alta tensión con personal altamente calificado.',
        imagen: redes,
    },
    {
        titulo: 'REDES FIJAS Y MÓVILES',
        descripcion:
            'Suministramos y administramos sistemas de conectividad inalámbrica para optimizar el uso de la red según las necesidades del cliente, zonas Wifi-portal cautivo, redes satelitales, access point entre otros.',
        imagen: internet,
    },
    {
        titulo: 'SISTEMAS DE ENFRIAMIENTO',
        descripcion:
            'Mantenimiento preventivo, predictivo y correctivo de sistemas de aires acondicionados con reportes personalizados y seguimiento de acuerdo a marcos normativos.',
        imagen: enfriamiento,
    },
];
const GradientText = styled('span')(() => ({
    color: '#581291ff',
    position: 'relative',

}));
export default function TecnologiesInformation() {
    const [activo, setActivo] = useState(0);

    return (
        <Box

            sx={{
                px: { xs: 2, md: 6 },
                py: { xs: 4, md: 8 },


            }}
        >

            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '1rem', sm: '1rem', md: '1rem', lg: '3rem' },
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    background: 'linear-gradient(90deg, #9616afff, #2931a1ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                }}
            >
                TECNOLOGÍAS DE LA INFORMACIÓN
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: 'text.secondary',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                }}
            >
                Descubre cómo nuestros servicios pueden transformar tu día a día.
            </Typography>

            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="flex-start"
                gap={4}
            >
                {/* IZQUIERDA: acordeones */}
                <Box flex={1} maxWidth={{ md: '60%' }}>
                    {servicios.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={activo === index}
                            onChange={() => setActivo(index)}
                            sx={{
                                backgroundColor: '#fff',
                                borderLeft: activo === index
                                    ? '4px solid #53188aff'
                                    : '4px solid transparent',
                                boxShadow: 'none',
                                mb: 1,
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography
                                    variant="h6"
                                    color='#37065fff'
                                    fontWeight="bold"
                                    fontSize={25}
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <Box ml={1}>{item.titulo}</Box>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: '800px',
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                    }}>{item.descripcion}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* DERECHA: imagen */}
                <Box flex={1} maxWidth={{ md: '40%' }}>
                    <Paper
                        elevation={6}
                        sx={{
                            borderRadius: 4,
                            overflow: 'hidden',
                            height: 400,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#fff',

                        }}
                    >
                        <img
                            src={servicios[activo].imagen}
                            alt={servicios[activo].titulo}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </Paper>
                </Box>
            </Box>
        </Box >
    );
}
