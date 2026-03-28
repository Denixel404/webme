
// Плавное появление блоков
document.querySelectorAll(".advantages").forEach((block, index) => {
    if (index == 0) 
        block.style.animationDelay = "0s";
    else if (index == 1) 
        block.style.animationDelay = "0.3s";
    else if (index == 2) 
        block.style.animationDelay = "0.6s";
    else if (index == 3) 
        block.style.animationDelay = "0.9s";
})

// Анимация при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Видно
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll(".animated-el").forEach(item => {
    observer.observe(item);
});

// Перейти к заказу
function open_kwork() {
    window.open("https://kwork.ru/website-development/49994057/sozdam-statichniy-sayt-ili-vizitku-s-nulya-na-github-pages", "_blank")
}