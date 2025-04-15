import * as component from "./components.ts";
import { isHTMLElement } from "../utils/typeGuards.ts";
import initHls from "./initHls.ts";

export default function createHomeCard(containerEl: HTMLElement | null) {
  const cardEl = component.getCardEl();
  cardEl.classList.add("card--flexed");

  const centerWrapEl = component.getCenterWrapEl();

  const titleEl = component.getTiteEl("Видео-плеер");
  const descriptionEl = component.getDescEl("Домашнее задание CDNvideo. Фронтенд")

  const videoWrapEl = component.getVideoWrapEl();
  const videoContainerEl = component.getVideoContainerEl();
  const videoEl = component.getVideoEl();

  const videoHudEl = component.getVideoHudEl();
  const playBtnEl = component.getPlayEl();
  const currentTimeEl = component.getCurrentTimeEl();
  currentTimeEl.textContent = "00:00";

  const separatorEl = component.getSeparatorEl();
  const progressEl = component.getProgressEl();
  const durationEl = component.getDurationEl();
  const qualityContainerEl = component.getQualityContainerEl();
  const qualityEl = component.getQualityEl();
  const fullscreenBtnEl = component.getFullscreenBtnEl();

  const infoContainerEl = component.getInfoContainerEl();
  const bufferSizeEl = component.getCardOptionEl();
  bufferSizeEl.classList.add("card-option__buffer-note");
  const currentLevelEl = component.getCardOptionEl();
  currentLevelEl.classList.add("card-option__level-note");

  const infoList = component.getList([bufferSizeEl, currentLevelEl], "video-info__list");

  playBtnEl.addEventListener("click", videoAct);

  videoEl.addEventListener("click", videoAct);
  videoEl.addEventListener("loadedmetadata", setDuration);
  videoEl.addEventListener("timeupdate", videoProgress);
  qualityEl.addEventListener("click", toggleQuality);

  progressEl.addEventListener("click", videoChangeTime);

  fullscreenBtnEl.addEventListener("click", toggleFullscreen);

  centerWrapEl.append(titleEl, descriptionEl);

  qualityContainerEl.appendChild(qualityEl);

  videoHudEl.append(
    playBtnEl,
    currentTimeEl,
    separatorEl,
    durationEl,
    progressEl,
    qualityContainerEl,
    fullscreenBtnEl
  );

  videoContainerEl.append(videoEl, videoHudEl);
  infoContainerEl.appendChild(infoList);

  videoWrapEl.append(videoContainerEl, infoContainerEl);

  cardEl.append(centerWrapEl, videoWrapEl);

  initHls(videoEl);

  if (isHTMLElement(containerEl)) {
    containerEl.append(cardEl);
  }

  function videoAct(): void {
    if (videoEl.paused) {
      videoEl.play();
      playBtnEl.setAttribute("class", "video-hud__element video-hud__action video-hud__action-pause");
    } else {
      videoEl.pause();
      playBtnEl.setAttribute("class", "video-hud__element video-hud__action video-hud__action-play");
    }

    if (durationEl.textContent === "00:00") {
      setDuration();
    }
  }

  function videoTime(time: number): string {
    const totalSeconds = Math.floor(time);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesVal = minutes < 10 ? "0" + minutes : minutes.toString();
    const secondsVal = seconds < 10 ? "0" + seconds : seconds.toString();

    return `${minutesVal}:${secondsVal}`;
  }

  function videoProgress() {
    if (!videoEl.duration || isNaN(videoEl.duration)) {
      progressEl.setAttribute("value", "0");
      currentTimeEl.innerHTML = videoTime(0);

      return;
    }

    const progress = (videoEl.currentTime / videoEl.duration) * 100;
    progressEl.setAttribute("value", progress.toFixed(2));
    currentTimeEl.innerHTML = videoTime(videoEl.currentTime);
  }

  function videoChangeTime(e: MouseEvent) {
    const rect = progressEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const progress = mouseX / (rect.width / 100);
    videoEl.currentTime = videoEl.duration * (progress / 100);
  }

  function toggleFullscreen() {
    videoContainerEl.classList.toggle("fullscreen-mode");
    videoHudEl.classList.toggle("fullscreen-mode");
  }

  function setDuration() {
    durationEl.textContent = videoTime(videoEl.duration);
  }

  function toggleQuality() {
    const qualityList = document.querySelector<HTMLUListElement>(".quality-list");

    qualityList?.classList.toggle("active")
  }
}
