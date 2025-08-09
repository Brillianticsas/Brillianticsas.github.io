import React from 'react';
import BrillianticketsCard from './BrillianticketsCard';
import ServicesCarrousel from './ServicesCarrousel';
import ServicesCards from './ServicesCard';
import innovacioimg from '../images/innovacion.png'
import transformacionimg from '../images/transformacion.png'
import planeacionimg from '../images/planeacion.png'
import adopcionimg from '../images/adopcion.png';
import empresarial from '../images/empresarial.png';
import dedicado from '../images/dedicado.png';
import transporte from '../images/transporte.png';
import administracion from '../images/administracion.png'
import camara from '../images/camara.png';
import redeselectricas from '../images/redeselectricas.png';
import fijasymoviles from '../images/fijasymoviles.png';
import aires from '../images/aires.png';
import plantas from '../images/plantas.png';
import ups from '../images/ups.png';
import confidencialidad from '../images/confidencialidad.png';
import normativa from '../images/normativa.png';
import reputacion from '../images/reputacion.png';
import ataque from '../images/ataque.png';
import control from '../images/control.png';
import perimetro from '../images/perimetro.png';
import continuidad from '../images/continuidad.png';
import desrrollo from '../images/desarrollo.png';
import saas from '../images/saas.png';
import auto from '../images/auto.png';
import crm from '../images/crm.png';
import ip from '../images/ip.png';
import message from '../images/message.png';
import form from '../images/form.png';
import incidente from '../images/incidente.png';
import profesional from '../images/profesional.png';
import vision from '../images/vision.png';
import tecno from '../images/tecno.png';
import plata from '../images/plata.png';



const consultoriaData = {
    title: 'CONSULTORIA Y FORMACIÓN PARA EL ÉXITO EMPRESARIAL',
    description: 'Impulsamos la competitividad de su empresa con innovación digital, transformación tecnológica y planeación estratégica en TI.\nImplementamos estándares internacionales que garantizan calidad, seguridad y eficiencia en sus procesos, asegurando una gestión alineada con sus objetivos de negocio y respaldada por tecnología de vanguardia.',
    items: [
        {
            name: 'Innvovación Digital',
            description: 'Definimos una visión clara y alineada con los objetivos estratégicos de la empresas, ayudando a identificar oportunidades clave para mejorar procesos, productos y servicios a través de la tecnología',
            image: innovacioimg
        },
        {
            name: 'Transformación Digital',
            description: 'acompañamos y guiamos los procesos que permitan diferenciación en el mercado, y competitividad, adoptando tecnología de vanguardia.',
            image: transformacionimg
        },
        {
            name: 'Planeación Estratégica en Tecnologías de la Información',
            description: 'Sincronice sus objetivos de negocio con sus capacidades tecnológicas para maximizar los recursos alineados estratégicamente bajo actividades evaluadas dentro de un entorno tecnológico.',
            image: planeacionimg
        },
        {
            name: 'Adopción de Estándares Internacionales ',
            description: 'Sincronice sus objetivos de negocio con sus capacidades tecnológicas para maximizar los recursos alineados estratégicamente bajo actividades evaluadas dentro de un entorno tecnológico.',
            image: adopcionimg
        }
    ]
};

const conectividadData = {
    title: 'CONECTIVIDAD',
    description: "Instalamos Internet Dedicado para máxima estabilidad, con segmentación de redes WiFi, adecuación de cableado estructurado en rack y suministro de switches administrables homologados. \nOptimice la seguridad, el rendimiento y la gestión de su red con nuestro servicio especializado.",
    items: [
        {
            name: 'Internet Empresarial',
            description: 'Servicios de conectividad a nivel nacional en servicios banda ancha con reuso en fibra óptica y redes microondas de respaldo según las necesidades del cliente.',
            image: empresarial
        },
        {
            name: 'Internet Dedicado',
            description: 'Conectividad en fibra óptica sin reuso y con simetría en alta velocidad y excelente experiencia de navegación',
            image: dedicado
        },
        {
            name: 'Transporte de datos',
            description: 'Navegue bajo su propia intranet desde cualqier parte del país y asegure una perfecta transmisión de datos en servicios simétricos en fibra óptica en capas 2 y 3.',
            image: transporte
        },
        {
            name: 'Administración de Redes Satelitales y Fijas',
            description: 'Realice la integración de las distintas redes bajo un único modelo de conectividad administrada para gestionar operación consumo y soporte con nosotros.',
            image: administracion
        }
    ]
}

const infraestructuraData = {
    title: 'INFRAESTRUCTURA FÍSICA Y OPERATIVA',
    description: 'Brindamos servicios especializados en redes eléctricas (baja, media y alta tensión), plantas eléctricas con mantenimiento preventivo, predictivo y correctivo, y sistemas UPS con suministro y soporte especializado.\nTambién ofrecemos instalación y mantenimiento de sistemas de enfriamiento y aires acondicionados, soluciones de CCTV y seguridad electrónica (cámaras, grabadores, switches, etc.), cableado estructurado, interventoría técnica y operación, así como mantenimiento de infraestructura crítica. \nNuestro equipo garantiza calidad, seguridad y continuidad operativa en cada proyecto, adaptándonos a las necesidades de su empresa.',
    items: [
        {
            name: 'Seguridad Eléctronica',
            description: 'Diseño, instalación y mantenimiento predictivo, preventivo y correctivo de cámaras de seguridad, grabadores, switches entre otros, con base a normas y protocolos de calidad establecidos por los fabricantes; Asi mismo contamos con centros de servicio aliados para mantenimiento correctivo de equipos electrónicos.',
            image: camara
        },
        {
            name: 'Redes Eléctricas',
            description: 'Diseño, instalación y mantenimiento predictivo, preventivo y correctivo de plantas eléctricas, UPS, circuitos eléctricos y redes de protección, de baja, media y alta tensión con personal altamante calificado.',
            image: redeselectricas
        },
        {
            name: 'Redes Fijas y Móviles',
            description: 'Suministramos y administramos sistemas de conectividad inalámbrica para optimizar el uso de la red según las necesidades del cliente, zonas Wifi-portal cautivo, redes satelitales, acces point entre otros.',
            image: fijasymoviles
        },
        {
            name: 'Sistemas de enfriamiento',
            description: 'Mantenimiento preventivo, predictivo y correctivo de sistemas de aires acondicionados con reportes personalizados y seguimiento de acuerdo a marcos normativos.',
            image: aires
        },

        {
            name: 'Plantas Eléctricas',
            description: 'Ofrecemos servicio integral de mantenimiento de plantas eléctricas. Equipo técnico altamente capacitado realiza inspecciones preventivas, pruebas de carga, limpieza de componentes, verificación de sistemas de arranque y control, así como el cambio de aceites y filtros según las especificaciones del fabricante.',
            image: plantas
        },
        {
            name: 'UPS',
            description: 'Brindamos un servicio especializado de mantenimiento para sistemas UPS. Nuestro mantenimiento incluye la revisión detallada de baterías, ventiladores, conexiones eléctricas, tarjetas electrónicas y sistemas de monitoreo, así como pruebas de respaldo y carga.',
            image: ups
        }
    ]



}
const seguridadData = {
    title: 'SEGURIDAD DE LA INFORMACIÓN',
    description: 'Ofrecemos soluciones integrales para proteger la información de su organización, asegurando su confidencialidad, integridad y disponibilidad. Cumplimos con normativas legales, prevenimos ciberataques y filtraciones de datos, y protegemos la reputación organizacional. Implementamos medidas para garantizar la continuidad del negocio, seguridad perimetral y el uso de herramientas y políticas de control adaptadas a las necesidades de cada cliente.',
    items: [
        {
            name: 'Confidencialidad, Integridad y Disponibilidad',
            description: 'Garantizamos que la información esté protegida contra accesos no autorizados, modificaciones indebidas y que siempre esté disponible para los usuarios autorizados.',
            image: confidencialidad
        },
        {
            name: 'Cumplimiento de Normativas Legales',
            description: 'Aseguramos que todos los procesos de gestión de información cumplan con las leyes y regulaciones aplicables, evitando sanciones y riesgos legales.',
            image: normativa,
        },
        {
            name: 'Protección de Reputación Organizacional',
            image: reputacion,
            description: 'Implementamos medidas proactivas para prevenir incidentes que puedan afectar la imagen y credibilidad de su empresa.',
        },
        {
            name: 'Prevención de Ciberataques y Filtraciones',
            image: ataque,
            description: 'Desplegamos soluciones avanzadas para identificar, prevenir y mitigar amenazas cibernéticas y fugas de información.',
        },
        {
            name: 'Continuidad del Negocio',
            image: continuidad,
            description: 'Diseñamos e implementamos planes de continuidad para que las operaciones críticas se mantengan ante cualquier eventualidad.',
        },
        {
            name: 'Seguridad Perimetral',
            image: perimetro,
            description: 'Protegemos la red corporativa mediante firewalls, sistemas de detección y prevención de intrusiones, y monitoreo constante.',
        },
        {
            name: 'Herramientas y Políticas de Control',
            image: control,
            description: 'Desarrollamos e implementamos políticas de seguridad y herramientas de monitoreo para una gestión segura y eficiente de la información.',
        }
    ]
}

const softwareData = {
    title: 'SOFTWARE',
    description: 'Desarrollamos soluciones de software innovadoras adaptadas a las necesidades de cada cliente, incluyendo desarrollo a la medida, servicios SaaS, automatización de procesos, CRM, sistemas IP PBX, plataformas de mensajería masiva, formularios web y herramientas de gestión de eventos y actividades.',
    items: [
        {
            name: 'Desarrollo de software a la medida',
            image: desrrollo,
            description: 'Creamos soluciones de software personalizadas que se adaptan a los procesos, objetivos y necesidades específicas de su organización.',

        },
        {
            name: 'SaaS (Software como servicio)',
            image: saas,
            description: 'Ofrecemos aplicaciones accesibles desde la nube con disponibilidad 24/7, sin necesidad de instalación local y con escalabilidad garantizada.',
        },
        {
            name: 'Automatización de procesos',
            image: auto,
            description: 'Diseñamos sistemas que optimizan y agilizan tareas repetitivas, reduciendo costos operativos y aumentando la eficiencia.',
        },
        {
            name: 'CRM empresarial',
            image: crm,
            description: 'Implementamos plataformas CRM para gestionar de forma integral las relaciones con clientes y oportunidades de negocio.',
        },
        {
            name: 'Plataformas IP PBX',
            image: ip,
            description: 'Ofrecemos soluciones de telefonía IP para mejorar la comunicación interna y externa de su empresa con flexibilidad y escalabilidad.',
        },
        {
            name: 'Plataformas de mensajería masiva',
            image: message,
            description: 'Sistemas que permiten el envío automatizado y segmentado de mensajes a gran escala a través de múltiples canales.',
        },
        {
            name: 'Formularios web',
            image: form,
            description: 'Creamos formularios en línea personalizados para capturar, procesar y analizar datos de manera eficiente.',
        },
        {
            name: 'Plataformas de gestión de eventos y actividades',
            image: incidente,
            description: 'Soluciones para la planificación, seguimiento y control de eventos y actividades corporativas.',
        }
    ]
};
const brillianticketsData = {
    title: 'BRILLIANTICKETS',
    description: 'Descubre como a través de herramientas a la medida podemos potenciar la toma de decisiones para incrementar la efectividad de tu equipo de trabajo, ofrecemos una solución integral diseñada para la gestión eficiente de eventos y actividades, que permite a las empresas optimizar sus procesos, mejorar la experiencia del usuario y maximizar el retorno de inversión.',
    items: [
        {
            name: 'Ingenieros Especializados',
            image: profesional,
            description: 'Nuestro equipo de ingenieros especializados está dedicado a brindar soluciones tecnológicas personalizadas que se adaptan a las necesidades específicas de cada cliente.'


        },
        {
            name: 'Análisis de Comportamientos',
            image: vision,
            description: 'Utilizamos herramientas avanzadas para analizar el comportamiento de los usuarios, lo que nos permite ofrecer una visión 360 de las interacciones y mejorar continuamente la experiencia del cliente.'

        },
        {
            name: 'Tecnología a la Medida',
            image: tecno,
            description: 'Desarrollamos soluciones tecnológicas personalizadas que se adaptan a las necesidades específicas de cada cliente, garantizando una integración perfecta con sus procesos existentes.'
        },
        {
            name: 'Plataforma Automatizada',
            image: plata,
            description: 'Nuestra plataforma automatizada permite una gestión eficiente de eventos, facilitando la planificación, seguimiento y control de actividades en tiempo real.'
        }
    ]
};






const Services = () => {
    return (
        <div style={{ padding: '4rem' }}>
            <ServicesCarrousel />
            <div id="consultoria">
                <ServicesCards
                    id="consultoria"
                    title={consultoriaData.title}
                    description={consultoriaData.description}
                    items={consultoriaData.items}
                    carouselPosition="right"
                />
            </div>
            <div id="infraestructura">
                <ServicesCards

                    title={infraestructuraData.title}
                    description={infraestructuraData.description}
                    items={infraestructuraData.items}
                    carouselPosition="left"
                />

            </div>
            <div id="conectividad">
                <ServicesCards

                    title={conectividadData.title}
                    description={conectividadData.description}
                    items={conectividadData.items}
                />

            </div>
            <div id="seguridad">
                <ServicesCards

                    title={seguridadData.title}
                    description={seguridadData.description}
                    items={seguridadData.items}
                    carouselPosition="left"
                />

            </div>
            <div id="software">
                <ServicesCards

                    title={softwareData.title}
                    description={softwareData.description}
                    items={softwareData.items}
                />

            </div>
            <div id="brilliantickets">
                <ServicesCards

                    title={brillianticketsData.title}
                    description={brillianticketsData.description}
                    items={brillianticketsData.items}
                    carouselPosition="left"
                />

            </div>


        </div>
    );
};

export default Services;
