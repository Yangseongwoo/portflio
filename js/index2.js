/* document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.eaf(time * 1000)
    });
    gsap.ticker.lagSmoothing(0);


    gsap.registerPlugin(ScrollTrigger);

    const stickySection = document.querySelector(".sticky")
    const stickyHeader = document.querySelector(".sticky-header")
    const cards = document.querySelectorAll(".card")
    const  stickyHeight = window.innerHeight * 5;

    const transforms = [
        [
            [10, 50, -10, 10],
            [20, -10, -45, 20],
        ],
        [
            [0, 47.5, -10, 15],
            [20, -10, -45, 20],
        ],
        [
            [0, 52.5, -10, 5],
            [15, -5, -40, 60],
        ],
        [
            [0, 50, 30, -80],
            [20, -10, 60, 5],
        ],
        [
            [0, 55, -15, 30],
            [25, -15, 60, 95],
        ],
    ];

    ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${stickyHeight}px`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
            const progress = self.progress

            const maxTranslate = stickyHeader.offsetWidth - window.innerWidth
            const translateX = -progress * maxTranslate;
            gsap.set(stickyHeader, { x: translateX });

            cards.forEach((card, index) => {
                const delay = index * 0.1125;
                const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

                if (cardProgress > 0) {
                    const cardStartX = 25;
                    const CardEndX = -650;
                    const yPos = transforms[index][0];
                    const rotations = transforms[index] [1];

                    const cardX = gsap.utils.interpolate(
                        cardStartX,
                        CardEndX,
                        cardProgress,
                    );

                    const yProgress = cardProgress * 3
                    const yIndex = Math.min(Math.floor(yProgress), yPos.length -2);
                    const YInterpolation = yProgress - yIndex;
                    const cardY = gsap.utils.interpolate(
                        yPos[yIndex],
                        yPos[yIndex + 1],
                        YInterpolation
                    );

                    const cardRotaion = gsap.utils.interpolate(
                        rotation[yIndex],
                        rotations[yIndex + 1],
                        YInterpolation
                    );

                    gsap.set(card, {
                        xPercent: cardX,
                        yPercent: cardY,
                        rotation: cardRotaion,
                        opacity: 1,
                    });
                } else {
                    gsap.set(card, { opacity: 0});
                }
            });
        },
    });
}); */