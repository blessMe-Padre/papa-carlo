const initScrollToTop = () => {
    const goTopBtn = document.querySelector(".scroll-top");

    // обработчик на скролл окна
    window.addEventListener("scroll", trackScroll);
    // обработчик на нажатии
    goTopBtn.addEventListener("click", goTop);

    function trackScroll() {
        const scrolled = window.pageYOffset;
        if (scrolled > 200) {
            goTopBtn.classList.add("is-active");
        } else {
            goTopBtn.classList.remove("is-active");
        }
    }

    function goTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -75); // второй аргумент - скорость
            setTimeout(goTop, 0); // входим в рекурсию
        }
    }
};

export { initScrollToTop };