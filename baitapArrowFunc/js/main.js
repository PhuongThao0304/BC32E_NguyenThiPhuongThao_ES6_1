const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let colorContainer = document.getElementById("colorContainer");

let renderColorBtn = () => {
    for (let i = 0; i < colorList.length; i++){
        const activeClass = (i == 0) ? ' active' : '';
        colorContainer.innerHTML += "<button class='color-button " + colorList[i] + activeClass + "'></button>";
    } 
}
renderColorBtn();

let colorBtnList = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");

let changeColor = (color, i) => {
    colorBtnList[i].classList.add("active");
    house.className = "house " + color;
};
    
for (let i = 0; i < colorBtnList.length; i++){
    colorBtnList[i].addEventListener("click", () => {
        document.querySelector(".color-button.active").classList.remove("active")
        changeColor(colorList[i], i);
    });
}