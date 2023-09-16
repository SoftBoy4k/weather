import { bgClouds } from "./bgClouds"
import { bgRain } from "./bgRain"
import { bgSnow } from "./bgSnow";
import { finishAllAnimations } from "./finishAllAnimations";

let currentAnimation = "";

export const startAnimation = (iconName:string): void => {

    const regexRain = /ra/;
    const regexSnow = /sn/;

    if (regexRain.test(iconName) && currentAnimation !== "rain") {
        currentAnimation = "rain";
        finishAllAnimations();
        bgRain();
    } else if (regexSnow.test(iconName) && currentAnimation !== "snow") {
        currentAnimation = "snow";
        finishAllAnimations();
        bgSnow();
    } else if (currentAnimation !== "clouds") {
        currentAnimation = "clouds";
        finishAllAnimations();
        bgClouds();
    }
}