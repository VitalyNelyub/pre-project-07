// console.log("HELLO");
import galleryItems from "/js/gallery.js";
// console.log(galleryItems);

const newsContainer = document.querySelector(".news__container");
const fetchBtn = document.querySelector(".render__btn", fetchNews);

fetchBtn.addEventListener("click", fetchNews);

// fetchNews();
function fetchNews() {
  const card = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="news__container--card">
        <img class="news__img" src="${preview}" alt="photo">
        <h3 class="news__title">8 tips for passing an online interview that will help you get a job</h3>
        <p class="news__inform">Before you start looking for a job, it is useful to familiarize yourself with the job prospects offered by these...</p>
        <div class="news__info">
        <p class="news__info--data"">DATA</p>
        <p class="news__info--more"">Read more</p>
        </div>
    </div>`
    )
    .join("");
  //   console.log(card);
  newsContainer.insertAdjacentHTML("beforeend", card);
}
