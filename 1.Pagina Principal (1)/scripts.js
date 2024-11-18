// Función para redirigir al inicio de sesión
function redirectToLogin() {
    window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
}

// Función para redirigir a otras páginas
function redirectTo(page) {
    window.location.href = page; // Redirige a la página especificada
}

// Función para cambiar el idioma con animación
function changeLanguage(lang) {
    const translations = {
        es: {
            mainTitle: '¡Optimiza tu tiempo libre con UNAB FreeTime!',
            mainSubtitle: 'Gestiona tus horas libres, participa en actividades y cumple con tus requisitos de graduación fácilmente',
            mainDescription: 'UNAB FreeTime es tu herramienta para planificar y aprovechar tus horas libres. Accede a eventos, registra tus horas, y asegura tu progreso hacia la graduación.',
            activitiesText: 'Ver Actividades',
            eventsText: 'Valora Eventos',
            reportText: 'Generar Reporte',
        },
        en: {
            mainTitle: 'Optimize your free time with UNAB FreeTime!',
            mainSubtitle: 'Manage your free hours, participate in activities, and easily meet your graduation requirements.',
            mainDescription: 'UNAB FreeTime is your tool to plan and make the most of your free time. Access events, record your hours, and track your progress towards graduation.',
            activitiesText: 'View Activities',
            eventsText: 'Rate Events',
            reportText: 'Generate Report',
        },
    };

    // Traducción de los elementos de texto
    const texts = translations[lang];

    const elementsToAnimate = [
        { id: 'main-title', text: texts.mainTitle },
        { id: 'main-subtitle', text: texts.mainSubtitle },
        { id: 'main-description', text: texts.mainDescription },
        { id: 'activities-text', text: texts.activitiesText },
        { id: 'events-text', text: texts.eventsText },
        { id: 'report-text', text: texts.reportText },
    ];

    elementsToAnimate.forEach((element) => {
        const domElement = document.getElementById(element.id);
        if (domElement) {
            domElement.style.opacity = '0';
            setTimeout(() => {
                domElement.textContent = element.text;
                domElement.style.opacity = '1';
            }, 300);
        }
    });

    // No cambiar el color del fondo
    document.querySelector('.intro-banner').style.backgroundColor = '#7FD0F2';
}


// Agregar animaciones al pasar el mouse sobre los idiomas
document.addEventListener('DOMContentLoaded', () => {
    const languageOptions = document.querySelectorAll('.language-option');

    languageOptions.forEach((option) => {
        option.addEventListener('mouseover', () => {
            option.style.transform = 'scale(1.2)';
            option.style.transition = 'transform 0.3s ease';
        });

        option.addEventListener('mouseout', () => {
            option.style.transform = 'scale(1)';
        });
    });

    // Configuración inicial (idioma por defecto: español)
    changeLanguage('es');
});

// Función para agregar animación de entrada a los botones al cargar
window.onload = () => {
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.transform = 'translateY(0)';
            btn.style.opacity = '1';
            btn.style.transition = 'all 0.5s ease';
        }, index * 200); // Animación en cascada para cada botón
    });
};
