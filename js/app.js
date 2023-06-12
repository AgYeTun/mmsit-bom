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
// const startClock = document.querySelector("#startClock")
// const stopClock = document.querySelector("#stopClock")
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
