const container = document.getElementById("container");

for ( let i = 1; i <= 100; i++) {

    let testo;
    
    if ( i % 3 == 0 && i % 5 == 0 ) {
       testo = "FizzBuzz";

    } else if (i % 3 == 0) {
        testo = "Fizz";

    } else if (i % 5 == 0) {
       testo = "Buzz";

    } else {
        testo = i;

    }

    const box = document.createElement("div");
    box.innerHTML = testo;
    box.classList.add("box");
    container.append (box);
   
}
