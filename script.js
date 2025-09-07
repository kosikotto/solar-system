const gombMinus = document.querySelector(".gombMinus");
const gombPlus = document.querySelector(".gombPlus");
const speed = document.querySelector(".speed");

const speedBolygo = document.querySelectorAll(".bolygo");
const korpalya = document.querySelectorAll(".korpalya");

var currentValue = document.querySelector(".speed").textContent;
let displayValue = currentValue;

const planet = document.querySelectorAll(".planet");
const infoBoxes = document.querySelectorAll(".infoBox");

const closeX = document.querySelectorAll(".closeX");

const continueButton = document.querySelector(".tutorialFinishButton");
const tutorial = document.querySelector(".tutorial");

const questionMark = document.querySelector(".questionMark");

const loadingScreen = document.querySelector(".loadingScreen");

const loaded = document.querySelector(".loaded");

const dropDown = document.querySelector(".dropDown");

window.addEventListener("resize", () => {
    if (window.innerHeight >= window.innerWidth) {

        var tarolo = getComputedStyle(document.documentElement).getPropertyValue("--viewportValue3");
        console.log(tarolo);
        document.documentElement.style.setProperty("--viewportValue", tarolo);
    } else {
        var tarolo = getComputedStyle(document.documentElement).getPropertyValue("--viewportValue2");
        console.log(tarolo);
        document.documentElement.style.setProperty("--viewportValue", tarolo);
    }
});

window.addEventListener("load", () => {
    if (window.innerHeight >= window.innerWidth) {

        var tarolo = getComputedStyle(document.documentElement).getPropertyValue("--viewportValue3");
        console.log(tarolo);
        document.documentElement.style.setProperty("--viewportValue", tarolo);
    } else {
        var tarolo = getComputedStyle(document.documentElement).getPropertyValue("--viewportValue2");
        console.log(tarolo);
        document.documentElement.style.setProperty("--viewportValue", tarolo);
    }

    setTimeout(() => {
        loadingScreen.classList.add("loadingScreenDone");
        setTimeout(() => {
            loaded.classList.add("loadedDone");

            setTimeout(() => {
                loadingScreen.remove();
                setTimeout(() => {
                    tutorial.classList.add("tutorialVisible");
                }, 100);
            }, 500);
        }, 1000);
    }, 1000);
});

continueButton.addEventListener("click", ()=>{
    tutorial.classList.remove("tutorialVisible");

    setTimeout(() => {
        tutorial.classList.add("tutorialClosedZindex");
    }, 500);
});

questionMark.addEventListener("click", ()=> {
    document.querySelector(".tutorial").classList.remove("tutorialClosedZindex");
    document.querySelector(".tutorial").classList.add("tutorialVisible");
});

gombMinus.addEventListener("click", ()=> {
    if(currentValue > 0.25) {
        currentValue = +currentValue - 0.25;
    }

    if (currentValue == 0) {
        currentValue = 1.75;
        document.querySelector(".speed").innerHTML = 0.25;
    }

    if (currentValue == 1.75) {
        document.querySelector(".speed").innerHTML = 0.25;
    }

    if (currentValue == 1.5) {
        document.querySelector(".speed").innerHTML = 0.5;
    }

    if (currentValue == 1.25) {
        document.querySelector(".speed").innerHTML = 0.75;
    }

    if (currentValue == 1) {
        document.querySelector(".speed").innerHTML = 1;
    }

    if (currentValue == 0.75) {
        document.querySelector(".speed").innerHTML = 1.25;
    }

    if (currentValue == 0.5) {
        document.querySelector(".speed").innerHTML = 1.5;
    }

    if (currentValue == 0.25) {
        document.querySelector(".speed").innerHTML = 1.75;
    }

    console.log(currentValue);

    document.documentElement.style.setProperty("--animationDelay", currentValue+"s");
});

const ezAMinuszGomb = 0;

gombPlus.addEventListener("click", ()=> {
    if(currentValue < 2 && currentValue != 0) {
        currentValue = +currentValue + 0.25;
    }

    if (currentValue == 2) {
        currentValue = 0;
        document.querySelector(".speed").innerHTML = 0;
    }

    if (currentValue == 1.75) {
        document.querySelector(".speed").innerHTML = 0.25;
    }

    if (currentValue == 1.5) {
        document.querySelector(".speed").innerHTML = 0.5;
    }

    if (currentValue == 1.25) {
        document.querySelector(".speed").innerHTML = 0.75;
    }

    if (currentValue == 1) {
        document.querySelector(".speed").innerHTML = 1;
    }

    if (currentValue == 0.75) {
        document.querySelector(".speed").innerHTML = 1.25;
    }

    if (currentValue == 0.5) {
        document.querySelector(".speed").innerHTML = 1.5;
    }

    if (currentValue == 0.25) {
        document.querySelector(".speed").innerHTML = 1.75;
    }

    console.log(currentValue);

    document.documentElement.style.setProperty("--animationDelay", currentValue+"s");
});

const sun = document.querySelector(".nap");

sun.addEventListener("mouseover", ()=>{
    infoBoxes.forEach(element => {
        element.classList.remove("activeInfo");
    });

    if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
        document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

        if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
            document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
        }
    }

    document.querySelector(".napInfo").classList.add("activeInfo");
});

planet.forEach(entry => {
    entry.addEventListener("mouseover", ()=>{
        if (entry.classList.contains("merkurPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".merkurInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("venusPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".venuszInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("foldPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".foldInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("marsPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".marsInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("jupiterPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".jupiterInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("szaturnuszPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".szaturnuszInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("uranusPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".uranuszInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("neptunuszPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".neptunuszInfo").classList.add("activeInfo");
        }

        if (entry.classList.contains("plutoPlanet")) {
            infoBoxes.forEach(element => {
                element.classList.remove("activeInfo");
            });

            if (!document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
                document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetVisible");

                if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                    document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
                }
            }

            document.querySelector(".plutoInfo").classList.add("activeInfo");
        }
    });
});

closeX.forEach(element => {
    element.addEventListener("click", ()=> {
        infoBoxes.forEach(element => {
            element.classList.remove("activeInfo");

            if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
                document.querySelector(".infoAboutPlanet").classList.remove("infoAboutPlanetDropBoxOpen");
            }
        });

        document.querySelector(".infoAboutPlanet").classList.remove("infoAboutPlanetVisible");

    });
});

dropDown.addEventListener("click", ()=>{
    if (document.querySelector(".speedWrapper").classList.contains("speedWrapperOpen")) {
        document.querySelector(".speedWrapper").classList.remove("speedWrapperOpen")
        dropDown.classList.remove("dropDownOpen");
        document.querySelector(".infoAboutPlanet").classList.remove("infoAboutPlanetDropBoxOpen");
    }
    else {
        document.querySelector(".speedWrapper").classList.add("speedWrapperOpen")
        dropDown.classList.add("dropDownOpen");
        if (document.querySelector(".infoAboutPlanet").classList.contains("infoAboutPlanetVisible")) {
            document.querySelector(".infoAboutPlanet").classList.add("infoAboutPlanetDropBoxOpen");
        }
    }
});