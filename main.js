// const knopka = document.getElementById("btn");
const from = document.getElementById("form");

const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");

const btnPlyus = document.getElementById("plyus");
const soz = document.getElementById("text");

let count = 0;

from.addEventListener("submit", function(refreshBolma){
  refreshBolma.preventDefault();

  const inputningQiymati = Number(input.value);

  console.log( inputningQiymati);

  count = inputningQiymati
    soz.textContent = count;

  soz.textContent = inputningQiymati;

  input.value = "";
});

btnPlyus.addEventListener("click", function() {
  count++;

  console.log(count);
  soz.textContent = count;
});

btnMinus.addEventListener("click", function(){
  count--;
  console.log(count);

  soz.textContent = count;
});

// from.addEventListener("submit", (Jahongir) => {
//   Jahongir.preventDefault();

//   console.log(knopka);
// });

// knopka.addEventListener("click", function() {
//   console.log("Button Bosildi");

//   const newTag = document.createElement("h1");

//   newTag.textContent = "Bosildi";
//   document.body.appendChild(newTag);

//   // const userName = prompt("Ismingizni kiriting");

//   // const newTag = document.createElement("h1");

//   // newTag.textContent = userName;
//   // document.body.appendChild(newTag);
// });