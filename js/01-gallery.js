import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')
const markup = listMarkup(list);

function listMarkup() {
  const gallery = galleryItems
  .map((img) => `<li class='gallery__item'><a class="gallery__link" href="${img.original}"><img class = 'gallery__image' src=${img.preview} alt=${img.description} data-source=${img.original}></img></a></li>`)
  .join('');

list.insertAdjacentHTML('afterbegin', gallery)}
list.addEventListener('click', onClick)


function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG')
    return
  const originalImg = event.target.dataset.source
  const instance = basicLightbox.create(
    `<div class='gallery-modal'>
      <img src = '${originalImg}' width = '960'/>
    </div>`
    
  )
  instance.show()
  list.addEventListener("keydown", escClose)
  function escClose(event) {
    if (event.code === "Escape") {
      instance.close()
      list.removeEventListener("keydown", escClose)

    }
  }
 
   
  
  
  }


// function escClose(event) {
//   list.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   })
// }

// function escClose(event) {
//   if (event.code === "Escape") {
//     instance.close()
//   }
// }
