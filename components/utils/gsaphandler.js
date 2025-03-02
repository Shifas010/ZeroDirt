
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const Gsap = () => {
    gsap.registerPlugin(ScrollTrigger);

    const GsapTB = () => {
        const played = gsap.utils.toArray('.gsapTB');
        played.forEach((box)=>{

            gsap.from(played[0], {
                y: -300,
                scrollTrigger: {
                    trigger: played[0],
                    toggleActions: 'play none none reset',
                },
            })
        })
       


    }

    const GsapBT = () => {
        const played = gsap.utils.toArray('.gsapBT');

        gsap.from(played[0], {
            y: 300,
            scrollTrigger: {
                trigger: played[0],
                toggleActions: 'play none none reset',
            },
        })

    }

    const GsapVisiblity = () => {
        gsap.from(".visiblity", { opacity: 0, duration: 3 })


    }
    const SlideSide = () => {
        const tl = gsap.timeline()
        tl.to(".box", { x: 0 });
        tl.from(".box", { x: 100 });
    }

  
    return {
        GsapBT, GsapTB, GsapVisiblity, SlideSide
    }

}

