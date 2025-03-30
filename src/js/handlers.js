import { refs } from './refs';
import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './pixabay-api';
import { renderGallery } from './render-functions';
import LoadMoreButton from './services/ButtonService';

const iziToastOptions = {
  progressBarColor: '#B51B1B',
  backgroundColor: '#EF4040',
  maxWidth: '432px',
};

const loadMoreButton = new LoadMoreButton(refs.loadMore);

let page = 1;
const perPage = 20;
let query = '';

const showToast = message => {
  iziToast.show({ ...iziToastOptions, message });
};

export async function handleImagesSearch(e) {
  e.preventDefault();

  refs.gallery.innerHTML = '';

  query = refs.form.elements.search.value.trim();

  if (!query) {
    showToast('Oops! Looks like you forgot to enter something.');
    return;
  }

  refs.loader.classList.remove('visually-hidden');

  console.log(refs.form.elements.search.value.trim());

  refs.form.elements.search.value = '';

  console.log(refs.form.elements.search.value.trim());

  try {
    console.log(`input is ${query}`);

    const data = await getImages({ query });
    if (data.hits.length === 0) {
      showToast(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      loadMoreButton.hide();
      return;
    } else if (data.hits.length <= perPage) {
      loadMoreButton.hide();
    }
    renderGallery(data.hits);
    loadMoreButton.show();
    loadMoreButton.enable();
  } catch (err) {
    showToast(`Sorry, something went wrong: ${err}`);
  } finally {
    refs.loader.classList.add('visually-hidden');
    page = 1;
  }
}

export async function handleLoadMore() {
  if (!query) {
    showToast('No search query found. Please try again!');
    return;
  }

  page += 1;
  loadMoreButton.disable();

  try {
    const data = await getImages({ query, page, perPage });

    if (!data || data.hits.length === 0) {
      loadMoreButton.hide();
      loadMoreButton.disable();
      showToast("We're sorry, but you've reached the end of search results.");
      return;
    }

    renderGallery(data.hits);

    loadMoreButton.enable();
  } catch (error) {
    showToast(`Error loading more images: ${error}`);
  }
}
