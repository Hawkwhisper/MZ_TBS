import { Window } from "../rmmz_core";
import { Rectangle } from "../rmmz_core";

declare namespace Window_Base {
    export interface TextState {
        text: string;
        index: number;
        x: number;
        y: number;
        width: number;
        height: number;
        startX: number;
        startY: number;
        rtl: boolean;
        buffer: string;
        drawing: boolean;
        outputWidth: number;
        outputHeight: number;
    }
}

/**
 * Window_Base
 * The superclass of all windows within the game.
 */
declare class Window_Base extends Window{
    constructor(rect: Rectangle);

    public destroy(options?: {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }): void;

    public checkRectObject(rect: Rectangle): void;
    public lineHeight(): number;
    public itemWidth(): number;
    public itemHeight(): number;
    public itemPadding(): number;
    public baseTextRect(): Rectangle;
    public loadWindowskin(): void;
    public updatePadding(): void;
    public updateBackOpacity(): void;
    public fittingHeight(numLines: number): number;
    public updateTone(): void;
    public createContents(): void;
    public destroyContents(): void;
    public contentsWidth(): number;
    public contentsHeight(): number;
    public resetFontSettings(): void;
    public resetTextColor(): void;
    public update(): void;
    public updateOpen(): void;
    public updateClose(): void;
    public open(): void;
    public close(): void;
    public isOpening(): boolean;
    public isClosing(): boolean;
    public show(): void;
    public hide(): void;
    public activate(): void;
    public deactivate(): void;

    /**
     * The returned string is a color in hexadecimal format.
     * 
     * @returns {string} Pixel color (hex format).
     */
    public systemColor(): string;
    public translucentOpacity(): number;

    /**
     * Changes the text color for this window.
     * 
     * @param {string} color - The color of the text in CSS format.
     */
    public changeTextColor(color: string): void;

    /**
     * Changes the outline color for this window.
     * 
     * @param {string} color - The color of the outline in CSS format.
     */
    public changeOutlineColor(color: string): void;

    public changePaintOpacity(enabled: boolean): void;
    public drawRect(x: number, y: number, width: number, height: number): void;
    public drawText(text: string | number, x: number, y: number, maxWidth: number, align: string): void;
    public textWidth(text: string): number;
    public drawTextEx(text: string, x: number, y: number, width: number): number;
    public textSizeEx(text: string): { width: number, height: number };
    public createTextState(text: string, x: number, y: number, width: number): Window_Base.TextState;
    public processAllText(textState: Window_Base.TextState): void;
    public flushTextState(textState: Window_Base.TextState): void;
    public createTextBuffer(rtl: boolean): string;
    public convertEscapeCharacters(text: string): string;
    public actorName(n: number): string;
    public partyMemberName(n: number): string;
    public processCharacter(textState: Window_Base.TextState): void;
    public processControlCharacter(textState: Window_Base.TextState, c: string): void;
    public processNewLine(textState: Window_Base.TextState): void;
    public obtainEscapeCode(textState: Window_Base.TextState): void;
    public obtainEscapeParam(textState: Window_Base.TextState): number | string;
    public processEscapeCharacter(code: string, textState: Window_Base.TextState): void;
    public processColorChange(colorIndex: number): void;
    public processDrawIcon(iconIndex: number, textState: Window_Base.TextState): void;
    public makeFontBigger(): void;
    public makeFontSmaller(): void;
    public calcTextHeight(textState: Window_Base.TextState): number;
    public maxFontSizeInLine(line: string): number;
    public drawIcon(iconIndex: number, x: number, y: number): void;
    public drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
    public drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    // TODO can we be more specific about the 'item' type? It looks like it can be a consumable item, a piece of equipment or a skill...
    public drawItemName(item: { iconIndex: number; name: string; description: string; }, x: number, y: number, width: number): void;
    // TODO value seems like it should be number, but is passed directly to draw text which requires a string...
    public drawCurrencyValue(value: number | string, unit: string, x: number, y: number, width: number): void;
    public setBackgroundType(type: number): void;
    public showBackgroundDimmer(): void;
    public createDimmerSprite(): void;
    public hideBackgroundDimmer(): void;
    public updateBackgroundDimmer(): void;
    public refreshDimmerBitmap(): void;
    public playCursorSound(): void;
    public playOkSound(): void;
    public playBuzzerSound(): void;
}

export { Window_Base };