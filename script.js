function yes() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

function openMsg() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
}

const noBtn = document.getElementById("noBtn");
let size = 18;

noBtn.addEventListener("click", () => {
  size -= 2;
  noBtn.style.fontSize = size + "px";
  if (size <= 5) {
    noBtn.style.display = "none";
  }
});
