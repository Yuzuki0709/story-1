gsap.to('.page-wrapper',{
    scrollTrigger: {
        trigger: ".group-2",
        start: "top center",
        toggleActions: "play pause resume reset",        
        markers: true,
    },
    //"background-image": "linear-gradient(to right, #434343 0%, black 100%)",    
    "background-color": "#000",
    color: "#fff",
});
gsap.to('.group-2',{
    scrollTrigger: {
        trigger: ".group-2",
        start: "top center",
        toggleActions: "play pause resume reset",        
        markers: true,
    },
    opacity: 1,    
});



gsap.to('.page-wrapper',{
    scrollTrigger: {
        trigger: ".group-3",
        start: "top center",
        toggleActions: "play pause resume reset",        
        markers: true,
    },
    "background": "#C9CCD3",
    "background-image": "linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%)",
    "background-blend-mode": "lighten",    
    color: "#000",
});

const tl = gsap.timeline()
tl.fromTo(".background",3,{background: "#C9CCD3"},{background: "#000"})
.addLabel("dark")
.staggerFromTo(".letters",0.5, {opacity:0, x:-5}, {opacity: 1, x:0},0.05, "dark+=0.5")
.fromTo(".background",2,{background: "#000", color: "#fff"}, {background: "#fff", color: "#000"})
.addLabel("open")
.fromTo(".page-wrapper", 0.5,{background: "#C9CCD3"},{background: "#fff"}, "open+=0.5")
.fromTo(".group-4",0.5,{display: "none", opacity: 0},{display: "block",opacity: 1}, "open+=0.5")
.fromTo(".group-5",0.5,{display: "none"},{display: "block"});



ScrollTrigger.create({
        animation: tl,
        trigger: ".background",
        start: "top top",
        markers: true,
        //pin: true,
        // anticipatePin: 1,
});


