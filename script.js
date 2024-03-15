let menu = document.querySelector(".header .menu");

document.querySelector("#menu-btn").onclick = () => {
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});

document
  .querySelectorAll(".view-property .details .thumb .small-images img")
  .forEach((images) => {
    images.onclick = () => {
      src = images.getAttribute("src");
      document.querySelector(
        ".view-property .details .thumb .big-image img"
      ).src = src;
    };
  });

document.querySelectorAll(".faq .box-container .box h3").forEach((headings) => {
  headings.onclick = () => {
    headings.parentElement.classList.toggle("active");
  };
});

let c = document.querySelectorAll('input[type="number"]');
console.log(c);

document.getElementById("searchOP").addEventListener("click", function (event) {
  document.querySelector(".center").classList.toggle("layer");
  document.querySelector(".pop-contener").classList.toggle("pop-down");
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  document.querySelector(".center").classList.remove("layer");
  document.querySelector(".pop-contener").classList.remove("pop-down");
});

document
  .getElementById("pop-contener")
  .addEventListener("click", function (event) {
    // document.querySelector(".center").classList.add("layer");
    // document.querySelector(".pop-contener").classList.add("pop-down");
    event.stopPropagation();
  });
