// Получение элемента карточки
function getCardEl() {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  return cardEl;
}

// Получение элемента заголовка
function getTiteEl(text: string) {
  const titleEl = document.createElement("h1")
  titleEl.textContent = text
  titleEl.classList.add("card__title")
  return titleEl
}

// Получение элемента описания
function getDescEl(text: string) {
  const descEl = document.createElement("p");
  descEl.textContent = text;
  descEl.classList.add("card__description");

  return descEl;
}

// Получение элемента блока для центрирования
function getCenterWrapEl() {
  const buttonsWrapEl = document.createElement("div");
  buttonsWrapEl.classList.add("center-wrap");

  return buttonsWrapEl;
}

// Получение элемента кнопки
function getButtonEl(text: string) {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.classList.add("btn");

  return buttonEl;
}

// Получение элемента загрузки
function getSpinnerEl() {
  const spinnerEl = document.createElement("div");
  spinnerEl.classList.add("intro-spinner");

  for (let i = 0; i <= 12; i++) {
    const divEl = document.createElement("div");
    spinnerEl.appendChild(divEl);
  }

  return spinnerEl;
}

// Получение элемента видео
function getVideoEl(): HTMLVideoElement {
  const videoEl = document.createElement("video");
  videoEl.classList.add("video-player");

  return videoEl;
}

// Получение элемента списка
function getList(
  list: (HTMLElement | string)[] | HTMLElement | string = [],
  className: string
): HTMLUListElement {
  const listEl = document.createElement("ul");
  listEl.classList.add(className);

  if (Array.isArray(list)) {
    for (const item of list) {
      const liEl = document.createElement("li");
      liEl.classList.add(`${className}-item`);

      liEl.append(item);
      listEl.appendChild(liEl);
    }
  } else {
    const liEl = document.createElement("li");
    liEl.classList.add(`${className}-item`);

    liEl.append(list);
    listEl.appendChild(liEl);
  }

  return listEl;
}

// Получение контейнера видео
function getVideoContainerEl(): HTMLDivElement {
  const videoContainerEl = document.createElement("div");
  videoContainerEl.classList.add("video-container");

  return videoContainerEl;
}

// Получение панели управления
function getVideoHudEl(): HTMLDivElement {
  const hudEl = document.createElement("div");
  hudEl.classList.add("video-hud");

  return hudEl;
}

// Получение элемента кнопки
function getPlayEl(): HTMLDivElement {
  const playEl = document.createElement("div");
  playEl.className = "video-hud__element video-hud__action video-hud__action-play";

  return playEl;
}

// Получение элемента текущего времени
function getCurrentTimeEl(): HTMLDivElement {
  const currentTimeEl = document.createElement("div");
  currentTimeEl.className = "video-hud__element video-hud__curr-time";

  return currentTimeEl;
}

// Получение элемента прогресс бара
function getProgressEl(): HTMLProgressElement {
  const progressEl = document.createElement("progress");
  progressEl.className = "video-hud__element video-hud__progress-bar";
  progressEl.value = 0;
  progressEl.setAttribute("max", "100");

  return progressEl;
}

// Получение элемента масксимальной длительности
function getDurationEl(): HTMLDivElement {
  const durationEl = document.createElement("div");
  durationEl.className = "video-hud__element video-hud__duration";

  return durationEl;
}

// Получение элемента фулл скрина
function getFullscreenBtnEl(): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.className = "video-hud__element video-hud__action video-hud__action-fullscreen";
  btn.title = "Fullscreen";
  btn.innerHTML = `
    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5858 5H14V3H21V10H19V6.41421L14.7071 10.7071L13.2929 9.29289L17.5858 5ZM3 14H5V17.5858L9.29289 13.2929L10.7071 14.7071L6.41421 19H10V21H3V14Z"></path></svg>
  `;

  return btn;
}


// Получение элемента разделителя
function getSeparatorEl(): HTMLSpanElement {
  const spanEl = document.createElement("span");
  spanEl.className = "video-hud__element video-hud__separator"
  spanEl.textContent = "/"

  return spanEl;
}

// Получение элемента обёртки для видео
function getVideoWrapEl(): HTMLDivElement {
  const videoWrapEl = document.createElement("div");
  videoWrapEl.classList.add("card__wrapper");

  return videoWrapEl;
}

// Получение контейнера для информации
function getInfoContainerEl(): HTMLDivElement {
  const infoContainerEl = document.createElement("div");
  infoContainerEl.classList.add("video-info");

  return infoContainerEl;
}

// Получение элемента карточки
function getCardOptionEl(): HTMLDivElement {
  const spanEl = document.createElement("div");
  spanEl.classList.add("card-option");

  return spanEl;
}

// Получение элемента управления
function getQualityContainerEl(): HTMLDivElement {
  const qualityContainerEl = document.createElement("div");
  qualityContainerEl.className = "video-hud__element video-hud__quality";

  return qualityContainerEl;
}

// Получение элемента управления качества
function getQualityEl(): HTMLSpanElement {
  const qualityEl = document.createElement("span");
  qualityEl.classList.add("video-hud__quality-note");
  qualityEl.textContent = "Auto";

  return qualityEl;
}

export {
  getCardEl,
  getTiteEl,
  getDescEl,
  getCenterWrapEl,
  getButtonEl,
  getSpinnerEl,
  getVideoEl,
  getList,
  getVideoContainerEl,
  getVideoHudEl,
  getPlayEl,
  getCurrentTimeEl,
  getProgressEl,
  getDurationEl,
  getFullscreenBtnEl,
  getSeparatorEl,
  getVideoWrapEl,
  getInfoContainerEl,
  getCardOptionEl,
  getQualityContainerEl,
  getQualityEl,
}
