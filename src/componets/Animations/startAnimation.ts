import { cloudsAnimation, rainAnimation, snowAnimation } from "./animations";


export const startAnimation = (iconName:string): void => {

    const regexRain = /ra/;
    const regexSnow = /sn/;

    if (regexRain.test(iconName)) {
        rainAnimation.startAnimation();
        snowAnimation.finishRainAnimation();
        cloudsAnimation.finishRainAnimation();
    } else if (regexSnow.test(iconName)) {
        snowAnimation.startAnimation();
        rainAnimation.finishRainAnimation();
        cloudsAnimation.finishRainAnimation();
    } else {
        cloudsAnimation.startAnimation();
        rainAnimation.finishRainAnimation();
        snowAnimation.finishRainAnimation();
    }
}