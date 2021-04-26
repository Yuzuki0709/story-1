window.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".group-5");

    const createPetal = () => {
        const petalEl = document.createElement("span");
        petalEl.className = "sakura"

        const minSize = 10;
        const maxSize = 15;

        const size = Math.random() * (maxSize + 1 - minSize) + minSize;
        petalEl.style.width = `${size}px`;
        petalEl.style.height = `${size}px`;
        petalEl.style.left = Math.random() * innerWidth + "px";

        section.appendChild(petalEl);

        setTimeout(() => {
            petalEl.remove();
        },10000);
    }

    setInterval(createPetal,100);
});
