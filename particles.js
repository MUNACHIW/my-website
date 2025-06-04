document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            line_linked: { enable: true, color: "#ffffff" },
            move: { speed: 3 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100 },
                push: { particles_nb: 4 }
            }
        }
    });
});
