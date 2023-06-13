// //  ------ window properties ------  // //

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// ----------------scrollY------------------- //

// const exampleModal = new bootstrap.Modal("#exampleModal");
// // user scroll 75% -> display modal

// const h75 =
//   (document.body.getBoundingClientRect().height - window.innerHeight) * 0.75;

// const scrollTrigger = () => {
//   if (window.scrollY > h75) {
//     exampleModal.show();
//     window.removeEventListener("scroll", scrollTrigger);
//   }
// };
// // console.log(window.scrollY);
// window.addEventListener("scroll", scrollTrigger);

// ----------------resize------------------- //

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
// })

// ----------------online/offline------------------- //

// window.addEventListener("online", () => {
//   console.log("u are online")
// })
// window.addEventListener("offline", () => {
//   console.log("u are offline")
// })

// //  ------ window methods ------  // //

// ----------------setTimeout/setInterval/clearInterval------------------- //

// const run = () => console.log("i'm run");
// const clock = document.querySelector("#clock")
const startClock = document.querySelector("#startClock");
const stopClock = document.querySelector("#stopClock");
const to = document.querySelector("#to");
// const run = () => {
//   const d = new Date();
//   // console.log(d.getHours(), ":", d.getMinutes(), ":", d.getSeconds());
//   clock.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// };

// // setTimeout(run, 3000);
// let runClock;
// const stopRunClock = clearInterval(runClock) // state
// // clearInterval(runClock); // stop setInterval
// startClock.addEventListener("click", () => {
//   runClock = setInterval(run, 1000)
// })
// stopClock.addEventListener("click", stopRunClock)

// ----------------setTimeout/clearTimeout------------------- //

// let run;

// startClock.addEventListener("click", () => {
//   run = setTimeout(() => console.log("hello"), 3000);
// })

// stopClock.addEventListener("click", () => {
//   clearTimeout(run);
// })

// const test = (start, stop) => {
//   let i = start;
//   const run = setInterval(() => {
//     console.log("hello", ++i);
//     if (i === stop) {
//       clearInterval(run);
//     }
//   }, 1000);
// };

// ----------------open/close/scrollTo------------------- //

// startClock.addEventListener("click", () => {
//   const windowFeatures = "left=100,top=100,width=320,height=320";
//   const handle = window.open(
//     "https://www.mms-it.com",
//     "mozillaWindow",
//     windowFeatures
//   );
// });

// stopClock.addEventListener("click", () => {
//   close();
// });

// startClock.addEventListener("click", () => {
//   window.scrollTo(0, document.querySelector("#to").getBoundingClientRect().y);
// });

// ----------------getComputedStyle------------------- //

// console.log(window.getComputedStyle(startClock).backgroundColor)
// console.log(window.getComputedStyle(startClock).margin)

// ----------------others------------------- //

// screen
// location