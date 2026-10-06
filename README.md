# 📄 CV Studio Pro — Hoja de Vida IT (Formato ATS & Visual Moderno)

Herramienta profesional desarrollada con la perspectiva dual de **Desarrollador Web Senior** y **Reclutador Técnico IT**. Permite alternar instantáneamente entre dos filosofías de diseño curricular y exportar a **PDF** de alta resolución con un solo clic.

---

## 🎯 Las Dos Opciones: ¿Cuándo usar cada una?

### 1. 🤖 Formato ATS Estándar (Applicant Tracking Systems)
* **¿Cuándo usarlo?** Al postularte en portales corporativos de grandes empresas (ej: Workday, Greenhouse, Taleo, Lever, SAP SuccessFactors, Indeed, LinkedIn Easy Apply).
* **Por qué funciona:**
  - **Diseño lineal a una sola columna**: Los parsers OCR leen de arriba a abajo sin confundir texto entre columnas paralelas.
  - **Encabezados convencionales**: Utiliza términos estándar de la industria (`RESUMEN PROFESIONAL`, `EXPERIENCIA LABORAL`, `HABILIDADES TÉCNICAS`, `EDUCACIÓN`).
  - **Densidad de palabras clave**: Optimizado para búsquedas booleanas y scoring algorítmico de tecnologías (React, Node.js, AWS, TypeScript, CI/CD, etc.).
  - **Sin elementos gráficos complejos**: Cero tablas anidadas, avatares o barras de progreso que generen texto corrupto en el software de filtrado.

### 2. 🎨 Formato Visual Impactante (Portafolio / Moderno)
* **¿Cuándo usarlo?** Al contactar directamente a recruiters por LinkedIn, enviar tu CV por correo a Hiring Managers, startups tecnológicas, consultorías o llevarlo impreso a entrevistas presenciales.
* **Por qué funciona:**
  - **Jerarquía visual premium**: Layout de dos columnas con panel lateral de competencias y línea de tiempo visual.
  - **Métricas KPI destacadas**: Bloques superiores de impacto inmediato (+6 años exp, 99.9% uptime, -42% latencia).
  - **Badges y etiquetas tecnológicas**: Fácil escaneo visual para el ojo humano en los primeros 6 segundos de revisión.
  - **Temas de color corporativos**: 4 variantes de acento (Azul Corporativo, Verde Tech, Púrpura Moderno y Gris Ejecutivo).

---

## 👨‍💻 Perfil de Desarrollador Genérico Incluido

El perfil predefinido es un **Senior Full Stack Software Engineer** con métricas basadas en la metodología **STAR** (Situación, Tarea, Acción, Resultado), la más valorada por reclutadores:

* **Nombre:** Alejandro Rivera Gómez
* **Rol:** Senior Full Stack Software Engineer | Cloud & Microservices
* **Stack Principal:** TypeScript, React, Next.js, Node.js, Python (FastAPI), AWS, Docker, PostgreSQL, Redis.
* **Logros cuantificables:**
  - Reducción del **42%** en tiempos de respuesta de APIs migrando a microservicios.
  - Liderazgo de equipos ágiles de 6 ingenieros con despliegues continuos sin downtime.
  - Aumento de cobertura de testing del **52% al 89%**.
  - Creación de proyectos Open Source con más de **900 estrellas en GitHub**.

---

## 🚀 Características Técnicas del Proyecto

1. **Descarga en PDF Integrada**: Utiliza la librería `html2pdf.js` configurada para formato A4 a escala 2x (retina display), con fallback automático a la ventana de impresión nativa del sistema.
2. **Modo Edición en Vivo ("Modo Edición")**: Puedes hacer clic en el botón de edición y cambiar tus nombres, fechas, enlaces y logros directamente en la pantalla antes de generar el PDF.
3. **100% Responsivo**: Se adapta a teléfonos móviles, tablets y monitores de escritorio.
4. **Reglas `@media print` Avanzadas**: Elimina la barra de herramientas, previene cortes de página en medio de puestos de trabajo y asegura que los colores de impresión se mantengan exactos.

---

## 📁 Estructura de Archivos

```text
├── index.html        # Estructura semántica (Vistas Visual y ATS sincronizadas)
├── styles.css        # Estilos modernos, temas de acento, layouts y media queries para impresión
├── script.js         # Lógica de cambio de vista, temas, modo edición y descarga en PDF
└── README.md         # Documentación y guía estratégica de reclutamiento
```

---

## 💡 Cómo Abrirlo y Probarlo

Simplemente abre el archivo `index.html` con cualquier navegador web moderno (Google Chrome, Microsoft Edge, Firefox, Brave) o utiliza una extensión como *Live Server* en tu editor de código.

