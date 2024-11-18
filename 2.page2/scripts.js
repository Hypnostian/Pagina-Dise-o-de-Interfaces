// Elementos del formulario
const facultadSelect = document.getElementById("facultad");
const programaSelect = document.getElementById("programa");
const programaContainer = document.getElementById("programa-container");

// Facultades y programas
const dataFacultades = {
    "Ciencias de la Salud": ["Enfermería", "Medicina", "Programa de Estudios Generales en Salud", "Psicología", "Psicología - Convenio Unisangil"],
    "Ingeniería": ["Ingeniería Biomédica", "Ingeniería de Sistemas", "Ingeniería en Energía y Sostenibilidad", "Ingeniería Financiera", "Ingeniería Industrial", "Ingeniería Mecatrónica"],
    "Ciencias Jurídicas y Políticas": ["Derecho", "Derecho - Convenio Unisangil", "Derecho - Virtual"],
    "Ciencias Sociales, Humanidades y Artes": ["Artes Audiovisuales", "Comunicación Social", "Gastronomía y Alta Cocina", "Licenciatura en Educación Infantil", "Literatura - Virtual", "Música", "Preparatorio en Estudios Musicales"],
    "Economía y Negocios": ["Administración de Empresas", "Administración de Empresas - Dual", "Administración de Empresas - Virtual", "Contaduría Pública", "Contaduría Pública - Virtual", "Economía", "Marketing", "Negocios Internacionales", "Seguridad y Salud en el Trabajo"],
    "Estudios Técnicos y Tecnológicos": ["Técnico Laboral en Auxiliar en Mercado e Impulsador", "Técnico Laboral en Auxiliar de Seguridad en el Trabajo", "Técnico Laboral en Panadería y Pastelería", "Técnico Laboral en Gestión Administrativa", "Tecnología en Marketing - Virtual", "Tecnología en Seguridad y Salud en el Trabajo", "Tecnología en Regencia de Farmacia", "Tecnología en Investigación Criminal y Ciencias Forenses", "Tecnología en Gestión Humana", "Tecnología en Gestión Gastronómica", "Tecnología en Marketing"]
};

// Cargar facultades dinámicamente
function cargarFacultades() {
    for (const facultad in dataFacultades) {
        const option = document.createElement("option");
        option.value = facultad;
        option.textContent = facultad;
        facultadSelect.appendChild(option);
    }
}

// Evento para cargar programas al seleccionar una facultad
facultadSelect.addEventListener("change", (e) => {
    const facultadSeleccionada = e.target.value;

    // Mostrar el contenedor del programa
    programaContainer.style.display = "block";

    // Limpiar los programas anteriores
    programaSelect.innerHTML = '<option value="" disabled selected>Seleccione una opción</option>';

    // Añadir programas de la facultad seleccionada
    if (dataFacultades[facultadSeleccionada]) {
        dataFacultades[facultadSeleccionada].forEach((programa) => {
            const option = document.createElement("option");
            option.value = programa;
            option.textContent = programa;
            programaSelect.appendChild(option);
        });
    }
});

// Validación del formulario
const form = document.getElementById("student-register-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const captchaCheck = document.getElementById("captcha-check");
    if (!captchaCheck.checked) {
        alert("Por favor, confirma que no eres un robot.");
        return;
    }

    // Validación exitosa
    alert("Formulario enviado correctamente.");
    form.reset();
    programaContainer.style.display = "none"; // Ocultar el contenedor del programa
});

// Cargar las facultades al inicio
document.addEventListener("DOMContentLoaded", cargarFacultades);
