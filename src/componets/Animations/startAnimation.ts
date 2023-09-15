import { bgRain } from "./bgRain"
import { bgSnow } from "./bgSnow";

export const startAnimation = (iconName:string): void => {

    const regexRain = /ra/;
    const regexSnow = /sn/;

    if (regexRain.test(iconName)) {
        bgRain();
    } else if (regexSnow.test(iconName)) {
        bgSnow();
    }
}