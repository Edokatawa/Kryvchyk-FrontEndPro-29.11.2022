"use strict";

const clearElements = classList => {
    for (let className of classList) {
        const elem = document.querySelector(`.${className}`);

        elem.innerHTML = "";
    }
};
