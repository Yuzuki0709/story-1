window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".group-2");

    const createRain  = () => {
        const rainEl = document.createElement("span");
        rainEl.className = "rain";

        rainEl.style.left = Math.random() * innerWidth + "px";
        section.appendChild(rainEl);

        setTimeout(() => {
            rainEl.remove();
        },1500);
    }

    setInterval(createRain,50);
})