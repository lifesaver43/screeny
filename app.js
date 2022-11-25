const header = document.querySelector("header");
const uploadBox = document.querySelector(".box-main");
const btnUpload = document.querySelector(".box-main button");
const fileInput = document.querySelector(".box-main input");
const previewImg = document.querySelector("img");
const section = document.querySelector("section");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const mainBar = document.querySelector(".main-bar");
const downloadBtn = document.querySelector(".right button");


function loadFile(e) {
    const file = e.target.files[0];
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        header.classList.add("hide");
        section.classList.add("active");
        previewImg.classList.add("size"); 
        mainBar.style.backgroundColor = "cyan";
        mainBar.style.padding = horizontal.value + "px";
    })
}

fileInput.addEventListener("change", loadFile)
uploadBox.addEventListener("click", () => fileInput.click());

horizontal.oninput = function() {
    mainBar.style.backgroundColor = "cyan";
    // previewImg.style.padding = horizontal.value + "px";
    mainBar.style.paddingRight = horizontal.value + "px";
    mainBar.style.paddingLeft = horizontal.value + "px";
}

vertical.oninput = function() {
    mainBar.style.backgroundColor = "cyan";
    // previewImg.style.padding = vertical.value + "px";
    mainBar.style.paddingTop = this.value + "px";
    mainBar.style.paddingBottom = this.value + "px";
}

function downloadMockUp() {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    
}

downloadBtn.addEventListener("click", downloadMockUp);



