let GPA = (...pointArgs) => {
    let sum = 0;
    
    pointArgs.forEach(point => {
        sum += parseFloat(point);
    });

    return (sum / pointArgs.length).toFixed(2);
}

document.getElementById("btnKhoi1").addEventListener("click", () => {
    let m = document.getElementById("inpToan").value,
        ph = document.getElementById("inpLy").value,
        ch = document.getElementById("inpHoa").value;
    document.getElementById("tbKhoi1").innerHTML = GPA(m, ph, ch);
})

document.getElementById("btnKhoi2").addEventListener("click", () => {
    let l = document.getElementById("inpVan").value,
        h = document.getElementById("inpSu").value,
        geo = document.getElementById("inpDia").value,
        en = document.getElementById("inpEnglish").value;
    document.getElementById("tbKhoi2").innerHTML = GPA(l, h, geo, en);
});
