# INSTRUCCIONES PARA EL AGENTE — REDISEÑO WEB BRILLIANTIC S.A.S.

## 1. Objetivo del proyecto

Rediseñar la página web de Brilliantic S.A.S. tomando como referencia:

- Página actual: https://brilliantic.com.co
- Documento de requerimientos: DICE-06.
- Proyecto React existente y sus recursos gráficos.
- Paleta cromática extraída de la página actual y tokens de diseño establecidos en DICE-06.

No se busca simplemente modernizar la página ni cambiar sus colores. El objetivo es construir una experiencia corporativa que permita comprender visualmente:

1. Qué es Brilliantic y cuál es su propuesta de valor.
2. Qué productos tecnológicos desarrolla.
3. Qué servicios de ingeniería e infraestructura ofrece.
4. Cómo funciona su modelo de conectividad SPOC.
5. Qué experiencia y respaldo tiene la empresa.
6. Cómo puede un cliente contratar o solicitar información.

**Concepto central:** Brilliantic es un integrador tecnológico que combina desarrollo de software propio, inteligencia artificial, automatización comercial, infraestructura tecnológica y conectividad nacional.

El resultado debe transmitir una empresa tecnológica B2B consolidada, con capacidad de ingeniería, dirección de proyectos y soluciones propias.

## 2. Arquitectura general de la página

La página estará organizada en nueve componentes principales, con componentes internos reutilizables.

```text
App
│
├── Navbar
│
├── Main
│   │
│   ├── 01. HeroSection
│   │
│   ├── 02. MetricsBar
│   │
│   ├── 03. ProblemSection
│   │
│   ├── 04. ProprietaryEcosystem
│   │
│   ├── 05. BusinessUnits
│   │
│   ├── 06. SpocNationalModel
│   │
│   ├── 07. CaseStudiesSection
│   │
│   └── 08. LeadershipSection
│
├── FooterConversion
│
└── FloatingWhatsApp
```

La numeración anterior organiza el contenido visual. Se mantienen las nueve secciones originales del DICE-06, separando los casos de éxito y el respaldo directivo para darles mayor claridad.

---

# 3. ESPECIFICACIÓN DE CADA COMPONENTE

## COMPONENTE 01 — Navbar

**Objetivo:** Facilitar la navegación y mantener visible una acción de contacto.

### Estructura visual

- Logo oficial Brilliantic a la izquierda.
- Menú de navegación en el centro.
- Botón de conversión a la derecha.

### Opciones de navegación

- Soluciones IA & SaaS.
- Unidades de Ingeniería.
- Modelo SPOC.
- Casos de Éxito.
- Nosotros.

### Botón principal

`Agendar diagnóstico`

Enlace al WhatsApp general.

### Comportamiento

- Barra fija o sticky.
- Fondo oscuro con transparencia moderada.
- Efecto de desenfoque al desplazarse.
- Scroll suave al seleccionar una sección.
- Menú hamburguesa funcional en dispositivos móviles.
- Cierre automático del menú móvil al seleccionar una opción.

El menú debe ser compacto. No agregar submenús innecesarios.

---

## COMPONENTE 02 — HeroSection

**Objetivo:** Explicar qué hace Brilliantic en los primeros segundos y permitir que el visitante identifique su necesidad.

### Distribución

Diseño de dos columnas en escritorio.

**Columna izquierda: contenido comercial**

Badge superior:

INGENIERÍA DE INTEGRACIÓN · INTELIGENCIA ARTIFICIAL · INFRAESTRUCTURA CRÍTICA

Título:

Convertimos la tecnología en un activo de continuidad operativa y aceleración de ingresos.

Descripción:

Diseñamos, integramos y operamos soluciones tecnológicas que conectan la infraestructura empresarial con la automatización comercial y la inteligencia artificial.

Botones:

1. Automatizar ventas con IA y KLARI CRM.
2. Conectividad SPOC e infraestructura TI.

**Columna derecha: visualización del ecosistema**

No utilizar una fotografía genérica de personas frente a computadores.

Crear una composición visual propia mediante tarjetas, diagramas y conexiones.

Dividir el elemento visual en dos bloques:

**Bloque A — Ecosistema comercial**

Mostrar el flujo:

Meta Ads → Connectmsg → KLERK IA → KLARI CRM → K-lender.

Cada elemento debe tener:
- Nombre.
- Icono.
- Función resumida.

**Bloque B — Infraestructura nacional**

Representar:
- Conectividad.
- Infraestructura física.
- Servicios Cloud.
- Soporte técnico.
- Gestión centralizada SPOC.

Mostrar las cifras de cobertura de la empresa únicamente cuando estén verificadas.

Los dos bloques deben conectarse visualmente mediante un elemento central que represente a Brilliantic como integrador tecnológico.

---

## COMPONENTE 03 — MetricsBar

**Objetivo:** Mostrar indicadores que generen confianza antes de presentar los servicios.

### Diseño

Franja horizontal de cuatro columnas.

Cada columna contiene:
- Cifra principal grande.
- Descripción breve.
- Icono pequeño opcional.

### Indicadores

| Indicador | Descripción |
|---|---|
| 32 sedes | Gestión de infraestructura distribuida. |
| 16 departamentos | Cobertura nacional. |
| SLA inferior a 2 horas | Capacidad de atención y soporte. |
| MGIP · GIMI · PMI | Metodologías y respaldo en gestión de proyectos. |

Usar JetBrains Mono para las cifras.

No utilizar animaciones exageradas de contadores. La información debe ser legible y transmitir autoridad.

Importante: confirmar las cifras, su alcance y la definición del SLA antes de publicarlas.

---

## COMPONENTE 04 — ProblemSection

**Objetivo:** Hacer que los visitantes comprendan los problemas que Brilliantic puede resolver.

### Encabezado

Badge:

DIAGNÓSTICO OPERATIVO Y COMERCIAL

Título:

¿Su tecnología impulsa su crecimiento o frena a su equipo?

Descripción:

Muchas organizaciones utilizan herramientas, proveedores y sistemas que funcionan de manera aislada, generando costos adicionales y dificultades operativas.

### Componentes internos

Crear tres tarjetas horizontales o un grid de tres columnas.

**Tarjeta 1 — Fragmentación comercial**

Icono: embudo o gráfico comercial.

Título:

Pauta digital sin trazabilidad.

Contenido:

La inversión publicitaria genera prospectos, pero la atención tardía, la falta de seguimiento y la ausencia de indicadores dificultan convertirlos en clientes.

Mostrar visualmente:

Publicidad → Prospecto → Atención tardía → Oportunidad perdida.

**Tarjeta 2 — Procesos desconectados**

Icono: integración de sistemas.

Título:

Digitalización sin integración.

Contenido:

Los equipos deben repetir tareas y trasladar información entre sistemas que no se comunican entre sí.

Mostrar visualmente:

CRM + Agendamiento + Facturación, representados como sistemas aislados.

**Tarjeta 3 — Fragmentación de proveedores**

Icono: servidor o red.

Título:

Dependencia de múltiples proveedores tecnológicos.

Contenido:

La administración de conectividad, infraestructura y soporte mediante distintos proveedores dificulta la coordinación y la asignación de responsabilidades.

Mostrar visualmente:

Empresa → Proveedor A / Proveedor B / Proveedor C.

Cerrar la sección con una transición hacia la propuesta de Brilliantic:

**Una arquitectura tecnológica integrada, con un responsable que conecta las soluciones.**

No publicar porcentajes de pérdidas económicas sin estudios o fuentes verificables.

---

## COMPONENTE 05 — ProprietaryEcosystem

ID: `ecosistema-propio`

**Objetivo:** Presentar los productos de software propios de Brilliantic como un ecosistema tecnológico coherente.

Este debe ser uno de los apartados visualmente más importantes de la página.

### Diseño

Fondo oscuro y distribución Bento Grid.

Cuatro tarjetas principales, con una tarjeta destacada de mayor tamaño para KLARI.

Cada tarjeta debe tener una estructura consistente:

1. Logotipo o nombre del producto.
2. Categoría.
3. Descripción de su propósito.
4. Problema que resuelve.
5. Funcionalidades principales.
6. Integraciones o canales.
7. Botón para solicitar información.

### TARJETA 1 — KLARI

Categoría:

CRM / ARM · Inteligencia Comercial.

Título:

KLARI — Inteligencia comercial y gestión de relaciones.

Descripción:

Plataforma diseñada para centralizar la gestión comercial, realizar seguimiento de prospectos y evaluar el rendimiento de las campañas publicitarias.

Funcionalidades que deben representarse:

- Administración de prospectos.
- Seguimiento de oportunidades.
- Gestión de asesores y actividades comerciales.
- Automatización de procesos.
- Tableros de indicadores.
- Análisis del rendimiento de campañas Meta Ads.

Visualización sugerida:

Un panel de control comercial con:
- Gráfico de rendimiento de campañas.
- Indicadores de prospectos.
- Estado de oportunidades.
- Actividades comerciales.

La visualización debe ser una representación gráfica propia, no una captura inventada de una plataforma existente.

### TARJETA 2 — KLERK

Categoría:

Inteligencia Artificial Conversacional.

Título:

KLERK — Agentes inteligentes de atención.

Descripción:

Agentes de inteligencia artificial diseñados para automatizar conversaciones, atender solicitudes y apoyar procesos comerciales y operativos.

Funcionalidades:

- Atención conversacional.
- Integración con WhatsApp.
- Clasificación de solicitudes.
- Calificación de prospectos.
- Interpretación de documentos e imágenes mediante OCR, según las capacidades implementadas.
- Transferencia de conversaciones a operadores humanos.

Visualización sugerida:

Diagrama de conversación:

Cliente → KLERK → Identificación de necesidad → Resolución o transferencia humana.

### TARJETA 3 — K-lender

Categoría:

SaaS · Agendamiento y Gestión Operativa.

Título:

K-lender — Gestión inteligente de agendas y servicios.

Descripción:

Plataforma orientada a la administración de citas, reservas y operaciones de empresas que requieren organizar su atención al público.

Funcionalidades:

- Gestión de agendas.
- Administración de reservas.
- Confirmaciones y recordatorios.
- Catálogo de servicios.
- Gestión de comisiones.
- Indicadores operativos y financieros.

Visualización sugerida:

Una agenda digital acompañada de un resumen de reservas y estados de atención.

### TARJETA 4 — Connectmsg & Brilliantickets

Esta tarjeta contiene dos soluciones relacionadas, pero deben identificarse como productos independientes.

**Connectmsg**

Categoría: Integración y comunicación empresarial.

Descripción:

Conecta soluciones empresariales con la API de WhatsApp Business y permite integrar flujos de comunicación con sistemas como Bitrix24 y KLARI.

Representar:
- WhatsApp Business Platform.
- Integración API.
- Sistemas CRM.
- Automatización de comunicaciones.

**Brilliantickets**

Categoría: HelpDesk y gestión de soporte.

Descripción:

Sistema orientado a centralizar solicitudes de soporte, gestionar incidencias y realizar seguimiento de los servicios tecnológicos.

Representar:
- Creación de tickets.
- Asignación de responsables.
- Seguimiento de incidencias.
- Estados de atención.
- Indicadores y trazabilidad de SLA.

### CTA de la sección

`Solicitar demostración de nuestras soluciones`

Destino: WhatsApp comercial.

### Reglas importantes

No presentar Connectmsg y Brilliantickets como si fueran módulos del mismo producto si comercialmente son soluciones independientes.

No inventar características, pantallas, integraciones ni indicadores. Confirmar su disponibilidad con el producto real.

---

## COMPONENTE 06 — BusinessUnits

ID: `unidades-negocio`

**Objetivo:** Mostrar las capacidades de ingeniería y servicios que Brilliantic puede ofrecer a organizaciones y empresas.

Este componente no debe repetir la sección de productos.

La diferencia debe ser clara:

- Ecosistema propio: productos que desarrolla Brilliantic.
- Unidades de ingeniería: servicios y proyectos que Brilliantic implementa para sus clientes.

### Encabezado

Badge:

CAPACIDAD INSTALADA E INTEGRACIÓN B2B

Título:

Soluciones tecnológicas desde la infraestructura física hasta la inteligencia artificial.

### Diseño

Cuatro tarjetas de servicios.

Cada tarjeta debe contener:
- Número identificador.
- Icono representativo.
- Nombre de la unidad.
- Descripción.
- Servicios incluidos.
- Entregables o resultados esperados.
- Botón de consulta opcional.

### UNIDAD 01 — Automatización Comercial, RevOps y CRM

Servicios:
- Implementación de KLARI CRM.
- Implementación de Bitrix24.
- Integración de Connectmsg.
- Implementación de agentes KLERK.
- Automatización de procesos comerciales.
- Integración con campañas Meta Ads.

Resultado esperado:

Centralizar la gestión comercial, mejorar el seguimiento de prospectos y facilitar la medición del rendimiento.

### UNIDAD 02 — Desarrollo de Software y Arquitectura Cloud

Servicios:
- Desarrollo de software a medida.
- Plataformas SaaS.
- Arquitecturas de integración.
- APIs y servicios web.
- Arquitectura Cloud.
- Despliegues en AWS y Oracle Cloud.
- Automatización CI/CD.
- Infraestructura como código con Terraform.

Resultado esperado:

Sistemas escalables, integrables y adaptados a las necesidades de cada organización.

### UNIDAD 03 — Conectividad Nacional SPOC y Soporte TI

Servicios:
- Internet dedicado.
- Fibra óptica.
- Enlaces MPLS.
- Telecomunicaciones rurales.
- Gestión de operadores.
- Mesa de ayuda.
- Monitoreo NOC.
- Soporte técnico en sedes.

Resultado esperado:

Administración centralizada de la conectividad y los servicios tecnológicos distribuidos.

### UNIDAD 04 — Infraestructura Física y Consultoría TI

Servicios:
- Cableado estructurado Cat 6/6A.
- Instalación y fusión de fibra óptica.
- Redes eléctricas reguladas.
- Infraestructura bajo RETIE.
- CCTV IP.
- Control de acceso y biometría.
- Climatización de infraestructura tecnológica.
- Gerencia e interventoría de proyectos TI.

Resultado esperado:

Infraestructura física y tecnológica diseñada, implementada y documentada.

### Visualización complementaria

Se puede utilizar una pequeña ilustración técnica o diagrama por tarjeta.

No utilizar fotografías genéricas repetidas. Priorizar fotografías reales de instalaciones, redes, infraestructura y proyectos de Brilliantic cuando estén disponibles.

---

## COMPONENTE 07 — SpocNationalModel

ID: `modelo-spoc`

**Objetivo:** Explicar visualmente qué significa SPOC y por qué representa una ventaja para organizaciones con múltiples sedes.

Esta sección debe tener un diseño destacado, diferente de las tarjetas convencionales.

### Encabezado

Badge:

SINGLE POINT OF CONTACT · SPOC 360°

Título:

Un solo contrato. Una sola factura. Un único responsable técnico.

Descripción:

Brilliantic centraliza la administración de conectividad, proveedores y soporte tecnológico mediante un modelo de gestión unificada.

### Componente visual principal: arquitectura SPOC

Crear un diagrama de arquitectura con los siguientes niveles:

**Nivel 1 — Cliente corporativo**

Representar una organización con múltiples sedes.

Ejemplo:
- Sede principal.
- Sede regional.
- Sede remota.
- Sede rural.

**Nivel 2 — Brilliantic como integrador SPOC**

Un bloque central que representa:
- Gestión de proveedores.
- Coordinación de servicios.
- Supervisión técnica.
- Administración contractual.
- Seguimiento de incidencias.

**Nivel 3 — Ecosistema de proveedores y especialistas**

Representar operadores de conectividad, proveedores de infraestructura y equipos especializados.

No inventar nombres de operadores. Utilizar categorías de proveedores.

**Flujo de comunicación:**

Sedes del cliente → Brilliantic SPOC → Proveedores y equipos técnicos.

### Componente secundario: niveles de soporte

Crear tres tarjetas conectadas visualmente.

**NIVEL 01 — Mesa de Ayuda**

Herramienta asociada: Brilliantickets.

Funciones:
- Recepción de solicitudes.
- Creación de tickets.
- Clasificación de incidencias.
- Asignación de responsables.
- Seguimiento de atención.

**NIVEL 02 — NOC**

Funciones:
- Monitoreo de conectividad.
- Supervisión de enlaces.
- Identificación de anomalías.
- Coordinación de soporte.
- Seguimiento de disponibilidad.

**NIVEL 03 — Ingeniería Especialista**

Funciones:
- Diagnóstico especializado.
- Intervención de infraestructura.
- Arquitectura de redes.
- Ingeniería Cloud.
- Desarrollo e integración de software.
- Resolución de problemas complejos.

### Componente adicional: indicadores SPOC

Mostrar:
- Número de sedes gestionadas.
- Cobertura geográfica.
- Número de operadores aliados.
- Tiempo de respuesta de soporte, cuando esté validado.

### CTA

`Cotizar conectividad SPOC o infraestructura TI`

Destino: WhatsApp de infraestructura.

---

## COMPONENTE 08 — CaseStudiesSection

ID: `casos-exito`

**Objetivo:** Demostrar que Brilliantic tiene capacidad de ejecución mediante proyectos y experiencias reales.

### Diseño

Tres tarjetas ejecutivas de casos de éxito.

Cada tarjeta deberá seguir la misma estructura:

1. Sector económico.
2. Contexto del proyecto.
3. Problema o reto.
4. Solución implementada.
5. Tecnologías involucradas.
6. Resultados comprobados.

### CASO 01 — Sector Salud

Título:

Automatización e integración de procesos de atención en salud.

Reto:

La gestión de prospectos, la atención por canales digitales y el agendamiento requieren coordinación entre diferentes herramientas.

Solución:

Integración de Meta Ads, Connectmsg, KLERK, KLARI y K-lender.

Visualización:

Flujo desde la captación de pacientes hasta el seguimiento y agendamiento.

### CASO 02 — Sector Financiero y Redes Transaccionales

Título:

Gestión centralizada de conectividad nacional.

Reto:

Administrar infraestructura y servicios de conectividad distribuidos en diferentes municipios.

Solución:

Modelo SPOC con coordinación de operadores, monitoreo NOC y soporte especializado.

Visualización:

Mapa esquemático de Colombia con puntos de cobertura.

Utilizar ubicaciones reales únicamente cuando exista autorización para publicarlas.

### CASO 03 — Hidrocarburos, Energía e Industria

Título:

Ingeniería de infraestructura tecnológica empresarial.

Reto:

Implementar redes e infraestructura tecnológica bajo requerimientos técnicos específicos.

Solución:

Diseño e implementación de redes LAN/WLAN, cableado estructurado, fibra óptica e infraestructura eléctrica.

Visualización:

Fotografías técnicas reales de instalaciones o diagramas de arquitectura.

### Regla editorial

Cuando los proyectos estén sujetos a acuerdos de confidencialidad:

- No publicar el nombre del cliente.
- No publicar fotografías no autorizadas.
- No revelar información operativa sensible.
- Presentar el caso de manera anonimizada.

Los resultados numéricos solo pueden publicarse cuando estén documentados y autorizados.

---

## COMPONENTE 09 — LeadershipSection

ID: `respaldo`

**Objetivo:** Presentar la experiencia directiva y el respaldo profesional que sustentan la capacidad de ejecución de Brilliantic.

No convertir esta sección en una biografía extensa.

### Encabezado

Badge:

LIDERAZGO · EXPERIENCIA · GERENCIA DE PROYECTOS

Título:

Dirección estratégica respaldada por experiencia técnica y gerencial.

### Composición visual

Dividir en dos columnas.

**Columna izquierda — Trayectoria ejecutiva**

Mostrar:
- Fotografía profesional del directivo, si está autorizada.
- Nombre y cargo.
- Experiencia profesional.
- Trayectoria en dirección de equipos.
- Experiencia en transformación digital.
- Gerencia integral de proyectos.

Incluir un resumen ejecutivo de máximo dos párrafos.

**Columna derecha — Formación y credenciales**

Crear una cuadrícula de credenciales o tarjetas pequeñas:

- MGIP — Gerencia Integral de Proyectos.
- GIMI — Global Innovation Management Institute.
- University of Virginia — Formación en Transformación Digital.
- Universidad de los Andes — Marketing Digital e Inteligencia Artificial.
- Scrum Master.
- OKR Master.
- COPNIA, cuando corresponda a una matrícula vigente y verificable.

Cada elemento debe incluir institución, nombre de la formación o certificación y descripción breve.

### Cintillo de tecnologías

Mostrar de forma ordenada:

AWS · Oracle Cloud · Terraform · Meta Business · Bitrix24 · React · Python · RETIE.

Separar tecnologías y plataformas de certificaciones profesionales.

No presentar un logotipo tecnológico como prueba de alianza comercial o certificación oficial.

---

# 4. COMPONENTE FINAL — FooterConversion

**Objetivo:** Convertir el interés generado durante la navegación en una conversación comercial.

### Diseño

Fondo oscuro, título destacado y un CTA principal.

Título:

Hablemos sobre el próximo salto tecnológico de su organización.

Descripción:

Conozca cómo nuestras soluciones de ingeniería, infraestructura e inteligencia artificial pueden ayudar a su organización.

Botón:

`Iniciar conversación por WhatsApp`

### Información corporativa

Mostrar en columnas:

**Brilliantic S.A.S.**
- Actividades económicas.
- Descripción corporativa.
- Operación nacional.

**Contacto**
- Teléfono.
- Correo corporativo, si está confirmado.
- Dirección física.

**Redes sociales**
- Instagram.
- Facebook.
- LinkedIn.

**Legal**
- Política de tratamiento de datos.
- Aviso de privacidad.
- Derechos reservados.

Incluir el botón flotante de WhatsApp, visible durante toda la navegación.

---

# 5. SISTEMA DE DISEÑO Y PALETA CROMÁTICA

La web debe mantener una identidad visual tecnológica, moderna y corporativa.

El análisis de color de la web actual devolvió 66 valores, muchos de ellos correspondientes a transparencias, sombras y estilos de componentes. No deben convertirse los 66 colores en una paleta de marca independiente.

Consolidar la identidad alrededor de los siguientes tokens:

### Colores principales

```css
:root {
  /* Fondos */
  --bg-abyssal-dark: #130F26;
  --bg-abyssal-gradient: #221338;
  --bg-optic-light: #F6F8FC;
  --bg-editorial-ivory: #F4F3EF;

  /* Superficies */
  --surface-glass-dark: rgba(37, 31, 61, 0.80);
  --border-subtle-light: #E2E6F0;

  /* Tipografía */
  --text-primary-dark: #130F26;
  --text-secondary-slate: #474B56;
  --text-primary-light: #F6F8FC;

  /* Identidad de marca */
  --brand-cyan-eng: #00B8E6;
  --brand-cyan-laser: #19E3FF;
  --brand-magenta-human: #D900C4;
  --brand-indigo-mgmt: #3B2875;

  /* Estados */
  --accent-green-roi: #00E676;
  --accent-red-leak: #FF3B5C;
}
```

### Uso de colores

- Cian: ingeniería, tecnología, Cloud y conectividad.
- Magenta: automatización comercial, CRM e inteligencia artificial.
- Índigo: gestión, dirección de proyectos y gobernanza.
- Verde: estados positivos, acciones y resultados.
- Rojo: alertas y problemas operativos.

Los fondos principales deben alternar entre ambientes oscuros y claros.

No utilizar todos los colores simultáneamente en una misma sección.

Evitar negro puro y blanco puro en superficies de diseño. Los elementos de contraste deben usar los tonos ópticos establecidos.

### Tipografía

Importar:

- Plus Jakarta Sans: titulares.
- Inter: contenido general.
- JetBrains Mono: cifras, métricas, etiquetas técnicas e indicadores.

Los títulos no deben utilizar cursivas.

### Lenguaje visual

Priorizar:

- Bento Grid.
- Liquid Glass moderado.
- Diagramas de arquitectura.
- Tarjetas con jerarquía visual.
- Gradientes suaves.
- Bordes sutiles.
- Iconografía coherente.
- Espacios amplios.
- Microinteracciones.

Evitar:

- Efectos de neón excesivos.
- Animaciones permanentes.
- Sombras exageradas.
- Tarjetas genéricas repetidas.
- Exceso de texto.
- Ilustraciones de robots genéricos.
- Efectos visuales que dificulten leer el contenido.

---

# 6. NAVEGACIÓN Y CONVERSIONES

Todos los CTA deben utilizar el WhatsApp oficial de Brilliantic.

Número:

+57 322 827 3454

Definir las siguientes constantes:

```javascript
export const whatsappUrls = {
  general:
    "https://wa.me/573228273454?text=Hola%20Brilliantic,%20vengo%20de%20su%20p%C3%A1gina%20web%20y%20quiero%20agendar%20un%20diagn%C3%B3stico%20tecnol%C3%B3gico.",

  comercial:
    "https://wa.me/573228273454?text=Hola%20Brilliantic,%20quiero%20conocer%20KLARI%20CRM,%20los%20agentes%20de%20IA%20KLERK%20y%20K-lender%20para%20acelerar%20mis%20ventas.",

  spoc:
    "https://wa.me/573228273454?text=Hola%20Brilliantic,%20necesito%20informaci%C3%B3n%20sobre%20Conectividad%20Nacional%20SPOC,%20Infraestructura%20TI%20o%20Consultor%C3%ADa."
};
```

Asignar:

- Navbar: general.
- Hero comercial: comercial.
- Ecosistema propio: comercial.
- Unidades de ingeniería: según el servicio seleccionado.
- SPOC: spoc.
- Footer: general.
- WhatsApp flotante: general.

Los enlaces externos deben abrirse de forma segura mediante `target="_blank"` y `rel="noopener noreferrer"`.

---

# 7. ARQUITECTURA DE COMPONENTES REACT

Mantener una arquitectura modular y reutilizable.

Propuesta de organización, adaptándola a la estructura existente:

```text
src/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── MetricsBar.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── ProprietaryEcosystem.jsx
│   │   ├── BusinessUnits.jsx
│   │   ├── SpocNationalModel.jsx
│   │   ├── CaseStudiesSection.jsx
│   │   └── LeadershipSection.jsx
│   │
│   ├── ui/
│   │   ├── SectionHeader.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── MetricCard.jsx
│   │   ├── CaseStudyCard.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── IconBadge.jsx
│   │
│   └── diagrams/
│       ├── EcosystemFlow.jsx
│       ├── SpocArchitecture.jsx
│       └── SupportLevels.jsx
│
├── data/
│   ├── products.js
│   ├── businessUnits.js
│   ├── caseStudies.js
│   └── navigation.js
│
├── assets/
│
├── styles/
│   ├── variables.css
│   ├── global.css
│   └── responsive.css
│
└── App.jsx
```

No es obligatorio utilizar exactamente esta estructura. Debe respetarse la arquitectura existente si ya está bien organizada.

Las tarjetas y secciones repetitivas deben recibir información mediante props y archivos de datos, evitando duplicar JSX.

No introducir dependencias innecesarias.

---

# 8. RESPONSIVE DESIGN

La web debe diseñarse pensando primero en escritorio, pero sin sacrificar la experiencia móvil.

### Escritorio

- Contenido centrado.
- Ancho máximo de lectura controlado.
- Hero de dos columnas.
- Grid de cuatro tarjetas cuando corresponda.
- Diagramas con suficiente espacio.
- Navbar horizontal.

### Tablet

- Adaptación de grids a dos columnas.
- Diagramas reorganizados.
- Menú compacto.

### Móvil

- Todas las secciones en una columna.
- Hero con botones apilados.
- Tarjetas con ancho completo.
- Métricas en dos columnas.
- Diagramas simplificados verticalmente.
- Menú hamburguesa.
- Botones con áreas táctiles adecuadas.
- Sin desbordamiento horizontal.

Las tipografías deben ajustarse mediante tamaños fluidos (`clamp()`).

---

# 9. SEO, ACCESIBILIDAD Y RENDIMIENTO

Actualizar los metadatos SEO:

Title:

Brilliantic S.A.S. | IA, Software SaaS, Cloud y Conectividad SPOC

Description:

Convertimos la tecnología en continuidad operativa y aceleración de ingresos. Desarrollamos soluciones de software propio, inteligencia artificial, conectividad nacional e infraestructura tecnológica empresarial.

Implementar:

- HTML semántico.
- Un único H1 principal.
- Jerarquía correcta de encabezados.
- Textos alternativos en imágenes.
- Navegación mediante teclado.
- Contraste adecuado.
- Estados de foco visibles.
- Lazy loading para imágenes fuera del primer pantallazo.
- Imágenes optimizadas.
- Open Graph.
- Favicon corporativo.
- Reducción de animaciones mediante `prefers-reduced-motion`.

No cargar imágenes de gran tamaño si no son necesarias.

---

# 10. VALIDACIÓN DEL CONTENIDO

Antes de publicar, verificar las siguientes afirmaciones:

| Información | Validación requerida |
|---|---|
| 32 sedes | Confirmar cobertura real. |
| 16 departamentos | Confirmar cobertura geográfica. |
| +12 operadores | Confirmar proveedores aliados activos. |
| SLA inferior a 2 horas | Definir si es respuesta, atención o resolución. |
| 13 años de trayectoria | Confirmar fecha inicial y alcance de la experiencia. |
| Equipo de 35 a 180 colaboradores | Confirmar contexto de esa experiencia. |
| OCR en 10 segundos | Verificar medición real. |
| No-show inferior al 10% | Verificar datos y período de medición. |
| 100% de trazabilidad | Confirmar alcance técnico. |
| Certificaciones y matrícula | Verificar títulos, entidades y vigencia. |

No inventar clientes, testimonios, alianzas, cifras, certificaciones ni resultados comerciales.

Si un dato no está confirmado, conservarlo como pendiente de validación y no presentarlo como hecho en producción.

---

# 11. CRITERIOS DE ACEPTACIÓN

El trabajo se considerará terminado cuando se cumpla lo siguiente:

**Diseño**
- [ ] Los nueve apartados están implementados.
- [ ] Las secciones tienen identidad visual diferenciada.
- [ ] Se utilizan correctamente los tokens de diseño.
- [ ] Las tarjetas tienen una jerarquía visual consistente.
- [ ] Los diagramas representan correctamente los productos y servicios.
- [ ] No existen bloques vacíos ni espacios injustificados.

**Contenido**
- [ ] Se distingue claramente el ecosistema propio de las unidades de ingeniería.
- [ ] Se entiende qué hace KLARI.
- [ ] Se entiende qué hace KLERK.
- [ ] Se entiende qué hace K-lender.
- [ ] Connectmsg y Brilliantickets están diferenciados.
- [ ] El modelo SPOC se comprende mediante su diagrama.
- [ ] Los casos de éxito tienen estructura de reto, solución e impacto.
- [ ] Existe una sección independiente para respaldo directivo.

**Funcionalidad**
- [ ] La navegación funciona.
- [ ] Los CTA llevan al WhatsApp correspondiente.
- [ ] Los enlaces internos funcionan correctamente.
- [ ] El menú móvil funciona.
- [ ] No hay errores en consola.
- [ ] No existen imágenes rotas.
- [ ] Todas las rutas de assets son correctas.

**Calidad**
- [ ] Diseño responsive verificado en escritorio, tablet y móvil.
- [ ] No hay desbordamiento horizontal.
- [ ] Las animaciones no interfieren con la navegación.
- [ ] Los tiempos de carga son razonables.
- [ ] La página conserva su identidad corporativa.

## 12. INSTRUCCIÓN FINAL AL AGENTE

No implementes la página como una colección de nueve bloques con títulos y párrafos.

Cada apartado debe tener una composición visual específica que permita entender rápidamente la información.

Prioriza diagramas para explicar procesos, tarjetas para clasificar productos y servicios, indicadores para demostrar capacidad operativa y composiciones editoriales para presentar experiencia y liderazgo.

Utiliza los recursos gráficos existentes antes de crear nuevos. Inspecciona los logotipos, fotografías y demás assets disponibles para identificar dónde pueden aportar valor.

No sustituyas los productos reales por imágenes genéricas ni inventes interfaces de software.

Antes de realizar modificaciones:
1. Inspecciona la estructura del proyecto React.
2. Revisa los componentes existentes.
3. Identifica los recursos gráficos disponibles.
4. Visita la página actual y captura sus versiones de escritorio y móvil.
5. Identifica funcionalidades que deben conservarse.

Después implementa el rediseño, comprueba la navegación y verifica visualmente todas las secciones.

**El resultado debe comunicar que Brilliantic no es simplemente una empresa que ofrece servicios informáticos, sino un integrador tecnológico con productos propios, capacidad de ingeniería y operación de infraestructura empresarial.**
