const violet=document.querySelector(".violet");
const orange = document.querySelector(".orange");
const cyan=document.querySelector(".cyan");
const red=document.querySelector(".red");
const pink=document.querySelector(".pink");

const centeer = document.querySelector(".center");

const BgColor=(SelectedColor) => {
  return window.getComputedStyle(SelectedColor).backgroundColor;
};

var color =BgColor(orange);

orange.addEventListener("mouseenter",() => {
centeer.style.display='block';
centeer.style.background=color;
});

//Bettr code with all colors
// const colorDivs = document.querySelectorAll(".color");
// const center = document.querySelector(".center");

// const getBackgroundColor = (element) => {
//   return window.getComputedStyle(element).backgroundColor;
// };

// const addColorHoverListener = (colorDiv) => {
//   colorDiv.addEventListener("mouseenter", () => {
//     center.style.display = "block";
//     center.style.background = getBackgroundColor(colorDiv);
//   });

//   colorDiv.addEventListener("mouseleave", () => {
//     center.style.display = "none";
//   });
// };

// colorDivs.forEach((colorDiv) => {
//   addColorHoverListener(colorDiv);
// });
