/**
 * CV STUDIO PRO - LÓGICA DE INTERACCIÓN & GENERACIÓN DE PDF
 * Desarrollado con estándares profesionales de Reclutamiento IT & Frontend
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos DOM principales
  const cvDocument = document.getElementById('cv-document');
  const btnFormatVisual = document.getElementById('btn-format-visual');
  const btnFormatAts = document.getElementById('btn-format-ats');
  const themeGroup = document.getElementById('theme-group');
  const colorDots = document.querySelectorAll('.color-dot');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnEditToggle = document.getElementById('btn-edit-toggle');
  const editText = document.getElementById('edit-text');
  const bannerDescription = document.getElementById('banner-description');
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-msg');

  // Estado de la aplicación
  let currentFormat = 'visual'; // 'visual' | 'ats'
  let isEditing = false;

  // Descripciones para el banner informativo
  const formatExplanations = {
    visual: `
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="banner-tag visual">Formato Visual Moderno</span>
        <span class="banner-desc"><strong>Ideal para:</strong> Enviar por correo, networking, LinkedIn y entrevistas humanas. Destaca por su alta jerarquía visual, métricas KPI, badges y paleta corporativa.</span>
      </div>
    `,
    ats: `
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="banner-tag ats">Formato ATS Estándar</span>
        <span class="banner-desc"><strong>Ideal para:</strong> Portales de empleo y sistemas de seguimiento (Workday, Greenhouse, Taleo, Lever). Formato lineal de una sola columna sin gráficos complejos que asegura un 100% de parseo de palabras clave.</span>
      </div>
    `
  };

  // Inicializar banner
  function updateBanner() {
    bannerDescription.innerHTML = formatExplanations[currentFormat];
  }
  updateBanner();

  // 1. CAMBIO DE FORMATO (VISUAL vs ATS)
  btnFormatVisual.addEventListener('click', () => {
    if (currentFormat === 'visual') return;
    currentFormat = 'visual';

    btnFormatVisual.classList.add('active');
    btnFormatAts.classList.remove('active');

    cvDocument.classList.remove('format-ats');
    cvDocument.classList.add('format-visual');

    // Mostrar selector de color en formato visual
    themeGroup.style.display = 'flex';
    updateBanner();
  });

  btnFormatAts.addEventListener('click', () => {
    if (currentFormat === 'ats') return;
    currentFormat = 'ats';

    btnFormatAts.classList.add('active');
    btnFormatVisual.classList.remove('active');

    cvDocument.classList.remove('format-visual');
    cvDocument.classList.add('format-ats');

    // Ocultar selector de color en formato ATS (debe ser sobrio y monocromático)
    themeGroup.style.display = 'none';
    updateBanner();
  });

  // 2. CAMBIO DE TEMAS DE COLOR
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const color = dot.getAttribute('data-color');
      // Remover temas previos
      cvDocument.classList.remove('theme-blue', 'theme-emerald', 'theme-purple', 'theme-slate');
      // Aplicar nuevo tema
      cvDocument.classList.add(`theme-${color}`);
    });
  });

  // 3. MODO EDICIÓN EN VIVO (Personalizar los datos directamente)
  btnEditToggle.addEventListener('click', () => {
    isEditing = !isEditing;
    const editableElements = cvDocument.querySelectorAll('[contenteditable]');

    editableElements.forEach(el => {
      el.setAttribute('contenteditable', isEditing ? 'true' : 'false');
    });

    if (isEditing) {
      btnEditToggle.classList.add('editing-active');
      editText.textContent = 'Guardar Edición';
      showToast('Modo Edición Activado', 'Haz clic en cualquier texto del CV para cambiar los datos.');
    } else {
      btnEditToggle.classList.remove('editing-active');
      editText.textContent = 'Modo Edición';
      showToast('Cambios Guardados', 'El documento está listo para descargarse en PDF.');
    }
  });

  // 4. DESCARGA EN PDF (Utilizando html2pdf con fallback nativo)
  btnDownloadPdf.addEventListener('click', async () => {
    // Si estaba en modo edición, cerrarlo temporalmente para que no salgan los bordes punteados
    const wasEditing = isEditing;
    if (isEditing) {
      btnEditToggle.click();
    }

    showToast('Generando PDF...', 'Por favor espera unos segundos mientras preparamos tu hoja de vida.');

    const candidateName = "Alejandro_Rivera";
    const filename = `Curriculum_${candidateName}_Formato_${currentFormat.toUpperCase()}.pdf`;

    // Elemento a exportar según la vista activa
    const elementToExport = currentFormat === 'visual'
      ? document.getElementById('view-visual')
      : document.getElementById('view-ats');

    // Configuración para html2pdf
    const opt = {
      margin: [10, 10, 10, 10], // márgenes en mm
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        scrollY: 0
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      if (typeof html2pdf !== 'undefined') {
        await html2pdf().set(opt).from(elementToExport).save();
        showToast('¡Descarga Exitosa!', `Tu CV en formato ${currentFormat.toUpperCase()} se ha descargado.`);
      } else {
        // Fallback a impresión nativa del navegador si la librería no carga
        window.print();
      }
    } catch (err) {
      console.warn('html2pdf falló o fue bloqueado, usando fallback nativo de impresión:', err);
      window.print();
    } finally {
      if (wasEditing) {
        btnEditToggle.click();
      }
    }
  });

  // Función auxiliar de Notificaciones Toast
  let toastTimer;
  function showToast(title, msg) {
    clearTimeout(toastTimer);
    toastTitle.textContent = title;
    toastMsg.textContent = msg;
    toast.classList.add('show');

    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});

