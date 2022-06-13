import { Sprite, Bitmap, Graphics } from "../lib/rmmz_core";

class OpenCanvas extends Sprite {
    constructor() {
        super(new Bitmap(Graphics.boxWidth, Graphics.boxHeight));
    }

    /**
     * Draw a rectangle at a specified position.
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param color
     */
    rect(x:number,y:number,width:number,height:number, color:string='#ff000050') {
        this.bitmap.fillRect(x, y, width, height, color);
    }
}