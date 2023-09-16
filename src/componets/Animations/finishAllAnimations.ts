const body: HTMLBodyElement | null = document.querySelector("body");

export function finishAllAnimations(): void {

    const childrenCount: number | undefined =  body?.children.length;

    if (childrenCount) {
        for (let i = childrenCount; i > 0; i-- ) {
            if (body?.children[i] && body.children[i].className !== undefined) {
                body.removeChild(body.children[i]);
            }
        }
    }
}