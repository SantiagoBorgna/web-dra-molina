// El botón hamburguesa
const menuToggle = document.querySelector('.navbar-toggle'); 

// La lista de enlaces
const menuLinks = document.querySelector('.navbar-links');

// Todos los enlaces individuales dentro del menú
const allLinks = document.querySelectorAll('.navbar-links a');

const body = document.querySelector('body');

// Tratamientos
const tratamientosData = {
    "info-tratamiento-1": {
        title: "Aumento de Mamas",
        description: "El aumento de mamas es un procedimiento quirúrgico para aumentar el tamaño y mejorar la forma de los senos, utilizando implantes de silicona o solución salina. Es ideal para mujeres que desean mayor volumen o restaurar el volumen perdido después del embarazo o la pérdida de peso. Consulta para una evaluación personalizada."
    },
    "info-tratamiento-2": {
        title: "Rinoplastia",
        description: "La rinoplastia, o cirugía de nariz, busca modificar la forma de la nariz para armonizarla con el resto del rostro. Puede corregir el tamaño, el ángulo, el dorso, la punta o las fosas nasales. Es una cirugía altamente personalizada que busca resultados naturales y equilibrados. Agenda una consulta para discutir tus objetivos."
    },
    "info-tratamiento-3": {
        title: "Armonización Facial",
        description: "La armonización facial es un conjunto de procedimientos estéticos mínimamente invasivos que buscan equilibrar y realzar los rasgos del rostro sin cirugía. Se utilizan rellenos de ácido hialurónico, toxina botulínica y otros tratamientos para mejorar contornos, pómulos, labios y reducir arrugas. Los resultados son naturales y rejuvenecedores."
    },
    "info-tratamiento-4": {
        title: "Liposucción",
        description: "La liposucción es un procedimiento que elimina depósitos de grasa localizados que no responden a dieta y ejercicio. Se realiza en áreas como abdomen, muslos, caderas o brazos, esculpiendo el contorno corporal. No es un método para perder peso, sino para remodelar el cuerpo. Obtén más información en una consulta."
    },
    "info-tratamiento-5": {
        title: "Abdominoplastia",
        description: "La abdominoplastia es una cirugía para aplanar el abdomen eliminando el exceso de piel y grasa, y tensando los músculos de la pared abdominal. Es ideal para personas que han experimentado una pérdida de peso significativa o embarazos múltiples y desean un abdomen más firme y liso. Te esperamos para evaluar tu caso."
    },
    "info-tratamiento-6": {
        title: "Blefaroplastia",
        description: "La blefaroplastia, o cirugía de párpados, corrige el exceso de piel y grasa que causa bolsas bajo los ojos y párpados caídos, dando una apariencia cansada o envejecida. Rejuvenece la mirada, mejorando el campo visual en algunos casos. Consulta cómo este procedimiento puede revitalizar tu expresión."
    }
};

// Modal
const modal = document.getElementById('modal-tratamiento');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const botonTurnoModal = document.querySelector('.boton-principal-modal');
const infoButtons = document.querySelectorAll('.boton-info');

// Abrir modal
function openModal(treatmentId) {
    const data = tratamientosData[treatmentId]; 
    if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.classList.add('active'); 
        document.body.classList.add('scroll-lock'); 
    }
}

// Cerrar modal
function closeModal() {
    modal.classList.remove('active'); 
    document.body.classList.remove('scroll-lock');
}

// Abrir menu
menuToggle.addEventListener('click', () => {
    
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('scroll-lock');
});

// Listeners
infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const treatmentId = button.dataset.target;
        openModal(treatmentId);
    });
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Cerrar menu
allLinks.forEach(link => {
    
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuLinks.classList.remove('active');
        body.classList.remove('scroll-lock');
    });
});