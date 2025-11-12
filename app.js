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
        title: "Rellenos con Ácido Hialurónico",
        description: "El ácido hialurónico es una sustancia biocompatible que nuestro cuerpo produce de forma natural, clave para mantener la piel hidratada y con volumen.<br><br>Este tratamiento consiste en microinyecciones de un gel de ácido hialurónico para reponer el volumen perdido, rellenar arrugas estáticas (como los surcos nasogenianos), definir contornos (labios, pómulos, mandíbula) e incluso corregir ojeras.<br><br>Es un procedimiento seguro, con resultados inmediatos y reversibles, que permite una armonización facial completa, devolviendo la frescura y la turgencia a la piel."
    },
    "info-tratamiento-2": {
        title: "Toxina Botulínica",
        description: "La toxina botulínica, popularmente conocida por marcas como Botox®, es un tratamiento mínimamente invasivo que utiliza una proteína purificada. Su función es relajar de forma controlada y temporal los músculos faciales responsables de las arrugas de expresión o 'dinámicas'. Es la solución más eficaz para tratar las líneas de la frente, el entrecejo y las 'patas de gallo'.<br><br>El objetivo no es paralizar, sino suavizar la mímica, previniendo que estas arrugas se marquen de forma permanente. El resultado es una apariencia notablemente más relajada, fresca y rejuvenecida, preservando la naturalidad."
    },
    "info-tratamiento-3": {
        title: "Bioestimuladores de Colágeno",
        description: "A diferencia de los rellenos, los bioestimuladores no aportan volumen de inmediato, sino que trabajan estimulando a tu propio cuerpo. Son sustancias inyectables (como la hidroxiapatita cálcica o el ácido poliláctico) que actúan como 'activadores', incentivando a tus células (fibroblastos) para que produzcan nuevo colágeno y elastina.<br><br>Este tratamiento es la mejor opción para combatir la flacidez facial y corporal (cuello, escote, brazos) y recuperar la densidad perdida. Los resultados son graduales, naturales y muy duraderos, logrando un 'efecto lifting' sin cirugía."
    },
    "info-tratamiento-4": {
        title: "Mesoterapia Facial y Corporal",
        description: "La mesoterapia consiste en la aplicación de microinyecciones con un cóctel personalizado de sustancias activas (vitaminas, aminoácidos, minerales, ácido hialurónico) en la capa media de la piel (mesodermo).<br><br>A nivel facial, revitaliza, hidrata y aporta luminosidad (efecto 'mesolift'). A nivel corporal, es uno de los tratamientos más efectivos para combatir la celulitis, mejorar la circulación y tratar la grasa localizada en zonas rebeldes."
    },
    "info-tratamiento-5": {
        title: "Dermapen (Microneedling)",
        description: "Dermapen es un avanzado dispositivo de microneedling que utiliza múltiples y diminutas agujas para crear micro-perforaciones controladas en la piel. Este proceso, conocido como terapia de inducción de colágeno, activa la respuesta natural de reparación del cuerpo. El resultado es una potente estimulación de la producción de colágeno y elastina.<br><br>Es un tratamiento excepcional para mejorar la textura, minimizar el tamaño de los poros, suavizar cicatrices (especialmente de acné) y atenuar arrugas finas, rejuveneciendo la piel desde dentro."
    },
    "info-tratamiento-6": {
        title: "Hidratación Profunda de la Piel",
        description: "Este tratamiento, a menudo llamado 'Skinbooster', es un baño de hidratación intensiva para la piel. Consiste en microinyecciones de ácido hialurónico de muy baja densidad y complejos vitamínicos que nutren la dermis desde dentro.<br><br>A diferencia de las cremas, actúa en las capas profundas, restaurando el equilibrio hídrico, mejorando la elasticidad y la textura. Es el tratamiento perfecto para pieles deshidratadas, apagadas o con finas líneas, devolviéndoles una luminosidad y frescura inmediatas."
    },
    "info-tratamiento-7": {
        title: "Peelings Químicos",
        description: "El peeling químico es un procedimiento dermatológico controlado que utiliza soluciones específicas para exfoliar y acelerar la renovación de las capas superficiales de la piel. Al eliminar las células muertas, se estimula la regeneración celular.<br><br>Es un tratamiento excelente para mejorar la textura general, unificar el tono, atenuar manchas solares o de acné, controlar la grasitud y suavizar líneas finas. El resultado es una piel visiblemente más uniforme, suave y luminosa. Personalizamos la intensidad del peeling según tu tipo de piel y objetivos."
    },
    "info-tratamiento-8": {
        title: "Plasma Rico en Plaquetas (PRP)",
        description: "El PRP es un tratamiento de medicina regenerativa que utiliza los propios recursos de tu cuerpo. Se obtiene a partir de una pequeña muestra de sangre del paciente, que se centrifuga para aislar la fracción de plasma rica en plaquetas y factores de crecimiento.<br><br>Al reinyectar este plasma en la piel o el cuero cabelludo, se estimula potentemente la regeneración celular, la producción de colágeno y la reparación de tejidos. Es ideal para mejorar la calidad y luminosidad de la piel y como pilar en la recuperación capilar."
    },
    "info-tratamiento-9": {
        title: "Recuperación del Cabello",
        description: "Tratamiento tanto para hombres como mujeres, para frenar la caída del pelo y mejorar su calidad. Tras un diagnóstico preciso, diseñamos un plan de choque personalizado que puede incluir varias técnicas.<br><br>Habitualmente combinamos el Plasma Rico en Plaquetas (PRP) para revitalizar el folículo, con la mesoterapia capilar, que aporta un cóctel de vitaminas y nutrientes esenciales directamente en el cuero cabelludo. Este enfoque sinérgico busca frenar la caída, fortalecer el cabello existente y estimular el crecimiento de nuevo cabello."
    },
    "info-tratamiento-10": {
        title: "Telangiectasia facial",
        description: "Las telangiectasias faciales (también conocidas como arañitas vasculares o capilares rotos) son pequeños vasos sanguíneos dilatados que se hacen visibles en la superficie de la piel, especialmente en el rostro: mejillas, aletas nasales, mentón y frente. Suelen aparecer como líneas finas de color rojo, rosado o violáceo, y pueden formar pequeños patrones ramificados o lineales.<br><br>Pueden tener varias causas, entre ellas: factores genéticos, predisposición familiar, exposición solar crónica, cambios hormonales (especialmente en mujeres), rosácea, temperaturas extremas, alcohol, tabaco o comidas picantes, uso prolongado de corticoides tópicos. Con el Plasma Láser podemos tratarlas en una o varias sesiones, según el caso."
    },
    "info-tratamiento-11": {
        title: "Arañitas Vasculares",
        description: "Son vasos sanguíneos muy pequeños y dilatados (vénulas), de menos de 1 mm de diámetro, que se encuentran cerca de la superficie de la piel. Suelen presentarse en forma de ramificaciones, líneas rectas o patrones de araña, y se localizan principalmente en muslos, pantorrillas, tobillos y, a veces, detrás de las rodillas.<br><br>Aunque en la mayoría de los casos son solo un problema estético, algunas personas pueden referir síntomas como sensación de pesadez o cansancio en las piernas, calambres o picazón leve. Si hay venas más profundas comprometidas, puede existir dolor localizado. <br><br> Para tratarlas, la Escleroterapia es uno de los métodos más efectivos. Consiste en inyectar una sustancia esclerosante dentro del vaso, lo que provoca que se cierre y desaparezca en un período de 4 a 8 semanas. Para vasos muy finos y superficiales, o en zonas donde no se recomienda pinchar, utilizamos el Plasma Láser, que cierra los vasos sin dañar la piel. Ambos tratamientos pueden combinarse para obtener un resultado óptimo."
    },
    "info-tratamiento-12": {
        title: "Extirpación de Verrugas",
        description: "Las lesiones cutáneas benignas son extremadamente comunes y pueden resultar antiestéticas o incómodas. Realizamos la extirpación de verrugas, fibromas blandos (acrocordones), puntos rubí o queratosis seborreicas en consulta.<br><br>Dependiendo del tipo, tamaño y ubicación de la lesión, utilizamos el método más adecuado (como láser, electrocirugía o afeitado quirúrgico) para eliminarla de forma rápida, segura y precisa, minimizando el riesgo de cicatrices y logrando el mejor resultado estético posible."
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
        modalDescription.innerHTML = data.description;
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

botonTurnoModal.addEventListener('click', closeModal);

// Cerrar menu
allLinks.forEach(link => {
    
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuLinks.classList.remove('active');
        body.classList.remove('scroll-lock');
    });
});