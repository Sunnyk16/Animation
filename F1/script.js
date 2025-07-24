var t1 = gsap.timeline();

t1.to("#nav",{

})

t1.from("h2",{
    duration: 1,
    opacity: 0,
    y: -50, 
    delay: 0.5,
})
t1.from("h4",{
    duration: 1,
    opacity: 0,
    y: -50,
    stagger:0.3,
})