let colors = [
  "Orangered",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Cyan",
  "DodgerBlue",
  "Violet",
  "Navy",
  "Purple",
  "YellowGreen",
  "OrangeRed",
  "SlateBlue",
  "Salmon",
  "Crimson",
  "HotPink",
  "Magenta",
];
let i = 0;

document.querySelector("#submit").addEventListener("click", () => {
  if (i > colors.length - 1) i = 0;
  document.body.style.backgroundColor = colors[i++];
});
