function loco(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })
    
    gsap.registerPlugin(ScrollTrigger)
    
    
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy(
        '#main', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    
    
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    
    
    ScrollTrigger.refresh()
}
loco();
gsap.to("#bottle",{
    scrollTrigger:{
       scroller:"#main" ,
       trigger:"#bottle",
       start:"top 1%",
       marksers: true,
       pin:true,
       scrub: 0.5,
       end:"top -1000%"

    },
    rotate:"-20deg"

    
})
gsap.to("#bottle",{
    scrollTrigger:{
       scroller:"#main" ,
       trigger:"#bottle",
       start:2800,
       marksers: true,
       scrub:2,
       end:"top 2%",
    
      

    },
    opacity:0,
})
gsap.to("#bottle",{
    scrollTrigger:{
       scroller:"#main" ,
       trigger:"#bottle",
       start:"#fifth bottom 0",
       marksers: true,
       end:"top 2%",
       scrub:4

    },
    opacity:1,
    rotate:0
    // onComplete: function(){
    //  document.querySelector("#bottle").style.rotate = "0"}
  
    
})
