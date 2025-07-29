import { useState, useRef } from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    IconButton
} from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

// ICONOS
import ShieldIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import WidgetsIcon from '@mui/icons-material/Widgets';

// IMÁGENES
import profesional from '../images/profesional.png';
import vision from '../images/vision.png';
import tecno from '../images/tecno.png';
import cluster from '../images/cluster.png';
import engranaje from '../images/engranaje.png';
import equipo from '../images/equipo.png';
import trofeo from '../images/trofeo.png';

const cards = [
    {
        image: equipo,
        variant: 'default',
        title: 'Presentando Brilliantickets',
        description: 'Una solución integral para la gestión automatizada de casos, turnos y vigilancia digital. Pensada para todo tipo de entidades, Brilliantickets optimiza procesos clave, mejora la atención y permite un control más eficiente desde una sola plataforma. Automatiza, organiza y supervisa sin complicaciones.',
    },
    {
        image: cluster,
        title: 'Cluster de Servicios',
        variant: 'cluster',
        items: [
            {
                image: profesional,
                title: 'PROFESIONALES',
                description: 'Ingenieros especializados en auditoría y gestión',
            },
            {
                image: vision,
                title: 'VISIÓN 360',
                description: 'Análisis de comportamientos de acuerdo al core',
            },
            {
                image: tecno,
                title: 'TECNOLOGÍA',
                description: 'Herramientas a la medida para el segmento',
            },
        ],
    },
    {
        image: engranaje,
        title: 'Te ofrecemos...',
        list: [
            'Plataforma automatizada',
            'Seguimiento de actividades',
            'Gestión en línea',
            'Informes personalizados',
        ],
        variant: 'list-card',
    },
    {
        image: trofeo,
        title: 'Garantizamos Resultados',
        variant: 'garantizamos',
        items: [
            {
                icon: <ShieldIcon sx={{ fontSize: 40, color: '#650c88' }} />,
                title: 'Mejora en la gestión de servicios TIC',
            },
            {
                icon: <VerifiedIcon sx={{ fontSize: 40, color: '#650c88' }} />,
                title: 'Optimización en indicadores de satisfacción',
            },
            {
                icon: <WidgetsIcon sx={{ fontSize: 40, color: '#650c88' }} />,
                title: 'Gestión y acompañamiento del canal para reporte de incidencias',
            },
        ],
    },
];

const BrillianticketsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dragRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX || e.touches[0].pageX;
        scrollLeft.current = dragRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX.current) * 1.5;
        dragRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const current = cards[currentIndex];

    return (
        <Box sx={{ backgroundColor: '#f7f7f7', py: 6 }}>
            <Container>
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                        background: '#700785ff',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 5,
                    }}
                >
                    Brilliantickets: Innovación en Gestión de Servicios TIC
                </Typography>

                {/* Contenedor con Drag-to-Scroll */}
                <Box
                    ref={dragRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseDown}
                    onTouchMove={handleMouseMove}
                    onTouchEnd={handleMouseUp}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        backgroundColor: 'white',
                        borderRadius: 3,
                        boxShadow: 4,
                        overflow: 'auto',
                        maxWidth: 1000,
                        margin: '0 auto',
                        cursor: isDragging.current ? 'grabbing' : 'grab',
                        userSelect: 'none',
                    }}
                >
                    {/* Imagen */}
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '40%' },
                            height: { xs: 200, sm: 'auto' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f0f0f0',
                            padding: '10px',
                            flexShrink: 0,
                        }}
                    >
                        {current.image && (
                            <Box
                                component="img"
                                src={current.image}
                                alt={current.title}
                                sx={{
                                    width: '200px',
                                    height: '200px',
                                    objectFit: 'cover',
                                }}
                            />
                        )}
                    </Box>

                    {/* Contenido dinámico */}
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '60%' },
                            p: { xs: 3, sm: 4 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        {current.variant === 'list-card' ? (
                            <>
                                <Typography variant="subtitle1" fontWeight={700} sx={styles.title}>
                                    {current.title}
                                </Typography>
                                <ul style={styles.list}>
                                    {current.list.map((item, idx) => (
                                        <li key={idx} style={styles.listItem}>
                                            <Box sx={styles.bullet} />
                                            <Typography variant="body2" color="#2c2c2c">
                                                {item}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : current.variant === 'garantizamos' ? (
                            <>
                                <Typography variant="subtitle1" fontWeight={700} sx={styles.title}>
                                    {current.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {current.items.map((item, idx) => (
                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            {item.icon}
                                            <Typography variant="body2" sx={{ color: '#2c2c2c' }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </>
                        ) : current.variant === 'cluster' ? (
                            <>
                                <Typography variant="subtitle1" fontWeight={700} sx={styles.title}>
                                    {current.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {current.items.map((item, idx) => (
                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Box
                                                component="img"
                                                src={item.image}
                                                alt={item.title}
                                                sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '50%' }}
                                            />
                                            <Box>
                                                <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#650c88' }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#444' }}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </>
                        ) : (
                            <>
                                <Typography variant="subtitle1" fontWeight={700} sx={styles.title}>
                                    {current.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 1, color: '#333' }}>
                                    {current.description}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>

                {/* Botones de navegación */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 4 }}>
                    <IconButton onClick={handlePrev} sx={styles.navButton}>
                        <ArrowBackIosNew fontSize="small" />
                    </IconButton>
                    <IconButton onClick={handleNext} sx={styles.navButton}>
                        <ArrowForwardIos fontSize="small" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

const styles = {
    title: {
        color: '#650c88',
        mb: 3,
        textTransform: 'uppercase',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: 2,
            bottom: -4,
            left: 0,
            background: 'linear-gradient(to right, #D327F5, #27CFF5)',
        },
    },
    list: {
        paddingLeft: 0,
        margin: 0,
        listStyle: 'none',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        bgcolor: '#650c88',
        mr: 1,
    },
    navButton: {
        backgroundColor: '#650c88',
        color: 'white',
        '&:hover': {
            backgroundColor: '#4d0866',
        },
        width: 48,
        height: 48,
        borderRadius: '50%',
        boxShadow: 2,
    },
};

export default BrillianticketsSlider;
