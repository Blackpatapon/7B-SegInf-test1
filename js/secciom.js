document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");
    let currentIndex = 0;

    function showItem(index) {
        items.forEach(item => item.classList.remove("active"));
        
        items[index].classList.add("active");
    }

    showItem(currentIndex);

    document.querySelector(".next-button").addEventListener("click", () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showItem(currentIndex);
    });

    document.querySelector(".prev-button").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        showItem(currentIndex);
    });
});
