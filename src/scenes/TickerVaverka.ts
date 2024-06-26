import { Container, Sprite, Ticker } from "pixi.js";

export class TickerVaverka extends Container {
    private readonly screenWidth: number;
    private readonly screenHeight: number;

    private clampy: Sprite;
    private clampyVelocity: number = 5;
    private startX: number = -250;
    constructor(screenWidth: number, screenHeight: number) {
        super();

        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        this.clampy = Sprite.from("clampy.png");

        this.clampy.anchor.set(0.5);
        this.clampy.x = this.startX; // we start it at 0
        this.clampy.y = this.screenHeight / 2;
        this.addChild(this.clampy);

        // See the `, this` thingy there? That is another way of binding the context!
        Ticker.shared.add(this.update, this);

        Ticker.shared.start()
        // If you want, you can do it the bind way
        // Ticker.shared.add(this.update.bind(this)); 
    }

    private update(deltaTime: number): void {
       // console.log(`fps: ${Ticker.shared.FPS}`);
        this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;

        if (this.clampy.x > this.screenWidth + this.screenWidth * 0.4) {
            // Woah there clampy, come back inside the screen!
            this.clampy.x = this.startX;
            this.clampy.tint = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        }
    }
}