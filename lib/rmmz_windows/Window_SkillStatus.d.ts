import { Window_StatusBase } from "./Window_StatusBase";
import { Rectangle } from "../rmmz_core";
import { Game_Actor } from "../rmmz_objects";

/**
 * Window_SkillStatus
 * 
 * The window for displaying the skill user's status on the skill screen.
 */
declare class Window_SkillStatus extends Window_StatusBase {
    constructor(rect: Rectangle);

    public setActor(actor: Game_Actor): void;
    public refresh(): void;
}

export { Window_SkillStatus }