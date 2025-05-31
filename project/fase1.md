# Proyectos Avanzados de React - Certificación

## Tecnologías base obligatorias
- React 19
- React Router DOM v6+
- JSON-Server
- MUI (Material UI) 
- Formularios con Formik + Yup
- useState, useEffect

---

## 1. Casa de Cambios Digital Bolivia

### Requerimientos
- Registro/Login de usuario (sin Context API o Redux por ahora)
- Mapa con casas de cambio y sus cotizaciones actualizadas (JSON Server)
- Comparación visual entre tipo de cambio oficial vs. paralelo
- Alerta personalizada: cuando el dólar supera cierto valor el usario puede setear un monto X 
- Historial de cotizaciones por casa de cambio (gráfico)
- CRUD para casas de cambio (admin simulado json-server)
- Interfaz responsive con MUI
- Validación de formularios con Formik + Yup

### Métrica de evaluación
| Criterio                            | Puntaje |
|-------------------------------------|---------|
| Mapa con datos funcionales  | 15%     |
| Alerta funcional de cotización     | 15%     |
| CRUD funcional con validaciones    | 15%     |
| Gráfico de historial               | 10%     |
| UI limpia y responsive (MUI)       | 15%     |
| JSON Server bien estructurado      | 10%     |
| Uso correcto de hooks              | 10%     |
| Documentación técnica (README)    | 10%     |

---

## 2. Sistema de Votación Ciudadana

### Requerimientos
- Registro/Login de ciudadanos (validación CI - Cam(2fase))
- Selección automatica de recinto.
- Visualización de estado del votante si este ya emitio o no su voto.
- Panel administrador con CRUD para gestionar  mesas y recintos
- Visualizacion de papeleta de votacion simulada 
- Formulario para registrar postulante (Admin)
- Validaciones con Formik + Yup
- Interfaz Responsive (MUI)

### Métrica de evaluación
| Criterio                                 | Puntaje |
|------------------------------------------|---------|
| Flujo de reserva y generación de turno   | 20%     |
| Panel de administración funcional        | 15%     |
| Visualización clara de horarios y mesas  | 10%     |
| Formulario validado correctamente        | 10%     |
| QR generado funcionalmente               | 10%     |
| UI clara y responsiva con MUI            | 15%     |
| JSON Server estructurado correctamente   | 10%     |
| Documentación técnica (README)    | 10%     |

---

## 3. App de Turnos para Combustible

### Requerimientos
- Registro de usuario y rol (cliente/admin) sin Context o Redux
- Selección de estación de servicio, tipo de combustible, fecha y hora
- Visualización de turnos activos por día
- Cancelación de turno por parte del usuario
- Panel de administrador para gestionar disponibilidad (CRUD JSON Server)
- Sistema de notificaciones visuales (MUI Alerts o Snackbar)
- Validaciones fuertes en formularios con Yup

### Métrica de evaluación
| Criterio                            | Puntaje |
|-------------------------------------|---------|
| Flujo de reservación funcional     | 20%     |
| Panel de administrador             | 15%     |
| Formularios validados correctamente | 10%     |
| Turnos visibles por usuario        | 10%     |
| Cancelación y feedback visual      | 10%     |
| UI organizada y clara              | 15%     |
| Backend bien estructurado (JSON Server) | 10% |
| Documentación técnica (README)    | 10%     |

---

## 4. Precios Justos Ya

### Requerimientos
- Mapa de mercados/comercios por zona
- Publicación de precios de productos por usuario (con login simple)
- Comparador de precios por producto y barrio
- Ranking de comercios más reportados y valorados
- Panel admin CRUD de productos
- Alerta de escasez cuando hay 3+ reportes negativos sobre un producto

### Métrica de evaluación
| Criterio                            | Puntaje |
|-------------------------------------|---------|
| Reporte y visualización funcional de productos | 20%     |
| Comparador de precios activo       | 15%     |
| Mapa con ubicaciones correctas     | 15%     |
| Alertas visibles correctamente     | 10%     |
| Panel admin funcional              | 10%     |
| Formularios y validaciones         | 10%     |
| Interfaz moderna y clara con MUI   | 10%     |
| Documentación técnica (README)    | 10%     |
