export function isHTMLElement(element: HTMLElement | null): element is HTMLElement {
  return element instanceof HTMLElement;
}

export function isVideoElement(element: HTMLElement): element is HTMLVideoElement {
  return element instanceof HTMLVideoElement;
}

export function isButtonElement(element: HTMLElement): element is HTMLButtonElement {
  return element instanceof HTMLButtonElement;
}