import * as PIXI from "pixi.js";

import { Bitmap } from ".";

declare type RGBA = [number, number, number, number];

declare class Sprite extends PIXI.Sprite {

    public bitmap: Bitmap;
    public opacity: number;

    constructor(bitmap: Bitmap);

    public getBlendColor(): RGBA
    public getColorTone(): RGBA
    public hide(): void;
    public move(x: number, y: number): void;
    public setBlendColor(color: RGBA): void
    public setColorTone(tone: RGBA): void;
    public setFrame(x: number, y: number, width: number, height: number): void;
    public setHue(hue: number): void;
    public show(): void;
    public update(): void;
    public updateVisibility(): void;

}

export {
    RGBA,
    Sprite
};
