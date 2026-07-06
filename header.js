/* ==========================================================================
   HEADER COMPARTIDO - PLATAFORMA PROFE DIEGO 2026
   Inyecta el encabezado institucional automáticamente en cualquier página.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header>
        <div class="header-container">
            <div class="header-flex">
                <div class="brand-layout">
                    <!-- Usamos ruta absoluta para que cargue bien desde cualquier subcarpeta -->
                    <img src="https://merunaku.github.io/ProfeDiego/logo.png" alt="Logo ProfeDiego" onerror="this.style.display='none'">
                    <span>ProfeDiego</span>
                </div>
                <div class="title-layout">
                    <h1>Plataforma de Estudios 2026</h1>
                    <p>Portal del Estudiante • IPCHILE</p>
                </div>
            </div>
        </div>
    </header>`;
    
    // Inyecta el header justo al principio del elemento <body>
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
