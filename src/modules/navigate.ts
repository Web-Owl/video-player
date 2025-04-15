import * as component from './components.ts';
import { isHTMLElement } from '../utils/typeGuards.ts';

export async function navigate() {
  const appEl = document.getElementById('app');

  if (isHTMLElement(appEl)) {
    appEl.innerHTML = '';

    const spinnerEl = component.getSpinnerEl();
    appEl.appendChild(spinnerEl);

    const homeCard = await import('./homeCard.ts');
    homeCard.default(appEl);
    spinnerEl.remove();
  }
}