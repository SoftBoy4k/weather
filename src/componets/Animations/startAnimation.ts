import { bgRain } from "./bgRain"

export const startAnimation = (iconName:string): void => {

    const regexRain = /ra/;

    if (regexRain.test(iconName)) {
        bgRain();
    }
}