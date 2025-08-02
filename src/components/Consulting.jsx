import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import BuildIcon from '@mui/icons-material/Build';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

const features = [
    {
        icon: <PlumbingIcon color="primary" />,
        title: "Si hay una avería o fuga que interrumpa el suministro de agua",
        description: "Te enviaremos un plomero para que restablezca el servicio o detenga la fuga.",
    },
    {
        icon: <BuildIcon color="primary" />,
        title: "Si tienes un taponamiento que imposibilite la circulación de agua",
        description: "Te enviaremos un técnico especializado para que realice el destaponamiento.",
    },
    {
        icon: <VpnKeyIcon color="primary" />,
        title: "Si pierdes, extravías o te roban las llaves, o la cerradura queda inutilizable por intento de hurto",
        description: "Te enviaremos un especializado para que restablezca el acceso.",
    },
    {
        icon: <BrokenImageIcon color="primary" />,
        title: "Si se rompe algún vidrio, y la seguridad de tus inquilinos está en riesgo",
        description: "Te enviaremos un técnico especializado para que reemplace los vidrios.",
    },
];

export default function PlanPlus() {
    return (
        <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: 4 }}>
            <Typography variant="h4" fontWeight="bold" color="primary" mb={1}>
                Plan Plus
            </Typography>
            <Typography variant="body1" mb={2}>
                Tienes todo lo del Plan Esencial y además, protege tu hogar con asistencias para reparar daños cuando lo necesites.
            </Typography>
            <Box
                sx={{
                    backgroundColor: '#F7F8D0',
                    color: '#555',
                    borderRadius: 2,
                    p: 1.5,
                    mb: 3,
                    width: 'fit-content',
                }}
            >
                Este seguro es solo para inmuebles residenciales, no comerciales.
            </Box>

            <Grid container spacing={2} mb={3}>
                {features.map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Paper elevation={0} sx={{ p: 2, height: '100%', borderRadius: 2, backgroundColor: '#fff' }}>
                            <Box display="flex" alignItems="flex-start" gap={2}>
                                <Box mt={0.5}>{item.icon}</Box>
                                <Box>
                                    <Typography fontWeight="bold" mb={1}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 999 }}>
                Cotizar ahora
            </Button>
        </Box>
    );
}
