const body: HTMLBodyElement | null = document.querySelector("body");

export function bgClouds():void {
  const clouds = document.createElement("div");
  clouds.classList.add("bg-clouds");
  body?.appendChild(clouds);
} 