import { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Container,
} from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

// ICONS
import ShieldIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import WidgetsIcon from '@mui/icons-material/Widgets';

// IMAGES
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
        title: 'Tecnología y personal aplicados a gestión de eventos.',
        description:
            'Descubre como a través de herramientas a la medida podemos potenciar la toma de decisiones para incrementar la efectividad de tu equipo de trabajo  ',
    },
    {
        image: cluster,
        title: 'Cluster de Servicios',
        items: [
            { image: profesional, label: 'PROFESIONALES', desc: 'Ingenieros especializados' },
            { image: vision, label: 'VISIÓN 360', desc: 'Análisis de comportamientos' },
            { image: tecno, label: 'TECNOLOGÍA', desc: 'Herramientas a la medida' },
        ],
    },
    {
        image: engranaje,
        title: 'Te ofrecemos',
        list: ['Plataforma automatizada', 'Seguimiento de actividades', 'Gestión en línea'],
    },
    {
        image: trofeo,
        title: 'Garantizamos Resultados',
        stats: [
            { icon: <ShieldIcon />, label: 'Mejora en la gestión' },
            { icon: <VerifiedIcon />, label: 'Optimización en satisfacción' },
            { icon: <WidgetsIcon />, label: 'Acompañamiento canal' },
        ],
    },
];

export default function BrillianticketsSlider() {
    const [index, setIndex] = useState(0);
    const card = cards[index];

    const prev = () => setIndex((i) => (i === 0 ? cards.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === cards.length - 1 ? 0 : i + 1));

    return (
        <Box sx={{ py: 2, bgcolor: '#f7f7f7' }}>
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    align="center"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                        background: 'black',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 4,
                    }}
                >
                    Presentando Brilliantickets
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        bgcolor: 'white',
                        borderRadius: 3,
                        boxShadow: 3,
                        overflow: 'hidden',
                    }}
                >
                    {/* Image */}
                    <Box
                        sx={{
                            flex: '1 1 40%',
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={card.image}
                            alt={card.title}
                            sx={{ width: '100%', height: 'auto', maxWidth: 300 }}
                        />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: '1 1 60%', p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            sx={{ color: '#650c88', mb: 2, textTransform: 'uppercase' }}
                        >
                            {card.title}
                        </Typography>

                        {/* Description */}
                        {card.description && (
                            <Typography variant="h6" sx={{ color: '#333' }}>
                                {card.description}
                            </Typography>
                        )}

                        {/* List */}
                        {card.list && (
                            <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                                {card.list.map((item, i) => (
                                    <Typography key={i} component="li" variant="h6" sx={{ mb: 0.5 }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        )}

                        {/* Items */}
                        {card.items && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {card.items.map((it, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box
                                            component="img"
                                            src={it.image}
                                            alt={it.label}
                                            sx={{ width: '80px', height: '70px' }}
                                        />
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={700}>
                                                {it.label}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: '#555' }}>
                                                {it.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Stats */}
                        {card.stats && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {card.stats.map((st, i) => (
                                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {st.icon}
                                        <Typography variant="h6">{st.label}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>

                {/* Navigation */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
                    <IconButton onClick={prev} sx={{ bgcolor: '#650c88', color: '#fff', '&:hover': { bgcolor: '#4d0866' } }}>
                        <ArrowBackIosNew />
                    </IconButton>
                    <IconButton onClick={next} sx={{ bgcolor: '#650c88', color: '#fff', '&:hover': { bgcolor: '#4d0866' } }}>
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
