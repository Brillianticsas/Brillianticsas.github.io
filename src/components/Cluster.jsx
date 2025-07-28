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
import LanguageIcon from '@mui/icons-material/Language';
import DnsIcon from '@mui/icons-material/Dns';
import SecurityIcon from '@mui/icons-material/Security';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WifiIcon from '@mui/icons-material/Wifi';
import SensorsIcon from '@mui/icons-material/Sensors';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


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


                </Grid>

                {/* DERECHA */}
                <Grid item xs={12} md={7}>
                    <Grid container spacing={3}>
                        {/* Tarjeta 1 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 6 }}>
                                <CardContent>
                                    <WebIcon color="primary" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Redes Administrativas
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        One for all and all for one,<br />
                                        Muskehounds are always ready.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 2 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <LightbulbIcon color="warning" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Centro de Datos
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Alphabet Village and the subline<br />of her own road.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 3 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <SettingsIcon color="error" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Seguridad Electrónica
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Little Blind Text should turn<br />around and return.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 4 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Redes Eléctricas
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Nothing the copy said could convince her.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 5 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        WIFI
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Nothing the copy said could convince her.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 6 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Videovigilancia
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        She had been warned, but it was too late.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 7 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Cableado Estructurado
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        Far far away, behind the word mountains.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Tarjeta 8 */}
                        <Grid item xs={12} sm={3}>
                            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
                                    <AccessTimeIcon color="info" fontSize="large" />
                                    <Typography variant="h6" fontWeight="bold" mt={1}>
                                        Monitoreo Remoto
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={1}>
                                        She packed her seven versalia.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Box >
    );
};

export default Cluster;
