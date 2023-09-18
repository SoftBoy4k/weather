import { bgClouds } from "./bgClouds"
import { bgRain } from "./bgRain"
import { bgSnow } from "./bgSnow";
import { finishAllAnimations } from "./finishAllAnimations";

class Animation {
    private active: boolean;
    private animation: () => void;

    constructor(animation: () => void) {
        this.animation = animation;
        this.active = false;
    }

    startAnimation():void {
        if (!this.active) {
            this.active = true;
            finishAllAnimations();
            this.animation();
        }
    }

    finishRainAnimation():void {
        this.active = false;
    }
}

export const rainAnimation = new Animation(bgRain);
export const snowAnimation = new Animation(bgSnow);
export const cloudsAnimation = new Animation(bgClouds);