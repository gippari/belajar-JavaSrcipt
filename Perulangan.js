
function tampilkanAngka() {
    let angka = "";

    for (let i = 1; i <= 100; i++) {
        angka += i + "<br>";
    }

    document.getElementById("hasil").innerHTML = angka;
}
