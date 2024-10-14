gsap.from(".objectimg img",{
    opacity: 0,
    scale: 2,
    delay: 0.2,
    duration: 0.125
})

gsap.from(".content",{
    opacity: 0,
    y:300,
    delay: 0.2,
    duration:0.17
})
const mainSections = document.querySelectorAll("#all > div");

const rightArrows = document.querySelectorAll(".objectimg svg");

const leftArrows = document.querySelectorAll(".leftarrow");

gsap.registerPlugin();

function showSection(index) {
    // Hide all sections
    mainSections.forEach((section, i) => {
        if (i !== index) {
            gsap.to(section, { 
                opacity: 0, 
                display: "none", 
                duration: 0 });
        }
    });

    // Show the selected section
    gsap.to(mainSections[index], { 
        opacity: 1, 
        display: "block", 
        duration: 0 
    });
}

// Attach click event to the right arrows (next section)
rightArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        const nextIndex = (index + 1) % mainSections.length;
        showSection(nextIndex);
    });
});

// Attach click event to the left arrows (previous section)
leftArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        const prevIndex = (index - 1 + mainSections.length) % mainSections.length;
        showSection(prevIndex);
    });
});

// Initially show the first section
showSection(0);


gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("div[id^='main']");

sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            scroller:"body",
            start: "top 0%", // Trigger animation when the section is 75% from the top of the viewport
            end: "bottom 25%", // End animation when the section is 25% from the bottom of the viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave // Show markers for debugging (you can remove this in production)
        },
        opacity: 1,
        y: 50, // Move in from below
        duration: 0.5,
        ease: "power1.out"
    });
});
