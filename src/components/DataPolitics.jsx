import React from "react";
import { Container, Typography, Box, Divider, Link } from '@mui/material';

const DataPolitics = () => {
    return (
        <Container maxWidth="md" sx={{ py: 6, mt: 10 }}>
            <Typography variant="h4" gutterBottom>
                Política de Seguridad de Datos
            </Typography>

            {/* 1. Introducción */}
            <Box mt={4}>

                <Typography paragraph>
                    En <strong>BRILLIANTIC S.A.S.</strong>, la protección de los datos de nuestros usuarios, clientes, aliados y colaboradores es una prioridad. Implementamos protocolos de seguridad robustos, tecnologías modernas y procesos responsables para garantizar la confidencialidad, integridad y disponibilidad de la información. Nos regimos por la Ley 1581 de 2012 (Colombia) y otras regulaciones vigentes en materia de protección de datos personales.
                </Typography>
            </Box>

            {/* 2. Tipos de datos */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Tipos de datos que recopilamos
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">Nombre completo, correo electrónico, número de contacto y otros datos de identificación.</Typography>
                    <Typography component="li">Información de navegación o uso de nuestras plataformas (dirección IP, cookies, registros de actividad).</Typography>
                    <Typography component="li">Archivos, formularios o contenidos cargados por los usuarios en nuestros sistemas.</Typography>
                    <Typography component="li">Datos de geolocalización (cuando los servicios lo requieren).</Typography>
                    <Typography component="li">Información técnica del dispositivo o software usado por el usuario.</Typography>
                </Box>
            </Box>

            {/* 3. Finalidad */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Finalidad del uso de los datos
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">Brindar y mantener el servicio contratado o solicitado.</Typography>
                    <Typography component="li">Gestionar el soporte técnico y mejorar la experiencia del usuario.</Typography>
                    <Typography component="li">Realizar análisis estadísticos, operativos y de rendimiento del sistema.</Typography>
                    <Typography component="li">Enviar comunicaciones informativas, notificaciones de seguridad y, si el usuario lo autoriza, contenido promocional o comercial.</Typography>
                </Box>
            </Box>

            {/* 4. Medidas de seguridad */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Medidas de seguridad
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">Autenticación segura y control de accesos por roles.</Typography>
                    <Typography component="li">Bases de datos cifradas y servidores protegidos.</Typography>
                    <Typography component="li">Copias de seguridad automáticas y monitoreo constante.</Typography>
                    <Typography component="li">Políticas de acceso limitado a personal autorizado.</Typography>
                    <Typography component="li">Auditorías internas periódicas y respuesta ante incidentes.</Typography>
                </Box>
            </Box>

            {/* 5. Terceros y proveedores */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Terceros y proveedores
                </Typography>
                <Typography paragraph>
                    En algunos casos, compartimos datos con terceros únicamente bajo condiciones seguras y necesarias para la operación del servicio:
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">Trabajamos con proveedores tecnológicos confiables.</Typography>
                    <Typography component="li">Todos los terceros deben firmar acuerdos de confidencialidad y cumplir con nuestras políticas de seguridad.</Typography>
                    <Typography component="li">Nunca vendemos ni transferimos datos a terceros con fines comerciales.</Typography>
                </Box>
            </Box>

            {/* 6. Derechos de los usuarios */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Derechos de los usuarios
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">Consultar en cualquier momento la información que sobre ellos almacenamos.</Typography>
                    <Typography component="li">Solicitar correcciones, actualizaciones o eliminación de datos inexactos o innecesarios.</Typography>
                    <Typography component="li">Revocar la autorización otorgada para el tratamiento de sus datos.</Typography>
                    <Typography component="li">Presentar reclamos ante la Superintendencia de Industria y Comercio o la autoridad competente.</Typography>
                </Box>
            </Box>

            {/* 7. Cómo ejercer sus derechos */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    ¿Cómo ejercer sus derechos?
                </Typography>
                <Typography paragraph>
                    Para ejercer cualquiera de estos derechos, puedes contactarnos a través de:
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                    <Typography component="li">
                        <strong>Correo electrónico:</strong>{' '}
                        <Link href="mailto:gerencia@brilliantic.com.co">gerencia@brilliantic.com.co</Link>
                    </Typography>
                    <Typography component="li"><strong>Plazo de respuesta:</strong> Hasta 15 días hábiles desde la recepción de la solicitud.</Typography>
                    <Typography component="li"><strong>Requisitos mínimos:</strong> Indicar nombre completo, número de identificación, descripción clara de la solicitud y copia del documento de identidad si aplica.</Typography>
                </Box>
            </Box>

            {/* 8. Cambios en esta política */}
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Cambios en esta política
                </Typography>
                <Typography paragraph>
                    Esta política puede ser modificada en cualquier momento para ajustarse a nuevas disposiciones legales o mejoras en nuestros procesos internos. En caso de cambios relevantes, se notificará a través de nuestro sitio web o por medios electrónicos.
                </Typography>
            </Box>

            {/* 9. Fecha de actualización */}
            <Divider sx={{ my: 4 }} />
            <Typography variant="caption" display="block">
                Última actualización: 28 de julio de 2025
            </Typography>
        </Container>
    );
};

export default DataPolitics;
