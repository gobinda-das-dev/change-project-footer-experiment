document.body.addEventListener('pointermove', ({ x, y }) => {
   const rx = gsap.utils.mapRange(0, window.innerWidth, -30, 30, x);
   
   gsap.to('.project', {
      x, y,
      rotation: rx
   })


   if(x > window.innerWidth/2) {
      gsap.to('.clippy', {
         clipPath: 'inset(0 100% 0 0)'
      })
   } else {
      gsap.to('.clippy', {
         clipPath: 'inset(0 0% 0 0)'
      })
   }
})

document.body.addEventListener('pointerenter', () => {
   gsap.to('.project', { clipPath: 'inset(0%)', duration: 0.4 })
   gsap.to('.project >*', { scale: 1, duration: 0.4 })
})
document.body.addEventListener('pointerleave', () => {
   gsap.to('.project', { clipPath: 'inset(50%)', duration: 0.4 })
   gsap.to('.project >*', { scale: 1.2, duration: 0.4 })
})