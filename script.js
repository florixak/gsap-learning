import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photosContainer = document.querySelector(".photos");
const photoCount = 20;

for (let i = 1; i <= photoCount; i++) {
  const img = document.createElement("img");
  img.src = `./assets/omori.png`;
  img.alt = `Photo ${i}`;
  img.style.position = "absolute";
  img.style.objectFit = "contain";
  img.style.width = "200px"; // Set a fixed width for the images
  img.style.height = "200px"; // Set a fixed height for the images
  img.style.opacity = "0.8"; // Set a default opacity
  img.style.borderRadius = "10px"; // Add some border radius for aesthetics
  img.style.left = `${Math.random() * 100}vw`;
  img.style.top = `${Math.random() * 100}vh`;
  photosContainer.appendChild(img);
}

const landingAnimation = gsap.timeline({
  defaults: { duration: 1.5, ease: "power3.out" },
});

landingAnimation
  .to("h1", {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    duration: 2,
    ease: "elastic.out(1, 0.5)",
  })
  .fromTo(
    ".photos img",
    { opacity: 0, y: 50, scale: 0.5 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "bounce.out",
    },
    ">"
  );

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
    start: "top top", // when the top of the content hits the top of the viewport
    end: "+=600",
    scrub: true,
    pin: true,
  },
});

tl.fromTo(
  "#omori",
  {
    y: -150,
    scale: 0.1,
    rotateY: -90,
    opacity: 0.7,
    filter: "blur(10px)",
  },
  {
    y: 0,
    scale: 1,
    rotateY: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 4,
    ease: "elastic.out(1, 0.5)",
  }
).fromTo(
  ".text h2, .text p",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power1.out",
  },
  "<"
);
