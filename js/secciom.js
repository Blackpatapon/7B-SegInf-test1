document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    let currentIndex = 0;

    // Función para mostrar el ítem actual
    function showItem(index) {
        // Ocultar todos los items
        items.forEach(item => item.classList.remove("active"));
        
        // Mostrar solo el ítem actual
        items[index].classList.add("active");
    }

    // Mostrar el primer ítem al cargar la página
    showItem(currentIndex);

    // Evento para el botón "Siguiente"
    document.querySelector(".next-button").addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Reiniciar al primero si está en el último
        }
        showItem(currentIndex);
    });

    // Evento para el botón "Anterior"
    document.querySelector(".prev-button").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Ir al último si está en el primero
        }
        showItem(currentIndex);
    });
});
