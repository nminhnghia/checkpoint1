function giaithua(n){
    let giai_thua = 1;
    for(let i = 2; i <= n; i++) {
        giai_thua = giai_thua * i;
    }
    console.log(giai_thua)
}
let sotunhien = document.getElementById("sotunhien")

function submit() {
    giaithua(sotunhien.value)
}