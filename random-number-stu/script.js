function random() {
    var inputmin = document.getElementById("min");
    var inputmax = document.getElementById("max");
    var KQmin = Number(inputmin.value);
    var KQmax = Number(inputmax.value);
    var min = KQmin;
    var max = KQmax;
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    var para = document.getElementById("result");
    para.innerHTML = String(random);
}
