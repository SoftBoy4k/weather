const quantity: number = 300;
const body: HTMLBodyElement | null = document.querySelector("body");
let index: number = 0;

export function bgSnow():void {
    while (index < quantity) {
        const drop = document.createElement('div');
        const size: number = Math.random() * 5;
        const positionX: number = Math.floor(Math.random() * window.innerWidth);
        const delay = Math.random() * 20;
        const duration = Math.random() * 10;
    
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = positionX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = duration + 's';
        
        drop.className = "bg-snow"
        body?.appendChild(drop);
        index++;
    }
} 