import gsap from "gsap";

const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power1.inOut",
    stagger: {
      amount: 0.5,
      from: "start",
    },
  },
});
tl.from(".box", {
  x: -100,
  opacity: 0,
})
  .to(".box", {
    scale: 1.2,
    backgroundColor: "#ff0000",
  })
  .to(".box", {
    scale: 1,
    backgroundColor: "#00ff00",
  })
  .to(".box", {
    rotation: 360,
    backgroundColor: "#0000ff",
  });

tl.from(
  ".text",
  {
    y: 50,
    opacity: 0,
  },
  ">" // Align with the previous animation's end
).to(".text", {
  scale: 1.2,
  color: "#ff0000",
});
