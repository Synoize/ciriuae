const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.toggle("hidden");
    toggleBtn.setAttribute("aria-expanded", !isHidden);
    body.classList.toggle("overflow-hidden", !isHidden);

    const bars = toggleBtn.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-45');
    bars[0].classList.toggle('translate-y-[8px]');
    bars[1].classList.toggle('opacity-0');
    bars[2].classList.toggle('-rotate-45');
    bars[2].classList.toggle('-translate-y-[8px]');
});

document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickToggle = toggleBtn.contains(e.target);

    if (!mobileMenu.classList.contains("hidden") && !isClickInsideMenu && !isClickToggle) {
        mobileMenu.classList.add("hidden");
        body.classList.remove("overflow-hidden");
        toggleBtn.setAttribute("aria-expanded", false);

        const bars = toggleBtn.querySelectorAll('.bar');
        bars[0].classList.remove('rotate-45', 'translate-y-[8px]');
        bars[1].classList.remove('opacity-0');
        bars[2].classList.remove('-rotate-45', '-translate-y-[8px]');
    }
});