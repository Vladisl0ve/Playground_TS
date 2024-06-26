import { Application } from 'pixi.js'
import { VaverkaScene } from './scenes/VaverkaScene'; // This is the import statement
import { TickerVaverka } from './scenes/TickerVaverka';

const app = new Application<HTMLCanvasElement>({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 640,
    height: 480
});

// pass in the screen size to avoid "asking up"
const sceny: VaverkaScene = new VaverkaScene();
const sceny2: TickerVaverka = new TickerVaverka(app.screen.width, app.screen.height);

app.stage.addChild(sceny)
app.stage.addChild(sceny2)