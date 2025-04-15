import Hls from "hls.js";
import { isHTMLElement } from "../utils/typeGuards";

export default function initHls(videoEl: HTMLVideoElement) {
  if (Hls.isSupported()) {
    const hls = new Hls();

    let bufferSize = 0;
    hls.loadSource("https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8");
    hls.attachMedia(videoEl);

    hls.on(Hls.Events.BUFFER_APPENDING, function(_, { data }) {
      bufferSize += data.byteLength;
      updateBufferSize();
    });

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      const qualityContainer = document.querySelector<HTMLDivElement>(".video-hud__element.video-hud__quality");
      const qualityNoteEl = document.querySelector<HTMLSpanElement>(".video-hud__quality-note");

      if (isHTMLElement(qualityContainer) && isHTMLElement(qualityNoteEl)) {
        const qualityList = document.createElement("ul");
        qualityList.classList.add("quality-list");

        qualityContainer.onclick = () => {
          hls.currentLevel = -1;
        };

        hls.levels.forEach((level, index) => {
          const liEl = document.createElement("li");
          liEl.textContent = `${level.height}p`;

          liEl.addEventListener("click", function () {
            hls.currentLevel = index;
            qualityNoteEl.textContent = `${level.height}p`;

            qualityList.classList.toggle("active");
          });

          qualityList.appendChild(liEl)

          qualityContainer.appendChild(qualityList);
        });
      }
    });

    hls.on(Hls.Events.LEVEL_LOADED, (_, data) => {
      const currentLevelEl = document.querySelector<HTMLSpanElement>(".card-option__level-note");

      const levelIndex: number = data.level;
      if (isHTMLElement(currentLevelEl)) {
        if (levelIndex === -1) {
          currentLevelEl.textContent = "Текущий уровень: Авто";
        } else {
          const level = hls.levels[levelIndex];
          currentLevelEl.textContent = `Текущий уровень: ${level.height}p`;
        }
      }
    });

    function updateBufferSize() {
      const bufferSizeEl = document.querySelector<HTMLSpanElement>(".card-option__buffer-note");

      if (isHTMLElement(bufferSizeEl)) {
        bufferSizeEl.textContent = `Текущий размер буфера: ${(bufferSize / (1024 * 1024)).toFixed(2)} Мб`;
      }
    }
  }

  return videoEl;
}