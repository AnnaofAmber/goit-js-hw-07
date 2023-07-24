import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')
const markup = listMarkup(list);

function listMarkup() {
  const gallery = galleryItems
  .map((img) => `<li class='gallery__item'><a class="gallery__link" href="${img.original}"><img class = 'gallery__image' src=${img.preview} alt=${img.description}></img></a></li>`)
  .join('');

    list.insertAdjacentHTML('afterbegin', gallery)
}

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
})



