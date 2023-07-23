function repeat(str, times) {
    let new_str = "";
    while (times--) new_str += str;
    return new_str;
}


function tamgiac(n) {
    /*

        *
       * *
      *   *
     *     *
    *********

    */
    console.log(repeat(" ", --n) + "*")
    for(let i = 1; i<n; i++) {
        console.log(repeat(" ", n-i) + "*" + repeat(" ", i * 2 - 1) + "*")
    }
    console.log(repeat("*", (n+1)*2-1))
}

let sotunhien = document.getElementById("sotunhien")

function submit() {
    tamgiac(sotunhien.value)
}