$(function(){
    $(window).scroll(function(){
        $('p').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if(scroll > elemPos - windowHeight + 200){
                $(this).addClass("active");
            }
        });
    });
});

//タイトル
title = new TimelineMax()
title.fromTo(".title",1.5,{opcity: 0},{opacity: 1})
.staggerFromTo('.title-letters',0.5,{opacity: 0},{opacity: 1}, 0.05);

// グループ２
gsap.to('.page-wrapper',{
    "background": "#000",
    color: "#fff",

    scrollTrigger:{
        trigger: ".group-2",
        start: "top center",
        toggleActions: "play pause resume reset", 
    }
});
gsap.to('.group-2',{
    opacity:1,
    scrollTrigger:{
        trigger: ".group-2",
        start: "top center",
        toggleActions: "play pause resume reset", 
    }
});

// グループ３
gsap.to(".page-wrapper",{
    "background": "#C9CCD3",
    scrollTrigger:{
        trigger: ".group-3",
        start: "top center",
        toggleActions: "play pause resume reset",
    }
});
gsap.to('.group-3',{
    opacity: 1,
    duration: 1,
    scrollTrigger:{
        trigger: ".group-3",
        start: "top center",
        toggleActions: "play pause resume reset",
    }
})

// グループ４
gsap.to('.group-5',{
    "display": "block",
    scrollTrigger:{
        trigger: ".group-4",
        start: "center center",

    }
})

// グループ５
gsap.to('.page-wrapper',{
    "background": "#fff",
    scrollTrigger:{
        trigger: ".group-5",
        start: "top center",
        toggleActions: "play pause resume reset",
        //markers: true,
    }
})

// キーワード
key = gsap.timeline();
key.staggerFromTo('.letters',1,{opacity:0, x:-5},{opacity:1, x:0},0.2)
   .fromTo('.letters',0.5,{"letter-spacing":0},{"letter-spacing":"0.5em", ease: Circ. easeOut},"+=0.2")
   .to('.group-4',0.3,{"display": "block"});

ScrollTrigger.create({
    animation: key,
    trigger: ".keywords",
    start: "center bottom",
    //markers: true,
});