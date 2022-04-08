//анимация при скролле до элемента
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

//выбор расцветки
const colorBtnWhite = document.querySelector(".coloration__button_white");
const colorBtnGrey = document.querySelector(".coloration__button_grey");
const colorBtnBlack = document.querySelector(".coloration__button_black");
const colorBtnLiteBrown = document.querySelector(".coloration__button_light-brown");
const colorBtnBrown = document.querySelector(".coloration__button_brown");
const colorBtnPink = document.querySelector(".coloration__button_pink");
const colorBtnBlue = document.querySelector(".coloration__button_blue");

const colorImages = document.querySelectorAll(".coloration__image");

colorBtnWhite.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/white/${number+1}.jpg`;
  });
});
colorBtnGrey.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/grey/${number+1}.jpg`;
  });
});
colorBtnBlack.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/black/${number+1}.jpg`;
  });
});
colorBtnLiteBrown.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/light-brown/${number+1}.jpg`;
  });
});
colorBtnBrown.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/brown/${number+1}.jpg`;
  });
});
colorBtnPink.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/pink/${number+1}.jpg`;
  });
});
colorBtnBlue.addEventListener("click", () => {
  colorImages.forEach((e , number) => {
    e.src = `./images/coloration/blue/${number+1}.jpg`;
  });
});
