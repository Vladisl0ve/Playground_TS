import { AnimatedSprite, Container, Texture } from "pixi.js";

export class VaverkaScene extends Container {
    constructor() {
        super();

        // This is an array of strings, we need an array of Texture
        const vaverkaFrames: Array<string> = new Array<string>();

        for (let index = 1; index <= 60 ; index++)
            vaverkaFrames.push(`./woohoo_png/frame_apngframe${index.toString().padStart(2, '0')}.png`)            
        

        // `array.map()` creates an array from another array by doing something to each element.
        // `(stringy) => Texture.from(stringy)` means
        // "A function that takes a string and returns a Texture.from(that String)"
        const animatedClampy: AnimatedSprite = new AnimatedSprite(vaverkaFrames.map((stringy) => Texture.from(stringy)));
        // (if this javascript is too much, you can do a simple for loop and create a new array with Texture.from())

        this.addChild(animatedClampy); // we just add it to the scene

        // Now... what did we learn about assigning functions...
        //animatedClampy.onFrameChange = this.onClampyFrameChange.bind(this);
        animatedClampy.animationSpeed = 0.655;
        animatedClampy.play();
    }

    // private onClampyFrameChange(currentFrame : number): void {
    //     console.log("Clampy's current frame is", currentFrame);
    // }
}