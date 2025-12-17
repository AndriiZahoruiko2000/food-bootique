import { getProductById } from '../api/food-api';
import { addToCart } from '../helpers/helpers';
import { createTemplateModal } from '../helpers/render-function';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
//!================================================

let instance;

export async function handleModalOpenClick(e) {
  if (e.target === e.currentTarget) return;
  if (e.target.closest('button')) return;

  const liElem = e.target.closest('li');
  if (!liElem) return;
  const productId = liElem.dataset.productId;
  if (!productId) return;

  const response = await getProductById(productId);
  const markupModal = createTemplateModal(response);

  openModal(markupModal);
}

export function openModal(markupModal) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <button class="modal__close" type="button" aria-label="Close dialog">
          &times;
        </button>
        ${markupModal}
    </div>
`,
    {
      onShow: inst => {
        document.body.classList.add('is-modal-open');
        inst.element().addEventListener('click', handleModalClick);
        document.addEventListener('keydown', handleKeydown);
      },
      onClose: inst => {
        document.body.classList.remove('is-modal-open');
        inst.element().removeEventListener('click', handleModalClick);
        document.removeEventListener('keydown', handleKeydown);
      },
    }
  );

  instance.show();
}

function handleModalClick(e) {
  if (e.target.closest('.modal__close')) {
    hideModal();
    return;
  }

  const actionButton = e.target.closest('.modal-card__button');
  if (!actionButton) return;

  const productId = actionButton.dataset.id;
  const hasItem = addToCart(productId);
  const label = hasItem ? 'Remove from cart' : 'Add to cart';

  document
    .querySelectorAll(`button[data-id="${productId}"]`)
    .forEach(button => {
      button.textContent = label;
    });
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    hideModal();
  }
}

export function hideModal() {
  instance?.close();
}
