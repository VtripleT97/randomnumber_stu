function random(): void {
    let inputmin: HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let inputmax: HTMLInputElement = <HTMLInputElement>document.getElementById("max");

    let KQmin: number = Number(inputmin.value);
    let KQmax: number = Number(inputmax.value);

    let min: number = KQmin;
    let max: number = KQmax;

    let random: number = Math.floor(Math.random() * (max - min + 1) + min);

    let para: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    para.innerHTML = String(random);
}