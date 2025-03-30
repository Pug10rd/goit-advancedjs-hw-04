import { refs } from './refs';
import { lightbox } from './simpleLightbox';

export const renderGallery = images => {
  const itemMarkup = ({
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  }) => `
      <li class="card card-set-item">
            <a href="${largeImageURL}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${webformatURL}"
                  alt="${tags}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${likes}</div>
                <div class="item"><span class="accent">Views</span>${views}</div>
                <div class="item"><span class="accent">Comments</span>${comments}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${downloads}
                </div>
              </div>
            </a>
          </li>
      `;
  const galleryMarkup = images.map(image => itemMarkup(image)).join('');

  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  lightbox.refresh();
};
