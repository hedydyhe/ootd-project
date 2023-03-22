const firstImg = document.querySelector("#first-img");
const mapTop = document.querySelector("#top");
const topInform = document.querySelector(".first-img__column");

function onImgClick() {
  topInform.classList.remove("hidden");
}

mapTop.addEventListener("click", onImgClick);

// const bgrImages = ["2.png", "3.png", "4.jpeg"];

// const randomBgrImg = bgrImages[Math.floor(Math.random() * bgrImages.length)];

// const bgrImg = document.createElement("img");

// bgrImg.src = `img/${randomBgrImg}`;

// document.body.appendChild(bgrImg);

