// const div = document.querySelector(".contenu");

// const personnes = ["kamdjou", "Duplex", "Tony"];

//(personnes.forEach((personne) => {
//   div.innerHTML += `<p> ${personne} </p>`;
// });

// const link = document.createElement("a");
// link.href = "https://google.com";
// link.innerText = "aller a google";

// const body = document.querySelector("body");
// body.appendChild(link);

// console.log(link);

// const link = document.querySelector("a");

// const h1 = document.querySelector("h1");

// h1.style.color = "blue";
// h1.style.fontSize = "30px";

// h1.style.textTransform = "uppercase";
// console.log(h1.style);

// const p = document.querySelector("p");

// const mesClasses = ["error", "succes", "attention"];

// let index = 0;

// changeClasss = () => {
//   if (index > mesClasses.length - 1) {
//     index = 0;
//     p.setAttribute("class", "");
//   }

//   p.classList.add(mesClasses[index]);
//   console.log(index);
//   index++;
// };

// setInterval(changeClasss, 2000);

const list_para = document.querySelectorAll("p");

list_para.forEach((p) => {
  if (p.innerText.includes("erreur")) {
    p.classList.add("error");
  }

  if (p.innerText.includes("succes")) {
    p.classList.add("succes");
  }

  if (p.innerText.includes("attention")) {
    p.classList.add("attention");
  }
});
