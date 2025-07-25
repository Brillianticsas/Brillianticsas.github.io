import React from "react";
import { Container, Typography, Box } from "@mui/material";

const DataPolitics = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 12, py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Política de Tratamiento de Datos
            </Typography>
            <Box>
                <Typography paragraph>
                    Aquí irá el contenido de nuestras políticas de datos...
                </Typography>
            </Box>
        </Container>
    );
};

export default DataPolitics;
