import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Fade,
    Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import consultoria from '../images/integral.jpeg';
import infraestructura from '../images/iot.jpg';
import internet from '../images/conectividad.jpg';
import seguridad from '../images/seguridad.jpg';
import software from '../images/software.jpg';
import brilliantickets from '../images/helpdesk.jpg';

const servicios = [
    { titulo: 'CONSULTORÍA INTEGRAL EN TI', descripcion: `- Innovación digital\n- Transformación digital\n- Planeación estratégica en Tecnologías de la Información\n- Adopción de estándares internacionales\n- Gestión de la innovación\n- Formación y acompañamiento\n- Estandarización de calidad y seguridad\n- Sincronización de objetivos de negocio con capacidades tecnológicas\n- Consultoría en seguridad de la información`, imagen: consultoria },
    { titulo: 'INFRAESTRUCTURA FÍSICA Y OPERATIVA', descripcion: `- Redes eléctricas (baja, media y alta tensión)\n- Plantas eléctricas (mantenimiento preventivo, predictivo y correctivo)\n- Sistemas UPS (suministro y mantenimiento especializado)\n- Sistemas de enfriamiento / aires acondicionados\n- CCTV (seguridad electrónica: cámaras, grabadores, switches, etc.)\n- Cableado estructurado\n- Interventoría técnica y operación\n- Mantenimiento de infraestructura crítica`, imagen: infraestructura },
    { titulo: 'CONECTIVIDAD', descripcion: `- Internet empresarial (banda ancha con reúso + microondas de respaldo)\n- Internet dedicado (fibra sin reúso, simétrico, alta velocidad)\n- Transporte de datos (fibra óptica, capa 2 y 3, intranet nacional)\n- Red MPLS\n- Redes satelitales\n- Administración de redes satelitales y fijas\n- Gestión centralizada de conectividad`, imagen: internet },
    { titulo: 'SEGURIDAD DE LA INFORMACIÓN', descripcion: `- Confidencialidad, integridad y disponibilidad de la información\n- Cumplimiento de normativas legales\n- Protección de reputación organizacional\n- Prevención de ciberataques y filtraciones de datos\n- Aseguramiento de continuidad del negocio\n- Seguridad perimetral\n- Herramientas y políticas de control`, imagen: seguridad },
    { titulo: 'SOFTWARE', descripcion: `- Desarrollo de software a la medida\n- SaaS (Software como servicio)\n- Automatización de procesos\n- CRM empresarial\n- Plataformas IP PBX\n- Plataformas de mensajería masiva\n- Formularios web\n- Cluster Brilliantickets\n- Plataformas de gestión de eventos y actividades\n- Análisis de comportamiento y visión 360`, imagen: software },
    { titulo: 'MESA DE AYUDA Y GESTIÓN DE SERVICIOS (ITSM)', descripcion: `- Plataforma Brilliantickets\n- Gestión de solicitudes e incidencias\n- Modelo de soporte en múltiples niveles (hasta Nivel 2)\n- Atención a clientes internos y externos\n- Gestión de servicios para ISP y empresas\n- Seguimiento de KPI e informes personalizados\n- Clasificación de niveles de gestión técnica\n- Acompañamiento por zonas/departamentos\n- Atención remota y presencial\n- Alta capacidad operativa (más de 1.000 usuarios gestionados)`, imagen: brilliantickets }
];

const StyledAccordion = styled(Accordion)(({ theme, expanded }) => ({
    backgroundColor: '#fff',
    borderLeft: `4px solid ${expanded ? '#53188aff' : 'transparent'}`,
    boxShadow: expanded ? theme.shadows[2] : 'none',
    transition: 'all 0.3s ease-in-out',
    borderRadius: 8,
    '&:hover': { boxShadow: theme.shadows[3] },
    '&:before': { display: 'none' },
    marginBottom: theme.spacing(1)
}));

export default function TecnologiesInformation() {
    const [activo, setActivo] = useState(0);

    return (

        < Container id="acordeon" maxWidth="lg" sx={{ py: 6 }
        }>
            <Typography
                variant="h2"
                align="center"
                sx={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#37065f',
                    mb: 2
                }}
            >
                SOLUCIONES QUE TRANSFORMAN
            </Typography>

            <Typography
                variant="body1"
                align="center"
                sx={{
                    color: 'text.secondary',
                    mb: 5,
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6
                }}
            >
                Descubre cómo nuestros servicios pueden transformar tu día a día.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                {/* Acordeones 60% */}
                <Box sx={{ width: { xs: '100%', md: '60%' } }}>
                    {servicios.map((item, index) => (
                        <StyledAccordion
                            key={index}
                            expanded={activo === index}
                            onChange={() => setActivo(index)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#37065f' }}>
                                    {item.titulo}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" sx={{ fontSize: "15px", whiteSpace: 'pre-line', color: 'text.secondary' }}>
                                    {item.descripcion}
                                </Typography>
                            </AccordionDetails>
                        </StyledAccordion>
                    ))}
                </Box>

                {/* Imagen 40% */}
                <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                    <Fade in key={activo} timeout={300}>
                        <Paper
                            elevation={3}
                            sx={{
                                borderRadius: 4,
                                height: 400,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f9f9f9'
                            }}
                        >
                            <img
                                src={servicios[activo].imagen}
                                alt={servicios[activo].titulo}
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </Paper>
                    </Fade>
                </Box>
            </Box>
        </Container >
    );
}
