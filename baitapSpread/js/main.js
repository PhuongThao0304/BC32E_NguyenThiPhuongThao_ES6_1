const heading = document.querySelector(".heading");
let covertText = (text) => {
    return [...text].map((word) => `<span>${word}</span>`).join("");
};

heading.innerHTML = covertText(heading.innerText);
