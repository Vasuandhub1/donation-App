gsap.to(".navbar" ,{
    backgroundColor:"#9DB2BF",     
     height:"55px",
     duration:0.5,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor:"#27374D",
    
    
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from(".about-us img, .about-us-in",{
    y:80,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger: ".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub: 6,

    }
})