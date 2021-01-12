const nextPrevButtons = document.querySelector(".next-prev-buttons");
const moreButtonWrapper = document.querySelector(".more-button-wrapper");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const computerScreens = document.querySelector(".computer-screens");
const computerScreensWrapper = document.querySelector(".computer-screens-wrapper");
const computerScreen = document.querySelectorAll(".computer-screen");
const learnMoreButton = document.querySelector(".learn-more-button");

window.onload = () => {
    computerScreenHeight = Array.from(computerScreen)[0].clientHeight;
    computerScreensWrapperHeight = computerScreensWrapper.clientHeight;
    console.log(computerScreenHeight);
    nextPrevButtons.style.height = `${computerScreensWrapperHeight}px`
    moreButtonWrapper.style.height = `${computerScreensWrapperHeight}px`
}
computerScreenWidth = Array.from(computerScreen)[0].clientWidth;


let time = 0;
prevButton.style.visibility = "hidden";
const updateButtons = () => {
    if (time >= computerScreen.length - 1) {
        nextButton.style.visibility = "hidden";
    } else {
        nextButton.style.visibility = "visible";
    }
    if (time === 0) {
        prevButton.style.visibility = "hidden";
    } else {
        prevButton.style.visibility = "visible";
    }
}
nextButton.onclick = () => {
    time++;
    prevButton.style.visibility = "visible";
    computerScreens.setAttribute("style", `transform: translateX(-${computerScreenWidth * time + 1}px)`);
    updateButtons();
}
prevButton.onclick = () => {
    time--;
    computerScreens.setAttribute("style", `transform: translateX(-${computerScreenWidth * time + 1}px)`);
    updateButtons();
}