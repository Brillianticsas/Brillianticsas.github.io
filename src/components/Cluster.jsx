import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
    Link
} from '@mui/material';
import WebIcon from '@mui/icons-material/Language';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Cluster = () => {

    return (
        <Box sx={{ px: { xs: 3, md: 8 }, py: 6 }}>
            <Grid container spacing={6} alignItems="flex-start">
                {/* IZQUIERDA */}
                <Grid item xs={12} md={5}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        PLATAFORMA<br />DE SOLUCIONES
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        "La conectividad e infraestructura son  elementos en una autopista dinámica,<br />
                        que se orquestan entre varios actores, todos en sincronía, que garantizan<br />
                        una correcta y segura fluidez de la información y los servicios".
                    </Typography>

                    <Box mb={2}>
                        <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            📦 INVENTORIA <br />
                            🛠️ MANTENIMIENTO <br />
                            ⚙️ OPERACIÓN <br />
                            🎨 DISEÑO


                        </Typography>

                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{ borderRadius: '30px', backgroundColor: '#5A46FF' }}
                    >
                        Conoce más                    </Button>
                </Grid>

                {/* DERECHA */}
                <Grid item xs={12} md={7}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: 6,
                                }}
                            >
                                <CardContent>
                                    <WebIcon color="primary" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Web Design
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        One for all and all for one,<br />
                                        Muskehounds are always ready.
                                    </Typography>
                                    <Link href="#" underline="none" color="primary" fontWeight="bold">
                                        Learn more
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <LightbulbIcon color="warning" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Ad-Creatives
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Alphabet Village and the subline<br />of her own road.
                                    </Typography>
                                    <Link href="#" underline="none" color="primary" fontWeight="bold">
                                        Learn more
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <SettingsIcon color="error" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Automation
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Little Blind Text should turn<br />around and return.
                                    </Typography>
                                    <Link href="#" underline="none" color="primary" fontWeight="bold">
                                        Learn more
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Infographics
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Nothing the copy said could convince her.
                                    </Typography>
                                    <Link href="#" underline="none" color="primary" fontWeight="bold">
                                        Learn more
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Cluster;
