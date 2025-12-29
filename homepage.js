let user = localStorage.getItem("loggedUser");

if(!user){
    window.location.href = "index.html"
}

document.getElementById("displayUser").innerText = user;

let rightClick = document.getElementById("RightClick");
let leftClick = document.getElementById("LeftClick");

let boxes = document.querySelectorAll("#Section > div");

let index = 0;

function showBox(i) {
    boxes.forEach(box => box.style.display = "none");
    boxes[i].style.display = "block";
}

showBox(index);

// RIGHT CLICK
rightClick.addEventListener("click", () => {
    index++;
    if (index >= boxes.length) {
        index = 0;
    }
    showBox(index);
});

// LEFT CLICK
leftClick.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = boxes.length - 1;
    }
    showBox(index);
});