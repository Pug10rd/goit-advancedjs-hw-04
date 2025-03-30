import { refs } from './js/refs';
import { handleImagesSearch, handleLoadMore } from './js/handlers';
import LoadMoreButton from './js/services/ButtonService';

refs.form.addEventListener('submit', handleImagesSearch);

const loadMoreButton = new LoadMoreButton(refs.loadMore);

refs.loadMore.addEventListener('click', handleLoadMore);

export { loadMoreButton };
