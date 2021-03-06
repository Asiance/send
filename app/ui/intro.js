const html = require("choo/html");
const assets = require("../../common/assets");

module.exports = function intro(state) {
  return html`
    <send-intro
      class="flex flex-col items-center justify-center bg-white px-6 md:py-0 py-6 mb-0 h-full w-full dark:bg-grey-90"
    >
      <div class="mt-12 flex flex-col h-full">
        <p class="max-w-sm leading-normal mt-6 md:mt-2 md:pr-16">
          1.0GB maximum of images, pdf, ms office or archives.
        </p>
        <img class="intro" src="${assets.get("intro.svg")}" />
      </div>
    </send-intro>
  `;
};
